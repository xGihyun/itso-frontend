import type { CategoriesTable } from "@/drizzle/schema";
import type { InferSelectModel } from "drizzle-orm";

export type CategoryResult = Omit<
  InferSelectModel<typeof CategoriesTable>,
  "createdAt" | "updatedAt"
>;
