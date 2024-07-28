import { Workbook } from "exceljs";

async function generateSpreadsheet(): Promise<Workbook> {
  const workbook = new Workbook();
  const worksheet = workbook.addWorksheet("Participants");

  worksheet.columns = [
    {
      header: "Category",
      key: "category",
      width: 20,
    },
    {
      header: "Student",
      key: "student",
      width: 40,
    },
    {
      header: "Coach",
      key: "coach",
      width: 40,
    },

    // Other data ...
  ];

  // Write data to spreadsheet
  for (let i = 2; i < 7; i++) {
    const row = worksheet.insertRow(i, {category: "HELLO", student: "WORLD"});
    //for (let j = 1; j < 4; j++) {
    //  const cell = row.getCell(j);
    //
    //  cell.value = "foo " + j;
    //}
  }

  return workbook;
}

export async function downloadSpreadsheet(): Promise<void> {
  console.log("Generating spreadsheet...");

  const workbook = await generateSpreadsheet();
  const buffer = await workbook.csv.writeBuffer();
  const blob = new Blob([buffer], { type: "text/csv" });

  console.log("Generated spreadsheet, downloading...");

  const blobUrl = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = blobUrl;
  link.download = "test.csv";

  document.body.appendChild(link);

  link.click();

  window.URL.revokeObjectURL(blobUrl);
  document.body.removeChild(link);

  console.log("Downloaded spreadsheet");
}
