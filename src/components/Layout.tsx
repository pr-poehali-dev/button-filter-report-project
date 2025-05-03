
import { Link, useLocation } from "react-router-dom";
import { Leaf } from "lucide-react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? "text-green-600 font-medium" : "text-gray-700";
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Навигационная панель */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link to="/" className="flex items-center text-green-600 font-medium">
                <Leaf className="h-5 w-5 mr-2" />
                <span>Эко Офис</span>
              </Link>
            </div>
            <nav className="flex space-x-8">
              <Link to="/" className={`inline-flex items-center px-1 pt-1 ${isActive("/")}`}>
                <span className="mr-2">🏠</span>
                Главная
              </Link>
              <Link to="/profile" className={`inline-flex items-center px-1 pt-1 ${isActive("/profile")}`}>
                <span className="mr-2">👤</span>
                Мой профиль
              </Link>
              <Link to="/monitoring" className={`inline-flex items-center px-1 pt-1 ${isActive("/monitoring")}`}>
                <span className="mr-2">📊</span>
                Мониторинг
              </Link>
              <Link to="/management" className={`inline-flex items-center px-1 pt-1 ${isActive("/management")}`}>
                <span className="mr-2">⚙️</span>
                Управление
              </Link>
              <Link to="/reports" className={`inline-flex items-center px-1 pt-1 ${isActive("/reports")}`}>
                <span className="mr-2">📑</span>
                Отчеты
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full text-gray-500 hover:text-gray-700">
                <span className="text-lg">⚙️</span>
              </button>
              <button className="p-2 rounded-full text-gray-500 hover:text-gray-700">
                <span className="text-lg">↗️</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Основное содержимое */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {children}
      </main>
    </div>
  );
};

export default Layout;
