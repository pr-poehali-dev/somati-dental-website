import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center">
              <Icon name="Smile" className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 font-['Montserrat']">
                Somati <span className="text-sky-500">денталь</span>
              </h1>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-gray-600 hover:text-sky-500 transition-colors font-['Open_Sans']"
            >
              Услуги
            </a>
            <a
              href="#doctors"
              className="text-gray-600 hover:text-sky-500 transition-colors font-['Open_Sans']"
            >
              Врачи
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-sky-500 transition-colors font-['Open_Sans']"
            >
              Контакты
            </a>
            <Button className="bg-sky-500 hover:bg-sky-600 text-white">
              Записаться
            </Button>
          </nav>

          <div className="md:hidden">
            <Icon name="Menu" className="w-6 h-6 text-gray-600" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
