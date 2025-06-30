import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Smile",
      title: "Терапевтическая стоматология",
      description:
        "Лечение кариеса, пульпита, периодонтита. Профессиональная гигиена полости рта.",
      price: "от 3 500 ₽",
    },
    {
      icon: "Zap",
      title: "Хирургическая стоматология",
      description:
        "Удаление зубов, имплантация, операции на деснах. Безболезненно и качественно.",
      price: "от 5 000 ₽",
    },
    {
      icon: "Sparkles",
      title: "Ортопедическая стоматология",
      description:
        "Протезирование зубов, коронки, виниры. Восстановление функции и эстетики.",
      price: "от 15 000 ₽",
    },
    {
      icon: "Scissors",
      title: "Ортодонтия",
      description:
        "Исправление прикуса брекетами и элайнерами. Красивая улыбка в любом возрасте.",
      price: "от 80 000 ₽",
    },
    {
      icon: "Stars",
      title: "Эстетическая стоматология",
      description:
        "Отбеливание зубов, виниры, реставрация. Сделаем вашу улыбку идеальной.",
      price: "от 8 000 ₽",
    },
    {
      icon: "Baby",
      title: "Детская стоматология",
      description:
        "Лечение молочных зубов, профилактика. Комфортно и без страха для малышей.",
      price: "от 2 500 ₽",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Montserrat']">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-['Open_Sans']">
            Полный спектр стоматологических услуг для здоровья ваших зубов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 border-gray-100"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={service.icon} className="w-6 h-6 text-sky-500" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 font-['Montserrat']">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 font-['Open_Sans']">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-sky-500 font-['Montserrat']">
                    {service.price}
                  </span>
                  <button className="text-sky-500 hover:text-sky-600 font-medium font-['Open_Sans']">
                    Подробнее →
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
