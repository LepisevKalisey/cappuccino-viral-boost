const painPoints = [
  {
    icon: "📱",
    title: "Ноль Reels/TikTok с отметкой",
    description: "Гости снимают контент, но не отмечают ваше заведение — теряете бесплатных клиентов"
  },
  {
    icon: "💸",
    title: "Реклама и блогеры дорогие",
    description: "Классическая реклама съедает бюджет, а локальные блогеры не всегда эффективны"
  },
  {
    icon: "🤯",
    title: "Скидки «за сторис» — хаос",
    description: "Ручной контроль промо постов приводит к фроду и потере времени персонала"
  }
];

export function PainPoints() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-12">
          3 главные проблемы вашего бизнеса
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="bg-card border border-destructive/20 rounded-2xl p-6 text-center hover:shadow-warm transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{point.icon}</div>
              <h3 className="text-xl font-bold text-destructive mb-4">
                {point.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}