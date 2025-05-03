
import { useState } from "react";
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { User, Settings, Bell, Shield, Key } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Мой профиль</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Информация о пользователе */}
          <div className="md:col-span-1">
            <Card className="p-6 space-y-4">
              <div className="flex flex-col items-center">
                <Avatar className="w-24 h-24">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80" alt="Фото профиля" />
                </Avatar>
                <h2 className="text-xl font-medium mt-4">Екатерина Смирнова</h2>
                <p className="text-gray-500 text-sm">Менеджер по экологии</p>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center text-gray-700 mb-3">
                  <User className="h-4 w-4 mr-2" />
                  <span>ekaterina@eco-office.ru</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Bell className="h-4 w-4 mr-2" />
                  <span>Уведомления активны</span>
                </div>
              </div>
              
              <Button className="w-full bg-green-500 hover:bg-green-600 mt-2">
                Редактировать профиль
              </Button>
            </Card>
          </div>
          
          {/* Вкладки с настройками */}
          <div className="md:col-span-3">
            <Card className="p-6">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
                <TabsList className="grid grid-cols-3 w-full max-w-md">
                  <TabsTrigger value="profile">Профиль</TabsTrigger>
                  <TabsTrigger value="security">Безопасность</TabsTrigger>
                  <TabsTrigger value="notifications">Уведомления</TabsTrigger>
                </TabsList>
                
                <TabsContent value="profile" className="space-y-6">
                  <h3 className="text-lg font-medium">Личная информация</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Имя</label>
                      <input type="text" className="w-full rounded-md border border-gray-300 p-2" defaultValue="Екатерина" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Фамилия</label>
                      <input type="text" className="w-full rounded-md border border-gray-300 p-2" defaultValue="Смирнова" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input type="email" className="w-full rounded-md border border-gray-300 p-2" defaultValue="ekaterina@eco-office.ru" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Должность</label>
                      <input type="text" className="w-full rounded-md border border-gray-300 p-2" defaultValue="Менеджер по экологии" />
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button className="bg-green-500 hover:bg-green-600">Сохранить изменения</Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="security" className="space-y-6">
                  <h3 className="text-lg font-medium">Настройки безопасности</h3>
                  
                  <div className="space-y-6">
                    <div className="border-b border-gray-200 pb-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <Key className="h-5 w-5 text-gray-700 mr-2" />
                          <div>
                            <h4 className="font-medium">Изменение пароля</h4>
                            <p className="text-sm text-gray-500">Обновите ваш пароль для безопасности</p>
                          </div>
                        </div>
                        <Button variant="outline">Изменить</Button>
                      </div>
                    </div>
                    
                    <div className="border-b border-gray-200 pb-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <Shield className="h-5 w-5 text-gray-700 mr-2" />
                          <div>
                            <h4 className="font-medium">Двухфакторная аутентификация</h4>
                            <p className="text-sm text-gray-500">Дополнительный уровень защиты</p>
                          </div>
                        </div>
                        <Button variant="outline">Настроить</Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="notifications" className="space-y-6">
                  <h3 className="text-lg font-medium">Настройки уведомлений</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Email-уведомления</h4>
                        <p className="text-sm text-gray-500">Получать уведомления на почту</p>
                      </div>
                      <div className="flex items-center">
                        <label className="inline-flex items-center">
                          <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" defaultChecked />
                        </label>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Мобильные уведомления</h4>
                        <p className="text-sm text-gray-500">Получать push-уведомления</p>
                      </div>
                      <div className="flex items-center">
                        <label className="inline-flex items-center">
                          <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" defaultChecked />
                        </label>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Еженедельные отчеты</h4>
                        <p className="text-sm text-gray-500">Получать еженедельную статистику</p>
                      </div>
                      <div className="flex items-center">
                        <label className="inline-flex items-center">
                          <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" />
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button className="bg-green-500 hover:bg-green-600">Сохранить настройки</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
