import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";

interface ReportGeneratorProps {
  dealId: string;
  brandName: string;
  campaignName: string;
}

export default function ReportGenerator({ dealId, brandName, campaignName }: ReportGeneratorProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Generate Report</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Report Generation</DialogTitle>
          <DialogDescription>
            Report Generation Feature - Coming Soon!
            <p className="text-sm text-muted-foreground mt-2">
              Deal ID: {dealId} <br />
              Brand: {brandName} <br />
              Campaign: {campaignName}
            </p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
