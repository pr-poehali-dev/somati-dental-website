import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Montserrat']">
            Контакты и запись
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-['Open_Sans']">
            Свяжитесь с нами удобным способом или запишитесь на прием онлайн
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-900 font-['Montserrat']">
                  Информация о клинике
                </CardTitle>
                <CardDescription className="text-gray-600 font-['Open_Sans']">
                  Мы работаем для вашего удобства
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="w-6 h-6 text-sky-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 font-['Montserrat']">
                      Адрес
                    </h3>
                    <p className="text-gray-600 font-['Open_Sans']">
                      г. Москва, ул. Примерная, д. 123
                      <br />
                      БЦ "Медицинский", этаж 2
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="w-6 h-6 text-sky-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 font-['Montserrat']">
                      Телефон
                    </h3>
                    <p className="text-gray-600 font-['Open_Sans']">
                      +7 (495) 123-45-67
                      <br />
                      +7 (495) 123-45-68
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="w-6 h-6 text-sky-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 font-['Montserrat']">
                      Режим работы
                    </h3>
                    <p className="text-gray-600 font-['Open_Sans']">
                      Пн-Пт: 9:00 - 21:00
                      <br />
                      Сб-Вс: 10:00 - 18:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="w-6 h-6 text-sky-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 font-['Montserrat']">
                      Email
                    </h3>
                    <p className="text-gray-600 font-['Open_Sans']">
                      info@somati-dental.ru
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-900 font-['Montserrat']">
                  Онлайн запись
                </CardTitle>
                <CardDescription className="text-gray-600 font-['Open_Sans']">
                  Запишитесь на прием в удобное время
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name="Calendar" className="w-10 h-10 text-sky-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 font-['Montserrat']">
                    Записаться на прием
                  </h3>
                  <p className="text-gray-600 mb-8 font-['Open_Sans']">
                    Выберите удобное время и запишитесь к нужному специалисту
                  </p>
                  <div className="space-y-4">
                    <Button
                      size="lg"
                      className="w-full bg-sky-500 hover:bg-sky-600 text-white"
                    >
                      <Icon name="Calendar" className="w-5 h-5 mr-2" />
                      Записаться онлайн
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full border-sky-500 text-sky-500 hover:bg-sky-50"
                    >
                      <Icon name="Phone" className="w-5 h-5 mr-2" />
                      Позвонить в клинику
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
