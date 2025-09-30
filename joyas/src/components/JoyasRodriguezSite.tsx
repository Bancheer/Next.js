import React, { useMemo, useState } from "react";
import Image from "next/image";

// Single-file React landing page draft based on the "Joyasrodriguez redesign" reference.
// Tech: React + TailwindCSS (no external deps). Clean, responsive, and ready to iterate.
// Notes:
// - Replace placeholder images/text with real brand assets when ready.
// - Color palette chosen to feel jewelry/luxury; tweak to match Figma exactly.
// - Sections: Header, Hero, USPs, Featured Collection, About, Testimonials, CTA, Footer.

export default function JoyasRodriguezSite() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const products = useMemo(
    () => [
      {
        id: 1,
        name: "Luna Necklace",
        price: "€129",
        image:
          "https://images.unsplash.com/photo-1617038260897-41a1fc8a2b65?q=80&w=1600&auto=format&fit=crop",
      },
      {
        id: 2,
        name: "Sol Ring",
        price: "€159",
        image:
          "https://images.unsplash.com/photo-1599643477580-2f9fe622ed3c?q=80&w=1600&auto=format&fit=crop",
      },
      {
        id: 3,
        name: "Astra Earrings",
        price: "€89",
        image:
          "https://images.unsplash.com/photo-1612392061789-9b0c7a40c8a4?q=80&w=1600&auto=format&fit=crop",
      },
      {
        id: 4,
        name: "Noble Bracelet",
        price: "€119",
        image:
          "https://images.unsplash.com/photo-1603566234499-965bb6fbd823?q=80&w=1600&auto=format&fit=crop",
      },
      {
        id: 5,
        name: "Orion Pendant",
        price: "€139",
        image:
          "https://images.unsplash.com/photo-1601924582971-b0d03b32b1ae?q=80&w=1600&auto=format&fit=crop",
      },
      {
        id: 6,
        name: "Serene Hoops",
        price: "€99",
        image:
          "https://images.unsplash.com/photo-1611591437281-460bfbe120a2?q=80&w=1600&auto=format&fit=crop",
      },
      {
        id: 7,
        name: "Muse Choker",
        price: "€149",
        image:
          "https://images.unsplash.com/photo-1520962918287-7448c2878f65?q=80&w=1600&auto=format&fit=crop",
      },
      {
        id: 8,
        name: "Halo Ring",
        price: "€179",
        image:
          "https://images.unsplash.com/photo-1611224885990-52b7d610b0ee?q=80&w=1600&auto=format&fit=crop",
      },
    ],
    []
  );

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50 transition-colors">
        {/* Header */}
        <header
          className={`fixed inset-x-0 top-0 z-40 transition-colors ${
            scrolled
              ? "backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-neutral-900/70 bg-white/80 dark:bg-neutral-900/80 border-b border-neutral-200 dark:border-neutral-800 shadow-sm"
              : "bg-transparent"
          }`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <a
              href="#home"
              className="font-[Raleway] text-xl tracking-widest font-extrabold"
            >
              JOYAS<span className="text-amber-500">·</span>RODRIGUEZ
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm">
              <a href="#collections" className="hover:text-amber-600">
                Коллекции
              </a>
              <a href="#about" className="hover:text-amber-600">
                О нас
              </a>
              <a href="#testimonials" className="hover:text-amber-600">
                Отзывы
              </a>
              <a href="#contact" className="hover:text-amber-600">
                Контакты
              </a>
            </nav>

            <div className="flex items-center gap-2 md:gap-4">
              <button
                onClick={() => setDark(!dark)}
                className={`inline-flex items-center justify-center h-9 w-9 rounded-full border hover:bg-neutral-100 dark:hover:bg-neutral-800 ${
                  scrolled
                    ? "border-neutral-300 dark:border-neutral-700"
                    : "border-white/50 dark:border-white/20"
                }`}
                aria-label="Toggle theme"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M12 3a9 9 0 1 0 9 9 7 7 0 0 1-9-9Z" />
                </svg>
              </button>

              <a
                href="#collections"
                className={`hidden md:inline-flex items-center gap-2 rounded-full px-4 h-10 border hover:bg-neutral-100 dark:hover:bg-neutral-800 ${
                  scrolled
                    ? "border-neutral-300 dark:border-neutral-700"
                    : "border-white/50 dark:border-white/20"
                }`}
              >
                <span>Каталог</span>
              </a>

              <button
                className={`md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border ${
                  scrolled
                    ? "border-neutral-300 dark:border-neutral-700"
                    : "border-white/50 dark:border-white/20"
                }`}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Open menu"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile nav */}
          {mobileOpen && (
            <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800 px-4 py-3 space-y-2 bg-white/90 dark:bg-neutral-900/90 backdrop-blur">
              <a
                href="#collections"
                className="block py-2"
                onClick={() => setMobileOpen(false)}
              >
                Коллекции
              </a>
              <a
                href="#about"
                className="block py-2"
                onClick={() => setMobileOpen(false)}
              >
                О нас
              </a>
              <a
                href="#testimonials"
                className="block py-2"
                onClick={() => setMobileOpen(false)}
              >
                Отзывы
              </a>
              <a
                href="#contact"
                className="block py-2"
                onClick={() => setMobileOpen(false)}
              >
                Контакты
              </a>
            </div>
          )}
        </header>

        {/* Hero */}
        <section id="home" className="relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-50 text-amber-900 px-3 py-1 text-xs tracking-wide dark:bg-amber-400/10 dark:text-amber-300 dark:border-amber-400/30">
                  НОВАЯ КОЛЛЕКЦИЯ · ОСЕНЬ 2025
                </div>
                <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
                  Украшения ручной работы, которые рассказывают{" "}
                  <span className="text-amber-600">вашу</span> историю
                </h1>
                <p className="mt-5 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-xl">
                  Нежные формы, благородные металлы и честная ручная работа.
                  Каждое изделие создано, чтобы быть с вами годами — и стать
                  семейной ценностью.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href="#collections"
                    className="inline-flex justify-center items-center h-12 px-6 rounded-2xl bg-amber-600 text-white hover:brightness-110"
                  >
                    Смотреть коллекции
                  </a>
                  <a
                    href="#about"
                    className="inline-flex justify-center items-center h-12 px-6 rounded-2xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  >
                    О мастерской
                  </a>
                </div>
                <div className="mt-8 grid grid-cols-3 gap-6 text-sm">
                  <div>
                    <div className="text-2xl font-semibold">12+</div>
                    <div className="text-neutral-500 dark:text-neutral-400">
                      лет опыта
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-semibold">5k+</div>
                    <div className="text-neutral-500 dark:text-neutral-400">
                      счастливых клиентов
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-semibold">100%</div>
                    <div className="text-neutral-500 dark:text-neutral-400">
                      ручная работа
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div
                  className="absolute inset-0 -z-10 blur-3xl opacity-50 dark:opacity-30"
                  aria-hidden
                >
                  <div className="w-[32rem] h-[32rem] bg-gradient-to-br from-amber-200 to-rose-200 rounded-full translate-x-20 translate-y-10" />
                </div>
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-neutral-900/5 dark:ring-white/10">
                  <Image
                    className="w-full h-full object-cover"
                    alt="Модель с украшениями JoyasRodriguez"
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* USPs */}
        <section className="py-12 sm:py-16 border-t border-neutral-200 dark:border-neutral-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Этика и прозрачность",
                desc: "Материалы из проверенных источников, честные процессы и открытая коммуникация.",
              },
              {
                title: "Золотая гарантия 2 года",
                desc: "Бесплатный уход и ремонт мелких дефектов в течение 24 месяцев.",
              },
              {
                title: "Индивидуальные заказы",
                desc: "Воплотим семейную реликвию по вашему эскизу — от идеи до готового изделия.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700 dark:bg-amber-400/10 dark:text-amber-300">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-1 text-neutral-600 dark:text-neutral-300">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Collection */}
        <section id="collections" className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl sm:text-4xl font-semibold">
                  Избранная коллекция
                </h2>
                <p className="mt-2 text-neutral-600 dark:text-neutral-300 max-w-2xl">
                  Деликатные формы и жемчужные акценты — для ежедневных образов
                  и особых случаев.
                </p>
              </div>
              <a
                href="#"
                className="hidden sm:inline-flex h-11 px-5 items-center rounded-2xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                Весь каталог
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {products.map((p) => (
                <article
                  key={p.id}
                  className="group rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900"
                >
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">{p.name}</h3>
                    <div className="mt-1 text-neutral-500 dark:text-neutral-400">
                      {p.price}
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <button className="flex-1 h-10 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90">
                        В корзину
                      </button>
                      <button
                        className="h-10 aspect-square rounded-xl border border-neutral-300 dark:border-neutral-700 grid place-items-center hover:bg-neutral-100 dark:hover:bg-neutral-800"
                        aria-label="Add to wishlist"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path d="M12 21s-6-4.35-9-7.35C-1 6 6 1 12 7c6-6 13  -1 9 6.65C18 16.65 12 21 12 21Z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="sm:hidden mt-6">
              <a
                href="#"
                className="inline-flex h-11 px-5 items-center rounded-2xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                Весь каталог
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="py-16 sm:py-24 border-t border-neutral-200 dark:border-neutral-800"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-semibold">
                История мастерской
              </h2>
              <p className="mt-4 text-neutral-600 dark:text-neutral-300">
                Мы верим в долговечность и смысл. Украшение — это не просто
                аксессуар, а знак привязанности, памяти и благодарности. С 2013
                года мы создаём украшения, которые становятся частью семейных
                историй.
              </p>
              <ul className="mt-6 space-y-3 text-neutral-700 dark:text-neutral-200">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-amber-500" />
                  Ответственные поставщики золота и серебра
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-amber-500" />
                  Натуральные камни и сертифицированные бриллианты
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-amber-500" />
                  Индивидуальные гравировки и подгонка размеров
                </li>
              </ul>
              <div className="mt-8 flex gap-3">
                <a
                  href="#contact"
                  className="inline-flex h-12 px-6 items-center rounded-2xl bg-amber-600 text-white hover:brightness-110"
                >
                  Связаться
                </a>
                <a
                  href="#"
                  className="inline-flex h-12 px-6 items-center rounded-2xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  Сертификаты
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
                <Image
                  className="w-full h-full object-cover"
                  alt="Процесс ручного изготовления украшений"
                  src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-semibold">
              Отзывы клиентов
            </h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  quote:
                    "Кольцо с сапфиром превзошло ожидания — тонкая работа и идеальная посадка.",
                  name: "Екатерина",
                },
                {
                  quote:
                    "Дарил серьги на годовщину: упаковка, подача, сервис — всё на высоте!",
                  name: "Артём",
                },
                {
                  quote:
                    "Заказала подвеску по эскизу. Учли каждую деталь, получилось очень трогательно.",
                  name: "Марина",
                },
              ].map((t, i) => (
                <figure
                  key={i}
                  className="rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900"
                >
                  <blockquote className="text-neutral-700 dark:text-neutral-200">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
                    — {t.name}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* CTA / Newsletter */}
        <section
          id="contact"
          className="py-16 sm:py-24 border-t border-neutral-200 dark:border-neutral-800"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold">
                Подпишитесь на новости и получите −10%
              </h2>
              <p className="mt-2 text-neutral-600 dark:text-neutral-300">
                Промокод на первую покупку и редкие письма о новых коллекциях.
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Спасибо! Мы отправили письмо с подтверждением.");
              }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                required
                type="email"
                placeholder="Ваш email"
                className="flex-1 h-12 rounded-2xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-4 outline-none focus:ring-2 focus:ring-amber-500/40"
              />
              <button className="h-12 px-6 rounded-2xl bg-amber-600 text-white hover:brightness-110">
                Подписаться
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-neutral-200 dark:border-neutral-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="font-[Raleway] text-lg tracking-widest font-extrabold">
                  JOYAS<span className="text-amber-500">·</span>RODRIGUEZ
                </div>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 max-w-xs">
                  Украшения с характером. Сделано вручную в Европе.
                </p>
              </div>
              <div>
                <div className="font-medium">Магазин</div>
                <ul className="mt-3 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                  <li>
                    <a href="#collections" className="hover:text-amber-600">
                      Каталог
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-amber-600">
                      Подарочные карты
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-amber-600">
                      Доставка и возврат
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <div className="font-medium">О нас</div>
                <ul className="mt-3 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                  <li>
                    <a href="#about" className="hover:text-amber-600">
                      История
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-amber-600">
                      Этика
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="hover:text-amber-600">
                      Контакты
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <div className="font-medium">Юр. информация</div>
                <ul className="mt-3 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                  <li>
                    <a href="#" className="hover:text-amber-600">
                      Политика конфиденциальности
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-amber-600">
                      Условия сервиса
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-800 text-sm text-neutral-500 dark:text-neutral-400 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                © {new Date().getFullYear()} JoyasRodriguez. Все права защищены.
              </div>
              <div className="flex items-center gap-4">
                <a href="#" className="hover:text-amber-600">
                  Instagram
                </a>
                <a href="#" className="hover:text-amber-600">
                  Pinterest
                </a>
                <a href="#" className="hover:text-amber-600">
                  Email
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
