import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

interface OfferProps {
  onCtaClick: () => void;
}

export function Offer({ onCtaClick }: OfferProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const targetDate = new Date('2025-10-01T00:00:00+06:00'); // Almaty timezone
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      
      if (distance < 0) {
        clearInterval(timer);
        setIsExpired(true);
        return;
      }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gradient-hero">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-primary-foreground/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-coffee">
          {/* Offer Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-bold text-primary">🎉 Ограниченное предложение</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
            Первые 100 компаний — бесплатно
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Мы подключаем механику за свой счёт. 
            <span className="block font-semibold text-primary mt-2">
              Вы платите только за свои скидки гостям.
            </span>
          </p>

          {/* Countdown Timer */}
          {isExpired ? (
            <div className="text-xl font-bold text-destructive mb-8">Предложение завершилось!</div>
          ) : (
            <div className="grid grid-cols-4 gap-4 mb-8 max-w-md mx-auto">
              {[
                { label: 'Дни', value: timeLeft.days },
                { label: 'Часы', value: timeLeft.hours },
                { label: 'Мин', value: timeLeft.minutes },
                { label: 'Сек', value: timeLeft.seconds }
              ].map((item) => (
                <div key={item.label} className="bg-accent/10 rounded-xl p-4">
                  <div className="text-2xl font-bold text-primary">
                    {item.value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          <Button 
            variant="hero" 
            size="xl"
            onClick={onCtaClick}
            className="w-full max-w-sm sm:max-w-md md:w-auto md:min-w-80 transform hover:scale-105 transition-all duration-300 animate-pulse mx-auto"
          >
            Подключиться бесплатно
          </Button>
          
          <p className="text-sm text-muted-foreground mt-4">
            Осталось мест: <span className="font-bold text-destructive">37</span>
          </p>
        </div>
      </div>
    </section>
  );
}
