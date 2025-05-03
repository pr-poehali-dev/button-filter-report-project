
import { ReportType } from "@/types/report";

type ReportItemProps = {
  report: ReportType;
};

const ReportItem = ({ report }: ReportItemProps) => {
  return (
    <div 
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
  );
};

export default ReportItem;
