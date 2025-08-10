import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-coffee.jpg";

interface HeroProps {
  onCtaClick: () => void;
}

export function Hero({ onCtaClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-primary-foreground">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 mb-6">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <span className="text-sm font-medium">Старт 1 октября • Бесплатно для первых 100</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 px-2">
          <span className="block">100 000 просмотров</span>
          <span className="block text-accent">вашей рекламы</span>
          <span className="block">за чашку капучино</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed px-2">
          Каждый ваш гость — это канал продвижения. Он пьёт кофе, снимает Reels/TikTok, 
          а вы получаете охват и новых клиентов.
        </p>

        {/* CTA Button */}
        <div className="space-y-4">
          <Button 
            variant="hero" 
            size="xl"
            onClick={onCtaClick}
            className="w-full max-w-sm sm:max-w-md md:w-auto md:min-w-80 transform hover:scale-105 transition-all duration-300 mx-auto"
          >
            Забронировать место среди первых 100
          </Button>
          <p className="text-sm text-primary-foreground/80">
            Старт 1 октября. Бесплатно для первых участников.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2" />
          </div>
        </div>
      </div>
    </section>
  );
}