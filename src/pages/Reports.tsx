
import { useState } from "react";
import { ChevronDown, Zap, BarChart, LineChart, DollarSign, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select } from "@/components/ui/select";
import Layout from "@/components/Layout";

type ReportType = {
  id: string;
  title: string;
  type: "pdf" | "excel";
  size: string;
  date: string;
  icon: React.ReactNode;
};

const Reports = () => {
  const [period, setPeriod] = useState("Май 2025");
  const [office, setOffice] = useState("Все офисы");
  const [dataType, setDataType] = useState("Энергопотребление");
  const [format, setFormat] = useState("PDF");

  const reports: ReportType[] = [
    {
      id: "1",
      title: "Отчет по энергопотреблению за Апрель 2025",
      type: "pdf",
      size: "2.4 MB",
      date: "03.05.2025",
      icon: <Zap className="h-5 w-5 text-gray-700" />,
    },
    {
      id: "2",
      title: "Сводка по выбросам CO₂ за 1 квартал 2025",
      type: "excel",
      size: "1.8 MB",
      date: "15.04.2025",
      icon: <Leaf className="h-5 w-5 text-gray-700" />,
    },
    {
      id: "3",
      title: "Анализ эффективности систем отопления",
      type: "pdf",
      size: "3.2 MB",
      date: "07.04.2025",
      icon: <LineChart className="h-5 w-5 text-gray-700" />,
    },
    {
      id: "4",
      title: "Потребление электроэнергии по отделам",
      type: "excel",
      size: "1.5 MB",
      date: "31.03.2025",
      icon: <Zap className="h-5 w-5 text-gray-700" />,
    },
    {
      id: "5",
      title: "Финансовый отчет по затратам на электроэнергию",
      type: "pdf",
      size: "4.1 MB",
      date: "15.03.2025",
      icon: <DollarSign className="h-5 w-5 text-gray-700" />,
    },
  ];

  const applyFilters = () => {
    // Здесь будет логика применения фильтров
    console.log("Применяем фильтры:", { period, office, dataType, format });
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
            <Card className="p-6 space-y-6">
              <h2 className="text-lg font-medium">Фильтры</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Период</label>
                  <div className="relative">
                    <select 
                      className="w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 text-gray-700 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                      value={period}
                      onChange={(e) => setPeriod(e.target.value)}
                    >
                      <option>Май 2025</option>
                      <option>Апрель 2025</option>
                      <option>Март 2025</option>
                      <option>Февраль 2025</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-500" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Офис</label>
                  <div className="relative">
                    <select 
                      className="w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 text-gray-700 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                      value={office}
                      onChange={(e) => setOffice(e.target.value)}
                    >
                      <option>Все офисы</option>
                      <option>Главный офис</option>
                      <option>Офис разработки</option>
                      <option>Региональный офис</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-500" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Тип данных</label>
                  <div className="relative">
                    <select 
                      className="w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 text-gray-700 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                      value={dataType}
                      onChange={(e) => setDataType(e.target.value)}
                    >
                      <option>Энергопотребление</option>
                      <option>Выбросы CO₂</option>
                      <option>Отопление</option>
                      <option>Водоснабжение</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-500" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Формат</label>
                  <div className="relative">
                    <select 
                      className="w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 text-gray-700 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                      value={format}
                      onChange={(e) => setFormat(e.target.value)}
                    >
                      <option>PDF</option>
                      <option>EXCEL</option>
                      <option>CSV</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-500" />
                  </div>
                </div>
              </div>
              
              <Button 
                className="w-full bg-green-500 hover:bg-green-600"
                onClick={applyFilters}
              >
                Применить фильтры
              </Button>
            </Card>
          </div>
          
          {/* Список отчетов */}
          <div className="md:col-span-3">
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
                  <div 
                    key={report.id} 
                    className="border border-gray-200 rounded-md p-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex space-x-3">
                        {report.icon}
                        <div>
                          <h3 className="font-medium">{report.title}</h3>
                          <p className="text-sm text-gray-500">Создан: {report.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className={`px-2 py-1 rounded text-xs ${report.type === 'pdf' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                          {report.type.toUpperCase()}
                        </span>
                        <span className="text-sm text-gray-500">{report.size}</span>
                        <div className="flex space-x-2">
                          <button className="text-gray-500 hover:text-gray-700">
                            <span className="text-lg">⬇️</span>
                          </button>
                          <button className="text-gray-500 hover:text-gray-700">
                            <span className="text-lg">👁️</span>
                          </button>
                          <button className="text-gray-500 hover:text-gray-700">
                            <span className="text-lg">⋮</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Reports;
