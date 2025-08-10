export function Footer() {
  return (
    <footer className="py-12 bg-primary">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-cappuccino rounded-xl flex items-center justify-center">
              <span className="text-primary font-bold text-xl">C</span>
            </div>
            <span className="font-display font-bold text-2xl text-primary-foreground">
              Cappuccino Challenge
            </span>
          </div>

          {/* Description */}
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Превращаем каждую чашку кофе в вирусный контент. 
            Автоматизированная система UGC-маркетинга для кафе, баров и ресторанов.
          </p>

          {/* Contact */}
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 mb-8 inline-block">
            <h3 className="text-primary-foreground font-semibold mb-3">
              Связаться с нами
            </h3>
            <a 
              href="https://t.me/Cappuccino_Challenge_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
            >
              <span className="text-xl">📱</span>
              Telegram: @Cappuccino_Challenge_bot
            </a>
          </div>

          {/* Bottom */}
          <div className="border-t border-primary-foreground/20 pt-6">
            <p className="text-primary-foreground/60 text-sm">
              © 2025 Cappuccino Challenge. Запуск 1 октября 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
