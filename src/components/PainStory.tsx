export function PainStory() {
  return (
    <section className="py-16 bg-card">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-destructive/10 border border-destructive/20 rounded-2xl p-8 md:p-12">
          <div className="text-4xl mb-6">😔</div>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
            Знакомая ситуация?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Десятки гостей проходят через вашу точку, снимают контент, 
            но без отметки вас. 
            <span className="block mt-4 text-destructive font-semibold">
              Итог — ноль охвата, ноль сарафана.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}