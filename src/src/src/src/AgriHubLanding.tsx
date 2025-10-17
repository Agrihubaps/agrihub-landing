import { useState } from "react";
import { ArrowRight, Leaf, Sprout, Handshake, Users2, Factory, BarChart3, Library, Globe, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Simple helper components
function SectionTitle({ kicker, title, subtitle }: { kicker?: string; title: string; subtitle?: string }) {
  return (
    <div className="max-w-3xl mx-auto text-center">
      {kicker && <p className="text-sm uppercase tracking-widest text-neutral-500">{kicker}</p>}
      <h2 className="mt-2 text-3xl md:text-4xl font-semibold leading-tight text-neutral-900">{title}</h2>
      {subtitle && <p className="mt-3 text-neutral-600 text-lg">{subtitle}</p>}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-sm ring-1 ring-neutral-200">
      <p className="text-sm text-neutral-500">{label}</p>
      <p className="mt-1 text-2xl font-semibold text-neutral-900">{value}</p>
    </div>
  );
}

export default function AgriHubLanding() {
  const [lang, setLang] = useState<"da" | "en">("da");

  const t = (key: string) => {
    const dict: Record<string, Record<string, string>> = {
      da: {
        nav_about: "Om AgriHub",
        nav_features: "Funktioner",
        nav_market: "Marked",
        nav_model: "Forretningsmodel",
        nav_team: "Team",
        nav_contact: "Kontakt",
        hero_kicker: "Digitalt økosystem for landbruget",
        hero_title: "Fremtidens landbrug er forbundet",
        hero_sub: "AgriHub samler landmænd, virksomheder, leverandører, rådgivere og rekruttering i ét digitalt økosystem.",
        hero_cta_primary: "Bliv pilotbruger",
        hero_cta_secondary: "Tal med os",
        problem_kicker: "Problemet",
        problem_title: "Fragmenteret marked. Spild af tid. Ingen gennemsigtighed.",
        problem_p1: "I dag bruger mange landmænd mere tid på at lede efter udstyr og arbejdskraft end på at pleje jorden.",
        solution_kicker: "Løsningen",
        solution_title: "Alt samlet på én platform",
        solution_points_1: "Hurtig kommunikation og match mellem behov og udbud",
        solution_points_2: "Flere salgsmuligheder og lavere omkostninger",
        solution_points_3: "Videndeling, netværk og data-drevne beslutninger",
        features_kicker: "Funktioner",
        features_title: "Én platform – mange muligheder",
        f_marketplace_title: "Marketplace",
        f_marketplace_desc: "Køb/salg af udstyr, ydelser og materialer – inkl. profiler og bedømmelser.",
        f_recruit_title: "Rekruttering",
        f_recruit_desc: "Jobopslag, CV-database og direkte kontakt mellem arbejdsgivere og kandidater.",
        f_feed_title: "Fagligt feed",
        f_feed_desc: "Nyheder, cases og debat – et sted hvor branchen mødes og deler viden.",
        f_b2b_title: "B2B & partnerskaber",
        f_b2b_desc: "Skab forbindelser til banker, kooperativer og leverandører på tværs af Norden.",
        advantage_kicker: "Konkurrencefordel",
        advantage_title: "Den eneste integrerede økosystemløsning",
        advantage_sub: "Hvor andre løsninger er fragmenterede, samler AgriHub handel, rekruttering, videndeling og netværk – ét sted.",
        market_kicker: "Marked",
        market_title: "Stærkt potentiale i Skandinavien",
        model_kicker: "Forretningsmodel",
        model_title: "Abonnementer, reklamer og transaktioner",
        model_sub: "Stabil tilbagevendende indtægt + vækst via partnerskaber og marketplace.",
        team_kicker: "Team",
        team_title: "Erfaring fra landbrug, teknologi og ledelse",
        cta_title: "Bliv en del af AgriHub",
        cta_sub: "Vi bygger MVP og søger pilotbrugere, partnere og investorer.",
        contact_label: "Skriv til os",
        footer_rights: "© AgriHub ApS. Alle rettigheder forbeholdes.",
      },
      en: {
        nav_about: "About",
        nav_features: "Features",
        nav_market: "Market",
        nav_model: "Business Model",
        nav_team: "Team",
        nav_contact: "Contact",
        hero_kicker: "Digital ecosystem for agriculture",
        hero_title: "The future of agriculture is connected",
        hero_sub: "AgriHub unites farmers, companies, suppliers, advisors and recruitment in one digital ecosystem.",
        hero_cta_primary: "Join as pilot",
        hero_cta_secondary: "Talk to us",
        problem_kicker: "Problem",
        problem_title: "Fragmented market. Time wasted. Low transparency.",
        problem_p1: "Today, many farmers spend more time searching for equipment and labor than cultivating their fields.",
        solution_kicker: "Solution",
        solution_title: "Everything in one platform",
        solution_points_1: "Fast communication and matching between demand and supply",
        solution_points_2: "More sales opportunities and lower costs",
        solution_points_3: "Knowledge sharing, networking and data-driven decisions",
        features_kicker: "Features",
        features_title: "One platform – many possibilities",
        f_marketplace_title: "Marketplace",
        f_marketplace_desc: "Buy/sell equipment, services and materials – with profiles and ratings.",
        f_recruit_title: "Recruitment",
        f_recruit_desc: "Job posts, CV database and direct messaging.",
        f_feed_title: "Professional feed",
        f_feed_desc: "News, cases and debate – a place for the sector to meet and share knowledge.",
        f_b2b_title: "B2B & partnerships",
        f_b2b_desc: "Connect to banks, cooperatives and suppliers across the Nordics.",
        advantage_kicker: "Advantage",
        advantage_title: "The only integrated ecosystem",
        advantage_sub: "Where others are fragmented, AgriHub combines trade, recruitment, knowledge and networking in one place.",
        market_kicker: "Market",
        market_title: "Strong potential in Scandinavia",
        model_kicker: "Business Model",
        model_title: "Subscriptions, ads and transactions",
        model_sub: "Recurring revenue + growth via partnerships and marketplace.",
        team_kicker: "Team",
        team_title: "Experience in agriculture, tech and leadership",
        cta_title: "Join AgriHub",
        cta_sub: "We are building the MVP and seeking pilot users, partners and investors.",
        contact_label: "Write to us",
        footer_rights: "© AgriHub ApS. All rights reserved.",
      },
    };
    return dict[lang][key];
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Nav */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sprout className="w-6 h-6" />
            <span className="font-semibold">AgriHub</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-neutral-700">{t("nav_about")}</a>
            <a href="#features" className="hover:text-neutral-700">{t("nav_features")}</a>
            <a href="#market" className="hover:text-neutral-700">{t("nav_market")}</a>
            <a href="#model" className="hover:text-neutral-700">{t("nav_model")}</a>
            <a href="#team" className="hover:text-neutral-700">{t("nav_team")}</a>
            <a href="#contact" className="hover:text-neutral-700">{t("nav_contact")}</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="secondary" className="rounded-xl" onClick={() => setLang(lang === "da" ? "en" : "da")}>{lang === "da" ? "EN" : "DA"}</Button>
            <Button className="rounded-xl">{t("hero_cta_secondary")}</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50/60 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-widest text-sm text-neutral-500">{t("hero_kicker")}</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-semibold leading-[1.1]">{t("hero_title")}</h1>
            <p className="mt-4 text-lg text-neutral-700">{t("hero_sub")}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button className="rounded-xl h-11 px-5">{t("hero_cta_primary")} <ArrowRight className="w-4 h-4 ml-2" /></Button>
              <Button variant="outline" className="rounded-xl h-11 px-5">{t("hero_cta_secondary")}</Button>
            </div>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <Stat label={lang === "da" ? "Gårde i DK" : "Farms in DK"} value="33.000" />
              <Stat label={lang === "da" ? "Gårde i SE" : "Farms in SE"} value="59.000" />
              <Stat label={lang === "da" ? "År 1 omsætning (prognose)" : "Year 1 revenue (proj.)"} value="6,83 mio. DKK" />
              <Stat label={lang === "da" ? "Mål brugere (År 1)" : "Users target (Y1)"} value="~2.380" />
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-white shadow-lg ring-1 ring-neutral-200 p-6 grid grid-cols-2 gap-4">
              <Card className="col-span-2">
                <CardHeader className="pb-2"><CardTitle className="text-base">{lang === "da" ? "Fragmenteret marked" : "Fragmented market"}</CardTitle></CardHeader>
                <CardContent className="text-sm text-neutral-600">{lang === "da" ? "Tid og salg går tabt • Ingen gennemsigtighed • Dyrt" : "Time and sales lost • Low transparency • Costly"}</CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2"><CardTitle className="text-base">{lang === "da" ? "Alt på én platform" : "All-in-one"}</CardTitle></CardHeader>
                <CardContent className="text-sm text-neutral-600">{lang === "da" ? "Marketplace, HR, Community" : "Marketplace, HR, Community"}</CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2"><CardTitle className="text-base">{lang === "da" ? "Hurtig kommunikation" : "Fast communication"}</CardTitle></CardHeader>
                <CardContent className="text-sm text-neutral-600">{lang === "da" ? "Direkte chat og match" : "Direct chat and matching"}</CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About / Solution */}
      <section id="about" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle kicker={t("problem_kicker")} title={t("problem_title")} subtitle={t("problem_p1")} />
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2 flex flex-row items-center gap-2"><Leaf className="w-5 h-5" /><CardTitle className="text-base">{t("solution_kicker")}</CardTitle></CardHeader>
              <CardContent className="text-sm text-neutral-600">{t("solution_title")}</CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2"><CardTitle className="text-base">{t("solution_points_1")}</CardTitle></CardHeader>
              <CardContent className="text-sm text-neutral-600">{lang === "da" ? "Effektivt match mellem landmænd, leverandører og arbejdskraft." : "Efficient matching across the value chain."}</CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2"><CardTitle className="text-base">{t("solution_points_2")}</CardTitle></CardHeader>
              <CardContent className="text-sm text-neutral-600">{lang === "da" ? "Lavere CAC gennem økosystem og netværk." : "Lower CAC via ecosystem effects."}</CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle kicker={t("features_kicker")} title={t("features_title")} />
          <div className="mt-10 grid md:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="pb-2 flex items-center gap-2"><Factory className="w-5 h-5" /><CardTitle className="text-base">{t("f_marketplace_title")}</CardTitle></CardHeader>
              <CardContent className="text-sm text-neutral-600">{t("f_marketplace_desc")}</CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2 flex items-center gap-2"><Users2 className="w-5 h-5" /><CardTitle className="text-base">{t("f_recruit_title")}</CardTitle></CardHeader>
              <CardContent className="text-sm text-neutral-600">{t("f_recruit_desc")}</CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2 flex items-center gap-2"><Library className="w-5 h-5" /><CardTitle className="text-base">{t("f_feed_title")}</CardTitle></CardHeader>
              <CardContent className="text-sm text-neutral-600">{t("f_feed_desc")}</CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2 flex items-center gap-2"><Handshake className="w-5 h-5" /><CardTitle className="text-base">{t("f_b2b_title")}</CardTitle></CardHeader>
              <CardContent className="text-sm text-neutral-600">{t("f_b2b_desc")}</CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Market */}
      <section id="market" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle kicker={t("market_kicker")} title={t("market_title")} />
          <div className="mt-10 grid md:grid-cols-4 gap-6">
            <Stat label={lang === "da" ? "Danmark • gårde" : "Denmark • farms"} value="33.000" />
            <Stat label={lang === "da" ? "Sverige • gårde" : "Sweden • farms"} value="59.000" />
            <Stat label={lang === "da" ? "Digitalt landbrug DK (2022)" : "Digital agri DK (2022)"} value="~1,3 mia. USD" />
            <Stat label={lang === "da" ? "2023→2030 vækst" : "Growth 2023→2030"} value="→ 3,5 mia. USD" />
          </div>
          <p className="mt-6 text-neutral-600 text-center max-w-3xl mx-auto">
            {lang === "da"
              ? "Globalt vokser digitalt landbrug ~10–11 % årligt. Norden er klar til en samlet løsning."
              : "Globally, digital agriculture grows ~10–11% annually. The Nordics are ready for a unified solution."}
          </p>
        </div>
      </section>

      {/* Business Model */}
      <section id="model" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle kicker={t("model_kicker")} title={t("model_title")} subtitle={t("model_sub")} />
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2"><CardTitle className="text-base">Subscriptions</CardTitle></CardHeader>
              <CardContent className="text-sm text-neutral-600">DKK 99–2.999 / md. efter rolle (landmænd, virksomheder, HR, banker m.fl.).</CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2"><CardTitle className="text-base">Ads & Partnerships</CardTitle></CardHeader>
              <CardContent className="text-sm text-neutral-600">Brandede profiler, markedindsigt og kommercielle samarbejder.</CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2"><CardTitle className="text-base">Transactions</CardTitle></CardHeader>
              <CardContent className="text-sm text-neutral-600">Gebyr på handler, når marketplace aktiveres (10k+ brugere).</CardContent>
            </Card>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <Stat label={lang === "da" ? "Omsætning (År 1)" : "Revenue (Year 1)"} value="6,83 mio. DKK" />
            <Stat label={lang === "da" ? "Omsætning (År 2)" : "Revenue (Year 2)"} value="14,33 mio. DKK" />
            <Stat label={lang === "da" ? "Omsætning (År 3)" : "Revenue (Year 3)"} value="25,18 mio. DKK" />
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle kicker={t("team_kicker")} title={t("team_title")} />
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Rune Larssen Elsborg — CEO</CardTitle>
              </CardHeader>
              <CardContent className="text-neutral-600 text-sm">
                6 års erfaring i en stor agrovirksomhed med tekniske projekter på tværs af Skandinavien og omfattende sektor-kommunikation. 20 års ledelseserfaring fra olieplatforme.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Denis Antoshyn — Director</CardTitle>
              </CardHeader>
              <CardContent className="text-neutral-600 text-sm">
                15+ års erfaring i landbrugssektoren, universitetsuddannet i landbrug, 4 års arbejde i agrovirksomhed med landbrugsudstyr.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle kicker={lang === "da" ? "Partnere" : "Partners"} title={lang === "da" ? "Udvikling og marketing" : "Development & Marketing"} subtitle={lang === "da" ? "Vi arbejder sammen med erfarne teams inden for produktudvikling og performance marketing." : "We collaborate with seasoned teams across product development and performance marketing."} />
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-2"><CardTitle className="text-base">Stfalcon</CardTitle></CardHeader>
              <CardContent className="text-neutral-600 text-sm">
                Eksternt udviklingsteam (design, front-end, back-end, QA, DevOps). <a href="https://stfalcon.com/" className="underline" target="_blank" rel="noreferrer">stfalcon.com</a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2"><CardTitle className="text-base">Netpeak</CardTitle></CardHeader>
              <CardContent className="text-neutral-600 text-sm">
                Marketingbureau (SEO, Performance, SMM, Analytics). <a href="https://netpeak.us/" className="underline" target="_blank" rel="noreferrer">netpeak.us</a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionTitle title={t("cta_title")} subtitle={t("cta_sub")} />
          <div className="mt-8 flex items-center justify-center gap-3">
            <Button className="rounded-xl h-11 px-5"><Mail className="w-4 h-4 mr-2" /> {t("contact_label")}</Button>
            <Button variant="outline" className="rounded-xl h-11 px-5"><Linkedin className="w-4 h-4 mr-2" /> LinkedIn</Button>
          </div>
          <p className="mt-4 text-neutral-600 text-sm">agrihubaps@agrihubfarm.dk • CVR 45519058 • Sønderborg, DK</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <p className="text-sm text-neutral-500">{t("footer_rights")}</p>
          <div className="flex items-center gap-4 text-neutral-500">
            <Globe className="w-4 h-4" />
            <span>Skandinavien • DK • SE • NO • DE</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
