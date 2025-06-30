import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Doctors = () => {
  const doctors = [
    {
      name: "Анна Петрова",
      specialty: "Главный врач, терапевт",
      experience: "15 лет опыта",
      description:
        "Специализируется на эстетической реставрации и эндодонтическом лечении",
      avatar: "👩‍⚕️",
    },
    {
      name: "Михаил Сидоров",
      specialty: "Хирург-имплантолог",
      experience: "12 лет опыта",
      description:
        "Эксперт в области дентальной имплантации и костной пластики",
      avatar: "👨‍⚕️",
    },
    {
      name: "Елена Иванова",
      specialty: "Ортодонт",
      experience: "10 лет опыта",
      description:
        "Исправление прикуса у детей и взрослых современными методами",
      avatar: "👩‍⚕️",
    },
  ];

  return (
    <section id="doctors" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Montserrat']">
            Наши врачи
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-['Open_Sans']">
            Команда опытных специалистов с высокой квалификацией
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <Card
              key={index}
              className="bg-white hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-sky-100 rounded-full flex items-center justify-center text-4xl">
                  {doctor.avatar}
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 font-['Montserrat']">
                  {doctor.name}
                </CardTitle>
                <CardDescription className="text-sky-500 font-medium font-['Open_Sans']">
                  {doctor.specialty}
                </CardDescription>
                <div className="flex items-center justify-center gap-2 text-gray-600 mt-2">
                  <Icon name="Award" className="w-4 h-4" />
                  <span className="text-sm font-['Open_Sans']">
                    {doctor.experience}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6 font-['Open_Sans']">
                  {doctor.description}
                </p>
                <Button
                  variant="outline"
                  className="w-full border-sky-500 text-sky-500 hover:bg-sky-50"
                >
                  <Icon name="Calendar" className="w-4 h-4 mr-2" />
                  Записаться к врачу
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
