import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-sky-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 font-['Montserrat']">
            Здоровая улыбка —
            <br />
            <span className="text-sky-500">это просто</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto font-['Open_Sans']">
            Современная стоматология с индивидуальным подходом к каждому
            пациенту. Качественное лечение в комфортной атмосфере.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3"
            >
              <Icon name="Calendar" className="w-5 h-5 mr-2" />
              Записаться на прием
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-sky-500 text-sky-500 hover:bg-sky-50 px-8 py-3"
            >
              <Icon name="Phone" className="w-5 h-5 mr-2" />
              Связаться с нами
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" className="w-8 h-8 text-sky-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-['Montserrat']">
                Опытные врачи
              </h3>
              <p className="text-gray-600 font-['Open_Sans']">
                Команда профессионалов с многолетним опытом
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" className="w-8 h-8 text-sky-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-['Montserrat']">
                Безболезненно
              </h3>
              <p className="text-gray-600 font-['Open_Sans']">
                Современные методы обезболивания
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" className="w-8 h-8 text-sky-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-['Montserrat']">
                Быстро
              </h3>
              <p className="text-gray-600 font-['Open_Sans']">
                Эффективное лечение без долгого ожидания
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
