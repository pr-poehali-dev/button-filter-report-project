
import { useState } from "react";
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, LineChart, PieChart, Zap, Droplets, Thermometer, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const Monitoring = () => {
  const [activeTab, setActiveTab] = useState("electricity");
  
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Мониторинг ресурсов</h1>
          <div className="flex space-x-2">
            <Button variant="outline" className="text-gray-600">
              <Zap className="h-4 w-4 mr-2" />
              Обновить данные
            </Button>
            <Button className="bg-green-500 hover:bg-green-600">
              <PieChart className="h-4 w-4 mr-2" />
              Создать отчет
            </Button>
          </div>
        </div>
        
        {/* Основные показатели */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-4 bg-gradient-to-br from-blue-50 to-white">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">Электроэнергия</p>
                <h3 className="text-2xl font-bold">3,467 кВт⋅ч</h3>
                <p className="text-xs text-green-500 mt-1">↓ 12% к прошлому месяцу</p>
              </div>
              <div className="bg-blue-100 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </Card>
          
          <Card className="p-4 bg-gradient-to-br from-cyan-50 to-white">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">Вода</p>
                <h3 className="text-2xl font-bold">246 м³</h3>
                <p className="text-xs text-green-500 mt-1">↓ 8% к прошлому месяцу</p>
              </div>
              <div className="bg-cyan-100 p-2 rounded-lg">
                <Droplets className="h-6 w-6 text-cyan-600" />
              </div>
            </div>
          </Card>
          
          <Card className="p-4 bg-gradient-to-br from-red-50 to-white">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">Отопление</p>
                <h3 className="text-2xl font-bold">897 Гкал</h3>
                <p className="text-xs text-red-500 mt-1">↑ 5% к прошлому месяцу</p>
              </div>
              <div className="bg-red-100 p-2 rounded-lg">
                <Thermometer className="h-6 w-6 text-red-600" />
              </div>
            </div>
          </Card>
          
          <Card className="p-4 bg-gradient-to-br from-green-50 to-white">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">Выбросы CO₂</p>
                <h3 className="text-2xl font-bold">1.2 тонн</h3>
                <p className="text-xs text-green-500 mt-1">↓ 15% к прошлому месяцу</p>
              </div>
              <div className="bg-green-100 p-2 rounded-lg">
                <Leaf className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </Card>
        </div>
        
        {/* Детальные графики */}
        <Card className="p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid grid-cols-4 w-full max-w-2xl">
              <TabsTrigger value="electricity">Электроэнергия</TabsTrigger>
              <TabsTrigger value="water">Вода</TabsTrigger>
              <TabsTrigger value="heating">Отопление</TabsTrigger>
              <TabsTrigger value="emissions">Выбросы CO₂</TabsTrigger>
            </TabsList>
            
            <TabsContent value="electricity" className="space-y-6">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-lg font-medium">Потребление электроэнергии</h3>
                  <p className="text-sm text-gray-500">Данные за последние 30 дней</p>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <BarChart className="h-4 w-4 mr-1" />
                    Статистика
                  </Button>
                  <Button variant="outline" size="sm">
                    <LineChart className="h-4 w-4 mr-1" />
                    Тренды
                  </Button>
                </div>
              </div>
              
              <div className="h-80 bg-gray-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <LineChart className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">График потребления электроэнергии</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="p-4">
                  <h4 className="text-sm font-medium text-gray-500">Пиковое потребление</h4>
                  <p className="text-2xl font-bold">168 кВт⋅ч</p>
                  <p className="text-xs text-gray-500 mt-1">15 мая, 14:30</p>
                </Card>
                <Card className="p-4">
                  <h4 className="text-sm font-medium text-gray-500">Среднее потребление</h4>
                  <p className="text-2xl font-bold">112 кВт⋅ч</p>
                  <p className="text-xs text-gray-500 mt-1">в день</p>
                </Card>
                <Card className="p-4">
                  <h4 className="text-sm font-medium text-gray-500">Прогноз на месяц</h4>
                  <p className="text-2xl font-bold">3,320 кВт⋅ч</p>
                  <p className="text-xs text-green-500 mt-1">↓ 4% к текущему</p>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="water" className="space-y-6">
              <div className="h-80 bg-gray-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <LineChart className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">График потребления воды</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="heating" className="space-y-6">
              <div className="h-80 bg-gray-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <LineChart className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">График потребления тепла</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="emissions" className="space-y-6">
              <div className="h-80 bg-gray-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <LineChart className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">График выбросов CO₂</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </Layout>
  );
};

export default Monitoring;
