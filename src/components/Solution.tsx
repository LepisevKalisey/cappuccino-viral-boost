import { Button } from "@/components/ui/button";

interface SolutionProps {
  onCtaClick: () => void;
}

export function Solution({ onCtaClick }: SolutionProps) {
  return (
    <section className="py-16 bg-gradient-cappuccino">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-8">
          А что, если кофе будет платить за рекламу?
        </h2>
        
        <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-warm">
          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
            Мы автоматизировали механику: клиент получает скидку или шанс на приз, 
            вы — гарантированный вирусный ролик. 
            <span className="block mt-4 font-semibold text-primary">
              Без POS, за 10 минут, с полной управляемостью.
            </span>
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-accent/20 rounded-xl p-6">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-primary mb-2">Быстрый запуск</h3>
              <p className="text-sm text-muted-foreground">
                Подключение за 10 минут без интеграций с POS
              </p>
            </div>
            <div className="bg-accent/20 rounded-xl p-6">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-bold text-primary mb-2">Гарантированный результат</h3>
              <p className="text-sm text-muted-foreground">
                Каждый участник = вирусный контент с отметкой
              </p>
            </div>
          </div>

          <Button 
            variant="coffee" 
            size="lg"
            onClick={onCtaClick}
            className="transform hover:scale-105 transition-all duration-300"
          >
            Подключиться бесплатно
          </Button>
        </div>
      </div>
    </section>
  );
}