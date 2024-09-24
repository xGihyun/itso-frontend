import { GOOGLE_SPREADSHEET_ID } from "astro:env/server";
import { GOOGLE_PRIVATE_KEY } from "astro:env/server";
import { GOOGLE_SERVICE_ACCOUNT_EMAIL } from "astro:env/server";
import { JWT } from "google-auth-library";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { db } from "@/drizzle/db";
import { SyncLogsTable } from "@/drizzle/schema";
import type { EntrySpreadsheetData } from "@/drizzle/queries/entries";

const HEADER_ROW = [
  "Category",
  "School",
  "Student First Name",
  "Student Middle Name",
  "Student Last Name",
  "Coach First Name",
  "Coach Middle Name",
  "Coach Last Name",
  "Coach Email",
  "Coach Contact Number",
];

type HeaderType = (typeof HEADER_ROW)[number];

// TODO: Handle errors properly
export async function syncToSpreadsheet(
  entries: EntrySpreadsheetData[],
  tx = db,
): Promise<void> {
  if (entries.length === 0) {
    console.log("No new entries to sync.");
    return;
  }

  console.log(`Syncing ${entries.length} entries to Google Sheets...`);

  const doc = await getSpreadsheetDocument();
  const sheet = doc.sheetsByIndex[0];

  await sheet.setHeaderRow(HEADER_ROW, 2);

  const entryRows = entries.map(formatEntryRow);

  await sheet.addRows(entryRows);

  await tx.insert(SyncLogsTable).values({ latestEntryId: entries[0].id });

  console.log(
    `Successfully synced ${entries.length} new entries to Google Sheets.`,
  );
}

async function getSpreadsheetDocument(): Promise<GoogleSpreadsheet> {
  const serviceAccountAuth = new JWT({
    email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: GOOGLE_PRIVATE_KEY,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const doc = new GoogleSpreadsheet(GOOGLE_SPREADSHEET_ID, serviceAccountAuth);

  await doc.loadInfo();

  return doc;
}

function formatEntryRow(
  entry: EntrySpreadsheetData,
): Record<HeaderType, string> {
  const schoolFullName = `${entry.school.name}${entry.school.campus !== null ? ` - ${entry.school.campus}` : ""}`;

  return {
    Category: entry.category.name,
    School: schoolFullName,
    "Student First Name": entry.student.firstName,
    "Student Middle Name": entry.student.middleName ?? "",
    "Student Last Name": entry.student.lastName,
    "Coach First Name": entry.coach.firstName,
    "Coach Middle Name": entry.coach.middleName ?? "",
    "Coach Last Name": entry.coach.lastName,
    "Coach Email": entry.coach.email,
    "Coach Contact Number": entry.coach.contactNumber,
  };
}
