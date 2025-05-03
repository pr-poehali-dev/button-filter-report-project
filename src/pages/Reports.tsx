
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ReportFilters from "@/components/reports/ReportFilters";
import ReportsList from "@/components/reports/ReportsList";
import { FilterState } from "@/types/report";
import { reportsData } from "@/data/reportsData";

const Reports = () => {
  const [filters, setFilters] = useState<FilterState>({
    period: "Май 2025",
    office: "Все офисы",
    dataType: "Энергопотребление",
    format: "PDF"
  });

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const applyFilters = () => {
    // Здесь будет логика применения фильтров
    console.log("Применяем фильтры:", filters);
  };

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Отчеты</h1>
        
        <div className="flex justify-end">
          <Button className="bg-green-500 hover:bg-green-600">
            <span className="mr-2">📄</span>
            Создать отчет
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Фильтры */}
          <div className="md:col-span-1">
            <ReportFilters 
              filters={filters}
              onFilterChange={handleFilterChange}
              onApplyFilters={applyFilters}
            />
          </div>
          
          {/* Список отчетов */}
          <div className="md:col-span-3">
            <ReportsList reports={reportsData} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Reports;
