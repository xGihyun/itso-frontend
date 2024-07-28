import { downloadSpreadsheet } from "@/lib/spreadsheet";
import { Button } from "@/components/ui/button";

export default function Test() {
  return <Button onClick={downloadSpreadsheet}>Download</Button>;
}
