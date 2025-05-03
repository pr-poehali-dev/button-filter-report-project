
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FilterSelect } from "./FilterSelect";

type CreateReportDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreateReport: (reportData: any) => void;
};

const CreateReportDialog = ({ open, onOpenChange, onCreateReport }: CreateReportDialogProps) => {
  const [reportData, setReportData] = useState({
    title: "",
    period: "Май 2025",
    office: "Все офисы",
    dataType: "Энергопотребление",
    format: "PDF",
    description: ""
  });

  const handleChange = (field: string, value: string) => {
    setReportData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    onCreateReport(reportData);
    onOpenChange(false);
    // Сбросить форму
    setReportData({
      title: "",
      period: "Май 2025",
      office: "Все офисы",
      dataType: "Энергопотребление",
      format: "PDF",
      description: ""
    });
  };

  const periodOptions = ["Май 2025", "Апрель 2025", "Март 2025", "Февраль 2025"];
  const officeOptions = ["Все офисы", "Главный офис", "Офис разработки", "Региональный офис"];
  const dataTypeOptions = ["Энергопотребление", "Выбросы CO₂", "Отопление", "Водоснабжение"];
  const formatOptions = ["PDF", "EXCEL", "CSV"];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Создание нового отчета</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="title">Название отчета</Label>
            <Input
              id="title"
              value={reportData.title}
              onChange={(e) => handleChange("title", e.target.value)}
              placeholder="Введите название отчета"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Период</Label>
              <select 
                className="w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 text-gray-700 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                value={reportData.period}
                onChange={(e) => handleChange("period", e.target.value)}
              >
                {periodOptions.map(option => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
            
            <div className="space-y-2">
              <Label>Офис</Label>
              <select 
                className="w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 text-gray-700 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                value={reportData.office}
                onChange={(e) => handleChange("office", e.target.value)}
              >
                {officeOptions.map(option => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Тип данных</Label>
              <select 
                className="w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 text-gray-700 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                value={reportData.dataType}
                onChange={(e) => handleChange("dataType", e.target.value)}
              >
                {dataTypeOptions.map(option => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
            
            <div className="space-y-2">
              <Label>Формат</Label>
              <select 
                className="w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 text-gray-700 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                value={reportData.format}
                onChange={(e) => handleChange("format", e.target.value)}
              >
                {formatOptions.map(option => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Описание</Label>
            <Input
              id="description"
              value={reportData.description}
              onChange={(e) => handleChange("description", e.target.value)}
              placeholder="Краткое описание отчета"
            />
          </div>
        </div>
        
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>Отмена</Button>
          <Button className="bg-green-500 hover:bg-green-600" onClick={handleSubmit}>Создать отчет</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateReportDialog;
