
import { ReactNode } from 'react';

export type ReportType = {
  id: string;
  title: string;
  type: "pdf" | "excel";
  size: string;
  date: string;
  icon: ReactNode;
};

export type FilterState = {
  period: string;
  office: string;
  dataType: string;
  format: string;
};
