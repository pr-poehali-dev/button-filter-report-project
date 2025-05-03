
import { ChevronDown } from "lucide-react";

type FilterSelectProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
};

const FilterSelect = ({ label, value, onChange, options }: FilterSelectProps) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <div className="relative">
        <select 
          className="w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 text-gray-700 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-500" />
      </div>
    </div>
  );
};

export default FilterSelect;
