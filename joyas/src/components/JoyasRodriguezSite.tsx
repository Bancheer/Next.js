"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function JoyasRodriguezSite() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Promo bar */}
      <div className="bg-surface-100 text-ink-900 text-xs tracking-wide">
        <div className="container-max h-8 flex items-center gap-3">
          <div className="flex items-center gap-2">
            <a
              aria-label="Facebook"
              href="#"
              className="hidden md:inline text-ink-900/80 hover:text-ink-900"
            >
              {/* icons */}●
            </a>
            <a
              aria-label="Instagram"
              href="#"
              className="hidden md:inline text-ink-900/80 hover:text-ink-900"
            >
              ●
            </a>
          </div>
          <div className="mx-auto">
            DESCUENTO EXTRA: Aplicado al carrito sobre dos o más artículos
          </div>
          <div className="w-16" />
        </div>
      </div>

      {/* Header */}
      <header
        className={`sticky top-0 z-40 transition-all bg-white border-b ${
          scrolled ? "border-line/100" : "border-transparent"
        }`}
      >
        <div className="container-max h-16 flex items-center justify-between">
          {/* left: nav (desktop) + burger (mobile) */}
          <div className="flex items-center gap-6">
            <button
              className="md:hidden h-10 w-10 grid place-items-center rounded-xl border border-line"
              onClick={() => setMobileOpen(true)}
              aria-label="Abrir menú"
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
            <nav className="hidden md:flex items-center gap-6 text-sm text-ink-700">
              {["INICIO", "JOYAS", "REGALOS", "TENDENCIAS"].map((x) => (
                <a key={x} href="#" className="hover:text-ink-900">
                  {x}
                </a>
              ))}
            </nav>
          </div>

          {/* center: logo */}
          <a href="#home" className="flex items-center gap-3">
            <span className="inline-grid place-items-center h-9 w-9 rounded-md border border-line">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M12 3 3 10l9 11 9-11-9-7Z" />
              </svg>
            </span>
            <div className="leading-tight">
              <div className="font-serif text-xl">Joyas Rodriguez</div>
              <div className="text-[11px] text-ink-500 -mt-0.5">
                Jewelry Store
              </div>
            </div>
          </a>

          {/* right: util */}
          <div className="flex items-center gap-2 md:gap-3">
            <a
              href="#"
              className="hidden md:inline text-sm text-ink-700 hover:text-ink-900"
            >
              CONTACTO
            </a>
            <a
              href="#"
              className="hidden md:inline text-sm text-ink-700 hover:text-ink-900"
            >
              SIGUE TU PEDIDO
            </a>
            {[
              { label: "Search", icon: <path d="M21 21 17.5 17.5" /> },
              {
                label: "Account",
                icon: (
                  <>
                    <path d="M20 21a8 8 0 1 0-16 0" />
                    <circle cx="12" cy="7" r="4" />
                  </>
                ),
              },
              {
                label: "Cart",
                icon: (
                  <>
                    <path d="M6 6h15l-1.5 9H8L6 3H3" />
                    <circle cx="9" cy="20" r="1.5" />
                    <circle cx="18" cy="20" r="1.5" />
                  </>
                ),
              },
            ].map((it, i) => (
              <button
                key={i}
                aria-label={it.label}
                className="h-10 w-10 grid place-items-center rounded-xl border border-line"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  {it.icon}
                </svg>
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50"
          role="dialog"
          aria-modal
          onClick={() => setMobileOpen(false)}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div
            className="absolute inset-x-0 top-0 bg-white max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="container-max py-4">
              <div className="flex items-center justify-between h-12">
                <button
                  className="h-10 w-10 grid place-items-center rounded-xl border border-line"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Cerrar"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M6 6l12 12M18 6 6 18" />
                  </svg>
                </button>
                <div className="text-sm text-ink-500">Joyas Rodriguez</div>
                <div className="w-10" />
              </div>

              <div className="relative aspect-[16/9] rounded-card overflow-hidden bg-surface-100 mb-4">
                <Image
                  src="/images/hero.jpg"
                  alt="Banner"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 grid place-items-center">
                  <button className="btn btn-outline bg-white/80 backdrop-blur text-ink-900">
                    MÁS VENDIDOS
                  </button>
                </div>
              </div>

              {[
                "JOYAS",
                "REGALOS",
                "TENDENCIAS",
                "INICIO",
                "CONTACTO",
                "SIGUE TU PEDIDO",
              ].map((t) => (
                <div key={t} className="border-b border-line py-3 text-lg">
                  {t} <span className="float-right">→</span>
                </div>
              ))}

              <div className="mt-5 grid grid-cols-2 gap-3">
                <button className="btn btn-outline">MÁS VENDIDOS</button>
                <button className="btn btn-primary">NOVEDADES</button>
              </div>

              <div className="mt-6">
                <div className="text-sm text-ink-500 mb-1 flex items-center justify-between">
                  <span>Search</span>
                  <span>BUSCAR</span>
                </div>
                <input
                  className="input-underline"
                  placeholder="Ingrese su solicitud…"
                />
              </div>

              <div className="flex items-center gap-4 mt-6">
                <a
                  href="#"
                  className="h-9 w-9 grid place-items-center rounded-lg border border-line"
                >
                  f
                </a>
                <a
                  href="#"
                  className="h-9 w-9 grid place-items-center rounded-lg border border-line"
                >
                  ig
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* HERO — двойной баннер с купонами как в макете */}
      <section className="relative">
        <div className="container-max pt-4 lg:pt-8">
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-card shadow-soft">
            <Image
              src="/images/hero.jpg"
              alt="Oferta"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/25" />
            <div className="absolute right-6 top-6 text-right text-white">
              <div className="text-[12px] tracking-wider opacity-90">
                Oferta de primavera 2024:
              </div>
              <div className="text-h1 h-script">COMPRE MÁS, AHORRE MÁS</div>
              <div className="mt-4 space-y-2">
                {[
                  { txt: "Buy 2 - Get 5%, Use Cod", code: "TAKE5" },
                  { txt: "Buy 3 - Get 10%, Use Cod", code: "TAKE10" },
                  { txt: "Buy 4 - Get 20%, Use Cod", code: "TAKE20" },
                ].map((c) => (
                  <div
                    key={c.code}
                    className="flex items-center justify-end gap-2"
                  >
                    <span className="text-sm bg-white/10 px-3 py-1 rounded-md">
                      {c.txt}
                    </span>
                    <button className="btn-blue">{c.code}</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Блок категорий (PULSERAS/ANILLOS/…) */}
      <section className="container-max mt-14">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "PULSERAS", img: "/images/product-1.jpg" },
            { title: "ANILLOS", img: "/images/product-2.jpg" },
            { title: "PENDIENTES", img: "/images/product-3.jpg" },
            { title: "COLLARES", img: "/images/product-4.jpg" },
          ].map((i) => (
            <div
              key={i.title}
              className="relative aspect-[3/2] rounded-card overflow-hidden bg-surface-50 border border-line"
            >
              <Image src={i.img} alt={i.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-white/70 mix-blend-luminosity" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center gap-2">
                <div className="text-2xl md:text-3xl tracking-widest">
                  {i.title}
                </div>
                <a
                  href="#"
                  className="text-xs tracking-widest underline underline-offset-4"
                >
                  DISCOVER MORE
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* “Más de 200.000 clientes satisfechos” + иконки преимуществ */}
      <section className="container-max mt-16">
        <div className="text-center">
          <div className="uppercase tracking-[0.2em] text-sm">
            MÁS DE <b>200.000</b> CLIENTES SATISFECHOS
          </div>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            {[
              { t: "Caja regalo incluida en todos los pedidos" },
              { t: "30 días de garantía" },
              { t: "Envío gratuito en todos los pedidos" },
              { t: "Joyas Rodriguez a tu servicio" },
            ].map((f, i) => (
              <div
                key={i}
                className="rounded-card border border-line p-5 bg-white"
              >
                <div className="h-8 text-ink-700 mb-2">★</div>
                <div className="text-ink-700">{f.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regalos para… (4 карточки с бейджами) */}
      <section className="container-max mt-20">
        <h2 className="text-h2">REGALOS PARA…</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {[
            {
              tag: "TENDENCIA",
              img: "/images/product-5.jpg",
              title: "MADRE & HIJA",
            },
            {
              tag: "PROMOCIONES",
              img: "/images/product-6.jpg",
              title: "MEJORES AMIGOS",
            },
            {
              tag: "ÚLTIMAS UNIDADES",
              img: "/images/product-7.jpg",
              title: "AMOR Y COMPROMISO",
            },
            { tag: "NUEVO", img: "/images/product-8.jpg", title: "HOMBRES" },
          ].map((c, i) => (
            <article key={i} className="group">
              <div className="relative aspect-[3/2] rounded-none overflow-hidden border border-line bg-white">
                <Image
                  src={c.img}
                  alt={c.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <span
                  className={`badge absolute left-3 top-3 ${
                    i === 0
                      ? "badge-sale"
                      : i === 1
                      ? "bg-accent-blue/15 text-accent-blue"
                      : i === 2
                      ? "bg-ink-700/10 text-ink-700"
                      : "bg-accent-blue/15 text-accent-blue"
                  }`}
                >
                  {c.tag}
                </span>
              </div>
              <div className="mt-2 text-center tracking-wider">{c.title}</div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-24 bg-surface-50">
        <div className="container-max py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-3">
                <span className="inline-grid place-items-center h-9 w-9 rounded-md border border-line">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M12 3 3 10l9 11 9-11-9-7Z" />
                  </svg>
                </span>
                <div>
                  <div className="font-serif text-xl leading-none">
                    Joyas Rodriguez
                  </div>
                  <div className="text-[11px] text-ink-500 -mt-0.5">
                    Jewelry Store
                  </div>
                </div>
              </div>
              <p className="mt-6 text-ink-700 text-body max-w-xs">
                Descubre nuevos modelos, eventos especiales, ofertas únicas y
                mucho más.
              </p>
              <form
                className="mt-6 max-w-xs"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="relative">
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="input-underline"
                  />
                  <button
                    className="absolute right-0 top-2 text-ink-700"
                    aria-label="Suscribir"
                  >
                    →
                  </button>
                </div>
                <p className="mt-2 hidden text-xs text-accent-red">
                  Formato erróneo
                </p>
              </form>
              <div className="mt-6 flex items-center gap-4">
                <a
                  href="#"
                  className="h-9 w-9 grid place-items-center rounded-lg border border-line"
                >
                  f
                </a>
                <a
                  href="#"
                  className="h-9 w-9 grid place-items-center rounded-lg border border-line"
                >
                  ig
                </a>
              </div>
            </div>

            <div>
              <div className="font-medium tracking-wide">AYUDA</div>
              <ul className="mt-3 space-y-2 text-ink-700">
                {[
                  "Seguimiento",
                  "Preguntas frecuentes",
                  "Mantenimiento de la plata",
                  "Referencias",
                  "Contactos",
                  "¿Quién Somos?",
                ].map((t) => (
                  <li key={t}>
                    <a href="#" className="hover:opacity-80">
                      {t}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="font-medium tracking-wide">CONTACTOS</div>
              <p className="mt-3 text-ink-700 max-w-xs">
                No dudes en ponerse en contacto con nosotros:
              </p>
              <div className="mt-3 inline-flex items-center gap-2 text-ink-900">
                <span className="inline-grid place-items-center h-8 w-8 rounded-full border border-line">
                  @
                </span>
                infojoyasrodriguez@gmail.com
              </div>
            </div>

            <div>
              <div className="font-medium tracking-wide">MENU FOOTER</div>
              <ul className="mt-3 space-y-2 text-ink-700">
                {[
                  "Política de Envío",
                  "Política de privacidad",
                  "Legislación aplicable",
                  "Política de Reembolso",
                  "Términos de servicio",
                ].map((t) => (
                  <li key={t}>
                    <a href="#" className="hover:opacity-80">
                      {t}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {[
              "amex",
              "applepay",
              "diners",
              "discover",
              "jcb",
              "mastercard",
              "visa",
            ].map((p) => (
              <div
                key={p}
                className="h-8 min-w-[48px] rounded-md bg-white border border-line grid place-items-center px-3 text-xs"
              >
                {p.toUpperCase()}
              </div>
            ))}
          </div>
          <div className="mt-4 text-center text-sm text-ink-700">
            © 2024 Joyería Rodriguez
          </div>
        </div>
      </footer>
    </div>
  );
}
