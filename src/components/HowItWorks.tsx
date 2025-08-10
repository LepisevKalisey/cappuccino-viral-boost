const steps = [
  {
    number: "1",
    title: "Гость сканирует QR",
    description: "Размещаем QR-код на столах или у кассы"
  },
  {
    number: "2", 
    title: "Получает задание в WhatsApp",
    description: "Бот автоматически отправляет персональное задание"
  },
  {
    number: "3",
    title: "Снимает Reels/TikTok с отметкой",
    description: "Клиент создает контент и отмечает ваше заведение"
  },
  {
    number: "4",
    title: "Кассир подтверждает код",
    description: "Простая проверка через бот за 30 секунд"
  },
  {
    number: "5",
    title: "Получает скидку и приз",
    description: "Гость получает бонус и участвует в розыгрыше iPhone"
  }
];

export function HowItWorks() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">
          Как это работает
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Простая схема, которая превращает каждого гостя в канал продвижения
        </p>
        
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="flex items-start gap-6 bg-card rounded-2xl p-6 shadow-warm hover:shadow-coffee transition-shadow duration-300"
            >
              {/* Step Number */}
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-coffee rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">
                  {step.number}
                </span>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden md:block text-2xl text-accent">
                  ↓
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}