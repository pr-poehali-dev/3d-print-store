import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const categories = [
    {
      id: 1,
      name: "Декор и искусство",
      description: "Уникальные декоративные элементы",
      icon: "Palette",
      count: "150+ товаров",
      gradient: "from-primary to-accent"
    },
    {
      id: 2,
      name: "Игрушки и модели",
      description: "Коллекционные фигурки и игрушки",
      icon: "GameController2",
      count: "200+ товаров",
      gradient: "from-accent to-primary"
    },
    {
      id: 3,
      name: "Инструменты и аксессуары",
      description: "Практичные решения для дома",
      icon: "Wrench",
      count: "80+ товаров",
      gradient: "from-primary/80 to-accent/80"
    },
    {
      id: 4,
      name: "Прототипы и запчасти",
      description: "Индустриальные решения",
      icon: "Settings",
      count: "120+ товаров",
      gradient: "from-accent/80 to-primary/80"
    }
  ];

  const products = [
    {
      id: 1,
      name: "Робот-миниатюра X1",
      price: "2,500 ₽",
      category: "Игрушки",
      image: "img/d4044c18-13c1-4791-98b2-8952e7091bb5.jpg",
      rating: 4.9,
      isNew: true
    },
    {
      id: 2,
      name: "Геометрическая ваза Neo",
      price: "1,800 ₽",
      category: "Декор",
      image: "img/22228442-e723-4efc-a10f-740c28876f7d.jpg",
      rating: 4.8,
      isNew: false
    },
    {
      id: 3,
      name: "Инструмент Pro-Kit",
      price: "3,200 ₽",
      category: "Инструменты",
      image: "img/cbfe7d65-774f-4587-a12c-53bb9dae4606.jpg",
      rating: 4.7,
      isNew: true
    }
  ];

  const services = [
    {
      title: "Печать по чертежам",
      description: "Загрузите 3D-модель и получите готовое изделие",
      price: "от 500 ₽",
      time: "2-5 дней",
      icon: "FileText"
    },
    {
      title: "3D-моделирование",
      description: "Создаем модель по вашему техзаданию",
      price: "от 2,000 ₽", 
      time: "3-7 дней",
      icon: "Box"
    },
    {
      title: "Прототипирование",
      description: "Быстрое создание рабочих прототипов",
      price: "от 1,500 ₽",
      time: "1-3 дня",
      icon: "Zap"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Icon name="Box" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-orbitron font-bold text-foreground">PRINT3D</h1>
                <p className="text-xs text-muted-foreground">Будущее в каждом изделии</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#catalog" className="text-sm hover:text-primary transition-colors">Каталог</a>
              <a href="#services" className="text-sm hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="text-sm hover:text-primary transition-colors">О нас</a>
              <Button size="sm" className="font-orbitron">
                <Icon name="ShoppingCart" size={16} className="mr-2" />
                Корзина
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-tech-cyan/10 via-background to-tech-orange/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 border-primary text-primary font-orbitron">
              ВЫСОКОТЕХНОЛОГИЧНАЯ ПЕЧАТЬ
            </Badge>
            <h1 className="text-5xl md:text-7xl font-orbitron font-black mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              3D ПЕЧАТЬ
              <br />
              БУДУЩЕГО
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Превращаем идеи в реальность с помощью передовых технологий 3D-печати. 
              Готовые изделия и печать под заказ.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="font-orbitron text-lg px-8 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                <Icon name="Eye" size={20} className="mr-2" />
                Смотреть каталог
              </Button>
              <Button size="lg" variant="outline" className="font-orbitron text-lg px-8 border-primary text-primary hover:bg-primary hover:text-white">
                <Icon name="Printer" size={20} className="mr-2" />
                Заказать печать
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="catalog" className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-orbitron font-bold mb-4">Категории товаров</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Исследуйте наши коллекции инновационных 3D-печатных изделий
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card key={category.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={category.icon} size={32} className="text-white" />
                  </div>
                  <CardTitle className="font-orbitron text-lg">{category.name}</CardTitle>
                  <CardDescription className="text-sm">{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0 text-center">
                  <Badge variant="secondary" className="mb-4 font-orbitron text-xs">
                    {category.count}
                  </Badge>
                  <Button variant="ghost" size="sm" className="w-full text-primary hover:text-white hover:bg-primary">
                    Смотреть товары
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-orbitron font-bold mb-4">Популярные товары</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Самые востребованные изделия от наших мастеров
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-0 bg-gradient-to-br from-card to-card/90">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.isNew && (
                    <Badge className="absolute top-4 right-4 bg-gradient-to-r from-accent to-accent/80 text-white font-orbitron">
                      NEW
                    </Badge>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-orbitron font-semibold text-lg mb-1">{product.name}</h3>
                      <Badge variant="outline" className="text-xs">{product.category}</Badge>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                      <span className="text-sm text-muted-foreground">{product.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-2xl font-orbitron font-bold text-primary">{product.price}</span>
                    <Button size="sm" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="font-orbitron border-primary text-primary hover:bg-primary hover:text-white">
              Показать все товары
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-gradient-to-br from-card/50 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-orbitron font-bold mb-4">Услуги печати под заказ</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Профессиональная 3D-печать по вашим требованиям
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-to-br from-card to-card/80">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-bl-full -translate-y-16 translate-x-16"></div>
                <CardHeader className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={28} className="text-white" />
                  </div>
                  <CardTitle className="font-orbitron text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-sm">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-lg font-orbitron font-semibold text-primary">{service.price}</p>
                      <p className="text-sm text-muted-foreground">Срок: {service.time}</p>
                    </div>
                  </div>
                  <Button className="w-full font-orbitron bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                    Заказать услугу
                    <Icon name="Send" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-orbitron font-bold mb-4">Готовы воплотить идею?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам довольных клиентов. Создавайте будущее вместе с нами.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="font-orbitron text-lg px-8 bg-white text-primary hover:bg-gray-100">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Получить консультацию
            </Button>
            <Button size="lg" variant="outline" className="font-orbitron text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
              <Icon name="Phone" size={20} className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-tech-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <Icon name="Box" size={20} className="text-white" />
                </div>
                <h3 className="font-orbitron font-bold text-lg">PRINT3D</h3>
              </div>
              <p className="text-sm text-gray-400">
                Инновационные решения в сфере 3D-печати для воплощения ваших самых смелых идей.
              </p>
            </div>
            <div>
              <h4 className="font-orbitron font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Декор и искусство</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Игрушки и модели</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Инструменты</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Прототипы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-orbitron font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Печать по чертежам</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">3D-моделирование</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Прототипирование</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-orbitron font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-gray-400">+7 (495) 123-45-67</li>
                <li className="text-gray-400">info@print3d.ru</li>
                <li className="text-gray-400">Москва, ул. Инноваций, 10</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-gray-700" />
          <div className="text-center text-sm text-gray-400">
            <p>&copy; 2024 PRINT3D. Все права защищены. Создаем будущее сегодня.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;