
import { Zap, LineChart, DollarSign, Leaf } from "lucide-react";
import { ReportType } from "@/types/report";

export const reportsData: ReportType[] = [
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
