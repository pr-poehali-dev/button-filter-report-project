
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Leaf, Zap, BarChart } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <section className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl font-bold text-gray-800">Экологический Офис</h1>
            <p className="text-xl text-gray-600">
              Система мониторинга и управления энергоэффективностью вашего офисного пространства
            </p>
            <div className="flex space-x-4">
              <Button className="bg-green-500 hover:bg-green-600">
                Начать работу
              </Button>
              <Button variant="outline" className="border-green-500 text-green-600">
                Узнать больше
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&auto=format&fit=crop&q=80" 
              alt="Эко офис" 
              className="rounded-lg shadow-md w-full"
            />
          </div>
        </section>

        <h2 className="text-2xl font-semibold mt-12 mb-6">Основные функции</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 hover:shadow-md transition-shadow">
            <div className="rounded-full bg-green-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
              <LineChart className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-medium mb-2">Мониторинг</h3>
            <p className="text-gray-600 mb-4">Отслеживайте потребление ресурсов в реальном времени</p>
            <Link to="/monitoring" className="text-green-600 hover:text-green-700 flex items-center">
              Перейти
              <span className="ml-2">→</span>
            </Link>
          </Card>
          
          <Card className="p-6 hover:shadow-md transition-shadow">
            <div className="rounded-full bg-green-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-medium mb-2">Управление</h3>
            <p className="text-gray-600 mb-4">Оптимизируйте энергопотребление и настраивайте системы</p>
            <Link to="/management" className="text-green-600 hover:text-green-700 flex items-center">
              Перейти
              <span className="ml-2">→</span>
            </Link>
          </Card>
          
          <Card className="p-6 hover:shadow-md transition-shadow">
            <div className="rounded-full bg-green-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
              <BarChart className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-medium mb-2">Отчеты</h3>
            <p className="text-gray-600 mb-4">Формируйте детальные отчеты и аналитику по ресурсам</p>
            <Link to="/reports" className="text-green-600 hover:text-green-700 flex items-center">
              Перейти
              <span className="ml-2">→</span>
            </Link>
          </Card>
        </div>

        <section className="mt-16 bg-green-50 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <Leaf className="h-12 w-12 text-green-600 mb-4" />
              <h2 className="text-2xl font-semibold mb-4">Экономия ресурсов и забота о планете</h2>
              <p className="text-gray-700 mb-6">
                Наша система помогает снизить потребление энергии в офисе на 30%, 
                уменьшить углеродный след и создать более комфортную рабочую среду.
              </p>
              <Button className="bg-green-600 hover:bg-green-700">
                Подробнее о технологии
              </Button>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce2?w=800&auto=format&fit=crop&q=80" 
                alt="Эко технологии" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
