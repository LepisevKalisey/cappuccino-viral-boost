import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Нужно ли интегрироваться с нашей POS-системой?",
    answer: "Нет, интеграция не требуется. Наша система работает автономно через QR-коды и TG-бота. Кассир просто проверяет код в боте за 30 секунд."
  },
  {
    question: "Сколько времени занимает подключение?",
    answer: "Всего 10 минут. Мы доставляем QR-коды, настраиваем бота и обучаем персонал. После этого система готова к работе."
  },
  {
    question: "Что если гости будут обманывать систему?",
    answer: "У нас есть встроенная антифрод система. Мы проверяем публикацию контента, отметки заведения и используем умные алгоритмы для выявления фейков. "
  },
  {
    question: "Какие скидки давать гостям?",
    answer: "Это полностью ваше решение. Можно предложить скидку 20-30%, но мы рекомендуем всегда угощать гостей большим капучино. Главное — участие в розыгрыше iPhone каждый месяц."
  },
  {
    question: "Сколько это будет стоить после бесплатного периода?",
    answer: "После тестового периода стоимость составляет всего 20 000 тенге в месяц за безлимитное использование. Это меньше, чем один пост у блогера."
  },
  {
    question: "Будет ли работать в нашем городе?",
    answer: "Да, система работает во всех городах Казахстана. Telegram-бот поддерживает казахский и русский языки."
  }
];

export function FAQ() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">
          Частые вопросы
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Ответы на самые популярные вопросы о Cappuccino Challenge
        </p>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-2xl px-6 shadow-warm hover:shadow-coffee transition-shadow duration-300"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
