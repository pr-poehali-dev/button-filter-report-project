
import { BarChart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ReportType } from "@/types/report";
import ReportItem from "./ReportItem";

type ReportsListProps = {
  reports: ReportType[];
};

const ReportsList = ({ reports }: ReportsListProps) => {
  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">Сформированные отчеты</h2>
        <div className="flex items-center space-x-2">
          <BarChart className="h-4 w-4 text-gray-500" />
          <span className="text-sm text-gray-700">Сортировка</span>
        </div>
      </div>
      
      <div className="space-y-4">
        {reports.map((report) => (
          <ReportItem key={report.id} report={report} />
        ))}
      </div>
    </Card>
  );
};

export default ReportsList;
