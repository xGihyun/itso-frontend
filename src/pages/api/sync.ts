import { db } from "@/drizzle/db";
import { getLatestEntries } from "@/drizzle/queries/entries";
import { EventYearsTable } from "@/drizzle/schema";
import { syncToSpreadsheet } from "@/lib/spreadsheet";
import { retryOperation } from "@/lib/utils";
import type { APIRoute } from "astro";
import { desc, eq } from "drizzle-orm";

export const GET: APIRoute = async () => {
  try {
    await retryOperation(async () => {
      await db.transaction(async (tx) => {
        const eventYears = await tx
          .select({ id: EventYearsTable.id })
          .from(EventYearsTable)
          .where(eq(EventYearsTable.status, "open"))
          .orderBy(desc(EventYearsTable.year))
          .limit(1);

        if (eventYears.length === 0) {
          throw new Error("No open event years found.");
        }

        const [eventYear] = eventYears;

        const latestEntries = await getLatestEntries(eventYear.id, tx);

        await syncToSpreadsheet(latestEntries, tx);
      });
    });

    return new Response("Successfully synced entries to spreadsheet.", {
      status: 201,
    });
  } catch (err) {
    console.error("Failed to sync entries to spreadsheet:", err);
    return new Response("Failed to sync entries to spreadsheet.", {
      status: 500,
    });
  }
};
