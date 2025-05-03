
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FilterState } from "@/types/report";
import FilterSelect from "./FilterSelect";

type ReportFiltersProps = {
  filters: FilterState;
  onFilterChange: (key: keyof FilterState, value: string) => void;
  onApplyFilters: () => void;
};

const filterOptions = {
  period: ["Май 2025", "Апрель 2025", "Март 2025", "Февраль 2025"],
  office: ["Все офисы", "Главный офис", "Офис разработки", "Региональный офис"],
  dataType: ["Энергопотребление", "Выбросы CO₂", "Отопление", "Водоснабжение"],
  format: ["PDF", "EXCEL", "CSV"]
};

const ReportFilters = ({ 
  filters, 
  onFilterChange, 
  onApplyFilters 
}: ReportFiltersProps) => {
  return (
    <Card className="p-6 space-y-6">
      <h2 className="text-lg font-medium">Фильтры</h2>
      
      <div className="space-y-4">
        <FilterSelect 
          label="Период"
          value={filters.period}
          onChange={(value) => onFilterChange('period', value)}
          options={filterOptions.period}
        />
        
        <FilterSelect 
          label="Офис"
          value={filters.office}
          onChange={(value) => onFilterChange('office', value)}
          options={filterOptions.office}
        />
        
        <FilterSelect 
          label="Тип данных"
          value={filters.dataType}
          onChange={(value) => onFilterChange('dataType', value)}
          options={filterOptions.dataType}
        />
        
        <FilterSelect 
          label="Формат"
          value={filters.format}
          onChange={(value) => onFilterChange('format', value)}
          options={filterOptions.format}
        />
      </div>
      
      <Button 
        className="w-full bg-green-500 hover:bg-green-600"
        onClick={onApplyFilters}
      >
        Применить фильтры
      </Button>
    </Card>
  );
};

export default ReportFilters;
