
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ReportFilters from "@/components/reports/ReportFilters";
import ReportsList from "@/components/reports/ReportsList";
import CreateReportDialog from "@/components/reports/CreateReportDialog";
import { FilterState, ReportType } from "@/types/report";
import { reportsData } from "@/data/reportsData";
import { FileText, Zap } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Reports = () => {
  const { toast } = useToast();
  const [reports, setReports] = useState<ReportType[]>(reportsData);
  const [filters, setFilters] = useState<FilterState>({
    period: "Май 2025",
    office: "Все офисы",
    dataType: "Энергопотребление",
    format: "PDF"
  });
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const applyFilters = () => {
    // Имитация фильтрации отчетов
    console.log("Применяем фильтры:", filters);
    
    // Простая фильтрация по типу отчета (просто демонстрация)
    const filtered = reportsData.filter(report => {
      if (filters.format === "PDF" && report.type === "pdf") return true;
      if (filters.format === "EXCEL" && report.type === "excel") return true;
      return filters.format === "CSV" || filters.format === "";
    });
    
    setReports(filtered);
    
    toast({
      title: "Фильтры применены",
      description: `Найдено ${filtered.length} отчетов`,
      duration: 3000,
    });
  };

  const handleCreateReport = (reportData: any) => {
    // Генерация ID и даты для нового отчета
    const newId = (reports.length + 1).toString();
    const currentDate = new Date().toLocaleDateString('ru-RU');
    
    // Определяем тип иконки в зависимости от типа данных
    const getIcon = () => {
      return <Zap className="h-5 w-5 text-gray-700" />;
    };
    
    // Создаем новый отчет
    const newReport: ReportType = {
      id: newId,
      title: reportData.title || `Отчет по ${reportData.dataType} за ${reportData.period}`,
      type: reportData.format.toLowerCase() === 'pdf' ? 'pdf' : 'excel',
      size: "0.8 MB",
      date: currentDate,
      icon: getIcon(),
    };
    
    // Добавляем отчет в начало списка
    setReports([newReport, ...reports]);
    
    toast({
      title: "Отчет создан",
      description: `Отчет "${newReport.title}" успешно создан`,
      duration: 3000,
    });
  };

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Отчеты</h1>
        
        <div className="flex justify-end">
          <Button 
            className="bg-green-500 hover:bg-green-600"
            onClick={() => setIsCreateDialogOpen(true)}
          >
            <FileText className="h-4 w-4 mr-2" />
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
            <ReportsList reports={reports} />
          </div>
        </div>
      </div>
      
      {/* Диалог создания отчета */}
      <CreateReportDialog 
        open={isCreateDialogOpen}
        onOpenChange={setIsCreateDialogOpen}
        onCreateReport={handleCreateReport}
      />
    </Layout>
  );
};

export default Reports;
