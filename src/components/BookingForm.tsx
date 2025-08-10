import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

export function BookingForm() {
  const supportPhone = '77785612123';
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    businessName: '',
    city: '',
    name: '',
    phone: '',
    email: '',
    locations: '',
    consent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast({
        title: "Ошибка",
        description: "Необходимо согласиться с условиями обработки данных",
        variant: "destructive"
      });
      return;
    }

    const message = `Название заведения: ${formData.businessName}\n` +
      `Город: ${formData.city}\n` +
      `Имя: ${formData.name}\n` +
      `Телефон: ${formData.phone}\n` +
      `Email: ${formData.email}\n` +
      `Количество точек: ${formData.locations}`;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${supportPhone}?text=${encodedMessage}`;
    window.open(url, '_blank');
    
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в течение 24 часов",
    });

    // Reset form
    setFormData({
      businessName: '',
      city: '',
      name: '',
      phone: '',
      email: '',
      locations: '',
      consent: false
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="booking-form" className="py-16 bg-gradient-cappuccino">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-coffee">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-6">
            Забронировать место в бесплатной сотне
          </h2>
          
          <p className="text-center text-muted-foreground mb-8">
            Заполните форму и получите бесплатное подключение до 1 января 2026
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="businessName" className="text-sm font-medium">
                  Название заведения *
                </Label>
                <Input
                  id="businessName"
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  placeholder="Café Central"
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="city" className="text-sm font-medium">
                  Город *
                </Label>
                <Input
                  id="city"
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="Алматы"
                  required
                  className="h-12"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  Ваше имя *
                </Label>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Александр"
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium">
                  Телефон *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+7 (777) 123-45-67"
                  required
                  className="h-12"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email (необязательно)
                </Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="cafe@example.com"
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="locations" className="text-sm font-medium">
                  Количество точек
                </Label>
                <Input
                  id="locations"
                  type="number"
                  name="locations"
                  value={formData.locations}
                  onChange={handleInputChange}
                  placeholder="1"
                  min="1"
                  className="h-12"
                />
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox
                id="consent"
                checked={formData.consent}
                onCheckedChange={(checked) => 
                  setFormData(prev => ({ ...prev, consent: checked as boolean }))
                }
                className="mt-1"
              />
              <Label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed">
                Я согласен на обработку персональных данных и получение информации 
                о продукте Cappuccino Challenge
              </Label>
            </div>

            <Button 
              type="submit"
              variant="hero" 
              size="xl"
              className="w-full transform hover:scale-105 transition-all duration-300"
            >
              Забронировать место
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              После отправки заявки мы свяжемся с вами в течение 24 часов
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
