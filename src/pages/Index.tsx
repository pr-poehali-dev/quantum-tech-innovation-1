import { useEffect, useState } from "react";
import { Palette, Bug, Instagram, Youtube, Globe, MessageCircle, ArrowRight, ExternalLink, Star } from "lucide-react";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});
  const [bugForm, setBugForm] = useState({ name: "", email: "", description: "" });
  const [bugSent, setBugSent] = useState(false);

  useEffect(() => {
    const observers: Record<string, IntersectionObserver> = {};
    const sectionIds = ["hero", "features", "how", "portfolio", "cta"];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      observers[id] = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [id]: true }));
            observers[id].unobserve(element);
          }
        },
        { threshold: 0.15 }
      );

      observers[id].observe(element);
    });

    return () => {
      Object.values(observers).forEach((observer) => observer.disconnect());
    };
  }, []);

  const handleBugSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBugSent(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-2xl border-b border-accent/20 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center">
            <div className="font-display font-bold text-2xl tracking-tighter bg-gradient-to-r from-white via-accent to-accent/80 bg-clip-text text-transparent">
              CreativeHub
            </div>
          </div>
          <nav className="hidden md:flex gap-10 text-sm font-medium">
            <a href="#features" className="text-muted-foreground hover:text-white transition-colors">
              О нас
            </a>
            <a href="#portfolio" className="text-muted-foreground hover:text-white transition-colors">
              Портфолио
            </a>
            <a href="#cta" className="text-muted-foreground hover:text-white transition-colors">
              Сообщить о баге
            </a>
          </nav>
          <div className="flex gap-3">
            <button
              onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
              className="px-5 py-2.5 text-sm font-medium bg-gradient-to-r from-accent via-accent to-accent/80 text-black rounded-full hover:shadow-lg hover:shadow-accent/40 transition-all font-semibold"
            >
              Связаться
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-32 px-6 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden">
          <img src="/images/black-hole-gif.gif" alt="Background animation" className="w-auto h-3/4 object-contain" />
        </div>
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className={`transition-all duration-1000 ${visibleSections["hero"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="mb-8 inline-block">
                <span className="text-xs font-medium tracking-widest text-accent/80 uppercase">
                  Клиентский портал
                </span>
              </div>
              <h1 className="text-6xl lg:text-7xl font-display font-black leading-tight mb-8 tracking-tighter">
                <span className="bg-gradient-to-br from-white via-white to-accent/40 bg-clip-text text-transparent">
                  Творчество.
                </span>
                <br />
                <span className="text-accent">Связь. Качество.</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed mb-10 max-w-xl font-light">
                Здесь вы найдёте наши работы, узнаете о нас в соцсетях и сможете сообщить о любой проблеме.
                Мы работаем для вас.
              </p>
              <div className="flex gap-4 mb-12 flex-col sm:flex-row">
                <button
                  onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                  className="group px-8 py-4 bg-gradient-to-r from-accent to-accent/90 text-black rounded-full hover:shadow-2xl hover:shadow-accent/50 transition-all font-semibold text-lg flex items-center gap-3 justify-center"
                >
                  Смотреть портфолио
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                </button>
                <button
                  onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
                  className="px-8 py-4 border border-accent/40 rounded-full hover:border-accent/70 hover:bg-accent/10 transition-all font-medium text-lg text-white"
                >
                  Сообщить о баге
                </button>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                <div>
                  <div className="text-2xl font-bold text-accent mb-2">100+</div>
                  <p className="text-sm text-white/60">Завершённых проектов</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-2">5★</div>
                  <p className="text-sm text-white/60">Средний рейтинг</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent mb-2">24/7</div>
                  <p className="text-sm text-white/60">Поддержка клиентов</p>
                </div>
              </div>
            </div>

            <div
              className={`relative h-96 lg:h-[550px] transition-all duration-1000 flex items-center justify-center ${visibleSections["hero"] ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-transparent to-transparent rounded-3xl blur-3xl animate-pulse" />
              <img
                src="/omnius-logo.png"
                alt="Creative Studio"
                className="w-full max-w-sm lg:max-w-md drop-shadow-2xl animate-float relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About / Features Section */}
      <section id="features" className="py-32 px-6 bg-accent/5">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${visibleSections["features"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Что мы предлагаем</span>
            <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mt-4 mb-6">
              <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
                Всё в одном месте
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "Palette",
                title: "Наше творчество",
                desc: "Галерея работ, кейсы и проекты — всё, чем мы гордимся и что создали для клиентов.",
              },
              {
                icon: "Instagram",
                title: "Мы в соцсетях",
                desc: "Следите за нашими обновлениями, новыми проектами и закулисьем в Instagram, VK и Telegram.",
              },
              {
                icon: "Bug",
                title: "Репортинг багов",
                desc: "Заметили что-то не то? Сообщите нам — мы разберёмся и исправим в кратчайшие сроки.",
              },
              {
                icon: "MessageCircle",
                title: "Обратная связь",
                desc: "Ваше мнение важно для нас. Оставляйте отзывы и предложения — мы всегда на связи.",
              },
              {
                icon: "Star",
                title: "Отзывы клиентов",
                desc: "Реальные истории реальных людей о нашей работе. Честно и без прикрас.",
              },
              {
                icon: "Globe",
                title: "Актуальные новости",
                desc: "Новые услуги, акции и события — узнавайте первыми о том, что происходит в компании.",
              },
            ].map((item, i) => {
              const isVisible = visibleSections["features"];
              return (
                <div
                  key={i}
                  className={`group p-8 border border-accent/10 hover:border-accent/40 rounded-2xl bg-card/50 hover:bg-card/80 transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <Icon name={item.icon} size={24} className="text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${visibleSections["how"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Как это работает</span>
            <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mt-4">
              <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
                Просто и быстро
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Смотришь", desc: "Изучаешь наше портфолио и знакомишься с работами" },
              { num: "02", title: "Подписываешься", desc: "Следишь за обновлениями в наших соцсетях" },
              { num: "03", title: "Сообщаешь", desc: "Нашёл баг? Заполняешь форму за 30 секунд" },
              { num: "04", title: "Получаешь ответ", desc: "Мы реагируем и решаем вопрос в кратчайшие сроки" },
            ].map((step, i) => {
              const isVisible = visibleSections["how"];
              return (
                <div
                  key={i}
                  className={`relative transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="group bg-accent/10 hover:bg-accent/20 border border-accent/20 hover:border-accent/40 rounded-2xl p-8 h-full flex flex-col justify-between transition-all backdrop-blur-sm cursor-pointer">
                    <div>
                      <div className="text-5xl font-display font-black text-accent mb-4 group-hover:scale-110 transition-transform">
                        {step.num}
                      </div>
                      <h3 className="font-display font-bold text-xl mb-2">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                  {i < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-accent/40 to-transparent" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Media / Portfolio */}
      <section id="portfolio" className="py-32 px-6 bg-accent/5">
        <div className="max-w-5xl mx-auto">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${visibleSections["portfolio"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Социальные сети</span>
            <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mt-4">
              <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
                Мы онлайн
              </span>
            </h2>
            <p className="text-muted-foreground mt-4 text-lg font-light max-w-xl mx-auto">
              Подписывайтесь и следите за нашим творчеством в режиме реального времени
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Users",
                name: "ВКонтакте",
                handle: "NEXT RP",
                desc: "Работы, закулисье и вдохновение",
                color: "from-blue-600/20 to-blue-400/20",
                border: "border-blue-600/20 hover:border-blue-600/40",
                highlight: false,
                url: "https://vk.com/nextmta",
              },
              {
                icon: "MessageCircle",
                name: "Telegram",
                handle: "NEXT RP",
                desc: "Новости, акции и анонсы первыми",
                color: "from-blue-500/20 to-cyan-500/20",
                border: "border-blue-500/20 hover:border-blue-500/40",
                highlight: true,
                url: "https://t.me/nextrpnews",
              },
              {
                icon: "Youtube",
                name: "YouTube",
                handle: "NEXT RP",
                desc: "Видеоработы и туториалы",
                color: "from-red-500/20 to-orange-500/20",
                border: "border-red-500/20 hover:border-red-500/40",
                highlight: false,
                url: "https://www.youtube.com/@NEXTRP",
              },
            ].map((social, i) => {
              const isVisible = visibleSections["portfolio"];
              return (
                <div
                  key={i}
                  className={`group relative transition-all duration-700 ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  } ${social.highlight ? "md:scale-105" : ""}`}
                  style={{ transitionDelay: `${i * 200}ms` }}
                >
                  {social.highlight && (
                    <div className="absolute -inset-1 bg-gradient-to-r from-accent via-accent to-accent/60 rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition" />
                  )}
                  <div
                    className={`relative p-10 border rounded-2xl h-full flex flex-col justify-between backdrop-blur-sm transition-all bg-gradient-to-br ${social.color} ${social.border}`}
                  >
                    <div>
                      <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                        <Icon name={social.icon} size={28} className="text-white" />
                      </div>
                      <h3 className="font-display font-bold text-2xl mb-1">{social.name}</h3>
                      <p className="text-accent text-sm mb-4">{social.handle}</p>
                      <p className="text-foreground/70 leading-relaxed">{social.desc}</p>
                    </div>
                    <a
                      href={social.url || "#"}
                      target={social.url ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="mt-8 w-full px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-sm font-medium"
                    >
                      Подписаться
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bug Report / CTA */}
      <section id="cta" className="py-32 px-6">
        <div
          className={`max-w-2xl mx-auto text-center transition-all duration-1000 ${visibleSections["cta"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Помоги нам стать лучше</span>
          <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mb-6 mt-4">
            <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
              Нашёл баг?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 font-light">
            Расскажи нам о проблеме — мы исправим это как можно скорее.
          </p>

          {bugSent ? (
            <div className="p-10 border border-accent/30 rounded-2xl bg-accent/10 text-center">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="font-display font-bold text-2xl mb-2 text-accent">Спасибо!</h3>
              <p className="text-muted-foreground">Мы получили ваш отчёт и скоро разберёмся с проблемой.</p>
            </div>
          ) : (
            <form onSubmit={handleBugSubmit} className="text-left space-y-4">
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Ваше имя</label>
                <input
                  type="text"
                  value={bugForm.name}
                  onChange={(e) => setBugForm({ ...bugForm, name: e.target.value })}
                  placeholder="Иван Иванов"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-accent/20 focus:border-accent/60 outline-none text-white placeholder:text-white/30 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Email</label>
                <input
                  type="email"
                  value={bugForm.email}
                  onChange={(e) => setBugForm({ ...bugForm, email: e.target.value })}
                  placeholder="ivan@example.com"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-accent/20 focus:border-accent/60 outline-none text-white placeholder:text-white/30 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Описание проблемы</label>
                <textarea
                  value={bugForm.description}
                  onChange={(e) => setBugForm({ ...bugForm, description: e.target.value })}
                  placeholder="Опиши, что произошло и как воспроизвести проблему..."
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-accent/20 focus:border-accent/60 outline-none text-white placeholder:text-white/30 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="group w-full px-10 py-5 bg-gradient-to-r from-accent to-accent/90 text-black rounded-full hover:shadow-2xl hover:shadow-accent/40 transition-all font-bold text-lg flex items-center gap-3 justify-center"
              >
                Отправить отчёт
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-accent/10 py-12 px-6 bg-background/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
          <p>© 2026 CreativeHub — Клиентский портал</p>
          <div className="flex gap-8">
            <a href="#features" className="hover:text-white transition-colors">
              О нас
            </a>
            <a href="#portfolio" className="hover:text-white transition-colors">
              Соцсети
            </a>
            <a href="#cta" className="hover:text-white transition-colors">
              Сообщить о баге
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;