import { GOOGLE_SPREADSHEET_ID } from "astro:env/server";
import { GOOGLE_PRIVATE_KEY } from "astro:env/server";
import { GOOGLE_SERVICE_ACCOUNT_EMAIL } from "astro:env/server";
import { JWT } from "google-auth-library";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { db } from "@/drizzle/db";
import { camelCaseToHeader } from "./utils";
import { SyncLogsTable } from "@/drizzle/schema";

export type EntrySpreadsheetData = {
  createdAt: Date;
  category: {
    name: string;
  };
  school: {
    name: string;
    campus: string | null;
  };
  student: {
    firstName: string;
    middleName: string | null;
    lastName: string;
  };
  coach: {
    firstName: string;
    middleName: string | null;
    lastName: string;
    email: string;
    contactNumber: string;
  };
};

// TODO: Handle errors properly
export async function sheets(tx = db, entries: EntrySpreadsheetData[]) {
  console.log("Syncing to Google Sheets...");

  const serviceAccountAuth = new JWT({
    email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: GOOGLE_PRIVATE_KEY,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const doc = new GoogleSpreadsheet(GOOGLE_SPREADSHEET_ID, serviceAccountAuth);

  await doc.loadInfo();
  console.log("Title:", doc.title);

  const sheet = doc.sheetsByIndex[0];

  //await sheet.loadHeaderRow(2);

  const headerRow = [
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

  await sheet.setHeaderRow(headerRow, 2);

  // NOTE: This is pretty bad but it works
  const entryRows = entries.map((entry) => {
    const schoolFullName = `${entry.school.name}${entry.school.campus !== null ? " - " + entry.school.campus : ""}`;

    return {
      Category: entry.category.name,
      School: schoolFullName,
      "Student First Name": entry.student.firstName,
      "Student Middle Name": entry.student.middleName || "",
      "Student Last Name": entry.student.lastName,
      "Coach First Name": entry.coach.firstName,
      "Coach Middle Name": entry.coach.middleName || "",
      "Coach Last Name": entry.coach.lastName,
      "Coach Email": entry.coach.email,
      "Coach Contact Number": entry.coach.contactNumber,
    };
  });

  await sheet.addRows(entryRows);

  // TODO: Insert `entries.created_at` instead rather than relying on
  // `sync_logs.created_at` 
  await tx.insert(SyncLogsTable).values({ id: undefined, createdAt: undefined });

  console.log("Added new entries.");
}
