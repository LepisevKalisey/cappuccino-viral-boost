const benefits = [
  {
    icon: "📈",
    title: "Ежедневный поток UGC",
    description: "Постоянный контент с отметками вашего заведения в соцсетях"
  },
  {
    icon: "💰",
    title: "Рост видимости без бюджета",
    description: "Органический охват через аудиторию ваших гостей"
  },
  {
    icon: "🚀",
    title: "Запуск за 10 минут",
    description: "Мы доставляем все материалы и настраиваем систему"
  },
  {
    icon: "📊",
    title: "Масштабируемость",
    description: "Управляемость на длинной дистанции с аналитикой"
  },
  {
    icon: "🛡️",
    title: "Антифрод система",
    description: "Защита от накрутки и фейкового контента"
  },
  {
    icon: "🔄",
    title: "Месячные циклы",
    description: "Регулярные розыгрыши поддерживают интерес клиентов"
  }
];

export function Benefits() {
  return (
    <section className="py-16 bg-card">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">
          Выгоды для вашего бизнеса
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Превратите каждую чашку кофе в инструмент маркетинга
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-background border border-border rounded-2xl p-6 text-center hover:shadow-warm transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}