import { useState, useRef } from "react";
import { Menu, X, Phone, Mail, MapPin, Building2, ChevronDown, CheckCircle, Loader } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const NAV_LINKS = [
  { label: "Rreth Nesh", href: "#rreth-nesh" },
  { label: "Banesat Tona", href: "#banesat" },
  { label: "Na Kontaktoni", href: "#kontakt" },
];

const RESIDENCES = [
  {
    id: 1,
    name: "London Residence I",
    location: "Lagja Arbëria, Prishtinë",
    units: "48 njësi",
    status: "E shitur",
    image: "https://images.unsplash.com/photo-1551361415-69c87624334f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBhcGFydG1lbnQlMjBidWlsZGluZyUyMEJhbGthbnMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzgwODYyMzA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    desc: "Kompleksi i parë rezidencial i London Ltd, i përfunduar në vitin 2018. Ofron apartamente moderne me pamje panoramike të Prishtinës.",
  },
  {
    id: 2,
    name: "London Residence II",
    location: "Lagja Bregu i Diellit, Prishtinë",
    units: "72 njësi",
    status: "Aktiv",
    image: "https://images.unsplash.com/photo-1565363887715-8884629e09ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBsdXh1cnklMjBhcGFydG1lbnQlMjBidWlsZGluZyUyMEJhbGthbnMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzgwODYyMzA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    desc: "Projekti ynë më i ri me dizajn bashkëkohor dhe teknologji të gjelbër. Apartamente 1+1 deri 3+1 të disponueshme.",
  },
  {
    id: 3,
    name: "London Towers",
    location: "Qendra e Prishtinës",
    units: "120 njësi",
    status: "Në ndërtim",
    image: "https://images.unsplash.com/photo-1619218070141-bcfeb8b93074?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBsdXh1cnklMjBhcGFydG1lbnQlMjJidWlsZGluZyUyMEJhbGthbnMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzgwODYyMzA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    desc: "Projekti ambicioz i dy kullave në zemër të kryeqytetit. Përfshin apartamente luksoze, ambiente komerciale dhe garazhe nëntokësore.",
  },
];

const STATS = [
  { value: "15+", label: "Vjet Përvojë" },
  { value: "500+", label: "Familje të Lumtura" },
  { value: "12", label: "Projekte të Përfunduara" },
  { value: "3", label: "Projekte Aktive" },
];

function statusColor(status) {
  if (status === "E shitur") return "bg-green-600";
  if (status === "Aktiv") return "bg-blue-500";
  return "bg-amber-500";
}

function ContactForm() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");
  const [formData, setFormData] = useState({ name: "", email: "", project: "", message: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setStatus("sending");
    try {
      // Calls the Node.js/Express backend in src/server.js
      // To run it: npm run server
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          project: formData.project,
          message: formData.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        setFormData({ name: "", email: "", project: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white shadow-lg p-8 flex flex-col items-center justify-center gap-4 min-h-[420px] text-center"
      >
        <CheckCircle size={56} className="text-[#0a1f44]" />
        <h3 className="text-[#0a1f44] text-2xl" style={{ fontWeight: 700 }}>Mesazhi u Dërgua!</h3>
        <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
          Faleminderit për kontaktin tuaj. Ekipi ynë do t'ju kthejë përgjigje brenda 24 orësh.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 border border-[#0a1f44] text-[#0a1f44] px-6 py-2 text-xs uppercase tracking-widest hover:bg-[#0a1f44] hover:text-white transition-colors"
          style={{ fontWeight: 600 }}
        >
          Dërgo Tjetër
        </button>
      </motion.div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="bg-white shadow-lg p-8 flex flex-col gap-5">
      <div>
        <label className="block text-[#0a1f44] text-sm uppercase tracking-wider mb-2" style={{ fontWeight: 600 }}>
          Emri & Mbiemri *
        </label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData((f) => ({ ...f, name: e.target.value }))}
          placeholder="p.sh. Artan Krasniqi"
          className="w-full border border-gray-200 px-4 py-3 text-gray-800 focus:outline-none focus:border-[#0a1f44] transition-colors"
        />
      </div>
      <div>
        <label className="block text-[#0a1f44] text-sm uppercase tracking-wider mb-2" style={{ fontWeight: 600 }}>
          Email *
        </label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData((f) => ({ ...f, email: e.target.value }))}
          placeholder="email@adresa.com"
          className="w-full border border-gray-200 px-4 py-3 text-gray-800 focus:outline-none focus:border-[#0a1f44] transition-colors"
        />
      </div>
      <div>
        <label className="block text-[#0a1f44] text-sm uppercase tracking-wider mb-2" style={{ fontWeight: 600 }}>
          Projekti i Interesit
        </label>
        <select
          value={formData.project}
          onChange={(e) => setFormData((f) => ({ ...f, project: e.target.value }))}
          className="w-full border border-gray-200 px-4 py-3 text-gray-700 focus:outline-none focus:border-[#0a1f44] transition-colors bg-white"
        >
          <option value="">Zgjidhni projektin...</option>
          <option>London Residence I</option>
          <option>London Residence II</option>
          <option>London Towers</option>
        </select>
      </div>
      <div>
        <label className="block text-[#0a1f44] text-sm uppercase tracking-wider mb-2" style={{ fontWeight: 600 }}>
          Mesazhi *
        </label>
        <textarea
          rows={4}
          required
          value={formData.message}
          onChange={(e) => setFormData((f) => ({ ...f, message: e.target.value }))}
          placeholder="Si mund t'ju ndihmojmë?"
          className="w-full border border-gray-200 px-4 py-3 text-gray-800 focus:outline-none focus:border-[#0a1f44] transition-colors resize-none"
        />
      </div>
      {status === "error" && (
        <p className="text-red-500 text-xs">Diçka shkoi gabim. Ju lutemi provoni përsëri.</p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-[#0a1f44] text-white py-3 uppercase tracking-widest text-sm hover:bg-[#0d2a5c] transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
        style={{ fontWeight: 600 }}
      >
        {status === "sending" ? (
          <><Loader size={15} className="animate-spin" /> Duke dërguar...</>
        ) : "Dërgo Mesazhin"}
      </button>
      <p className="text-gray-400 text-xs text-center">
        * Fusha të detyrueshme
      </p>
    </form>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a1f44] shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <Building2 className="text-white" size={28} />
            <span className="text-white tracking-widest uppercase font-light text-xl">
              London <span className="font-semibold">Ltd</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white transition-colors tracking-wide text-sm uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#0a1f44] border-t border-white/10 px-6 pb-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-white/80 hover:text-white py-3 text-sm uppercase tracking-wide border-b border-white/10 last:border-0"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1644175616886-a7644f85fe7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQcmlzdGluYSUyMEtvc292byUyMGNpdHklMjBza3lsaW5lJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc4MDg2MjMxNHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Prishtinë Panoramë"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0a1f44]/75" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white/60 uppercase tracking-[0.3em] text-sm mb-4"
          >
            Prishtinë, Kosovë
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-white text-5xl md:text-7xl tracking-tight mb-6"
            style={{ fontWeight: 300 }}
          >
            Ndërtojmë <span style={{ fontWeight: 700 }}>të ardhmen</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-white/75 text-lg md:text-xl mb-10 leading-relaxed"
          >
            Kompania e ndërtimit me mbi 15 vjet eksperiencë në Kosovë.<br />
            Cilësi. Besueshmëri. Ekselencë.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#banesat"
              className="bg-white text-[#0a1f44] px-8 py-3 uppercase tracking-widest text-sm hover:bg-white/90 transition-colors"
              style={{ fontWeight: 600 }}
            >
              Shiko Banesat
            </a>
            <a
              href="#kontakt"
              className="border border-white text-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-white/10 transition-colors"
            >
              Na Kontaktoni
            </a>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <a href="#rreth-nesh" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce">
          <ChevronDown size={28} />
        </a>
      </section>

      {/* STATS BAR */}
      <section className="bg-[#0a1f44] py-10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="text-white text-4xl mb-1" style={{ fontWeight: 700 }}>{s.value}</div>
              <div className="text-white/60 uppercase tracking-wider text-xs">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="rreth-nesh" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#0a1f44] uppercase tracking-[0.25em] text-xs mb-4" style={{ fontWeight: 600 }}>
              Rreth Nesh
            </p>
            <h2 className="text-[#0a1f44] text-4xl md:text-5xl mb-6 leading-tight" style={{ fontWeight: 300 }}>
              Një histori <span style={{ fontWeight: 700 }}>besimi</span> dhe<br />
              <span style={{ fontWeight: 700 }}>cilësie</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              London Ltd u themelua në vitin 2008 me një vizion të qartë: t'u ofrojë familjeve kosovare shtëpi të cilësisë europiane me çmime të arsyeshme. Sot jemi një nga kompanitë kryesore të ndërtimit në Prishtinë, me mbi 500 familje që banojnë në projektet tona.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Çdo projekt që realizojmë i sjellim standardet më të larta të inxhinierisë, materialeve të certifikuara dhe dizajnit bashkëkohor. Nga themeli deri te çelësi — ne jemi aty.
            </p>
            <div className="flex flex-col gap-3">
              {[
                "Materiale të certifikuara europiane",
                "Ekip i kualifikuar profesionistësh",
                "Garanci 5 vjeçare për çdo projekt",
                "Mbështetje pas shitjes gjatë gjithë kohës",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-[#0a1f44] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1564078516393-cf04bd966897?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvciUyMG1vZGVybiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzgwNzk4Mjg4fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Apartament modern"
              className="w-full h-[520px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-[#0a1f44] text-white p-6 hidden md:block">
              <div className="text-3xl mb-1" style={{ fontWeight: 700 }}>15+</div>
              <div className="text-white/70 text-sm uppercase tracking-wider">Vjet Eksperiencë</div>
            </div>
          </div>
        </div>
      </section>

      {/* RESIDENCES */}
      <section id="banesat" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#0a1f44] uppercase tracking-[0.25em] text-xs mb-4" style={{ fontWeight: 600 }}>
              Projektet Tona
            </p>
            <h2 className="text-[#0a1f44] text-4xl md:text-5xl" style={{ fontWeight: 300 }}>
              Banesat <span style={{ fontWeight: 700 }}>Tona</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {RESIDENCES.map((r, i) => (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white shadow-lg overflow-hidden group"
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={r.image}
                    alt={r.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className={`absolute top-4 right-4 text-white text-xs px-3 py-1 uppercase tracking-wider ${statusColor(r.status)}`}>
                    {r.status}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-[#0a1f44] text-xl mb-1" style={{ fontWeight: 700 }}>{r.name}</h3>
                  <div className="flex items-center gap-1 text-gray-500 text-sm mb-3">
                    <MapPin size={13} />
                    <span>{r.location}</span>
                    <span className="mx-2">·</span>
                    <Building2 size={13} />
                    <span>{r.units}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERIOR SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1646987916641-1f3c8992daa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvciUyMG1vZGVybiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzgwNzk4Mjg4fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Interior"
              className="w-full h-64 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1568369366985-373beced16ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBsdXh1cnklMjBhcGFydG1lbnQlMjJidWlsZGluZyUyMEJhbGthbnMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzgwODYyMzA5fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Building"
              className="w-full h-64 object-cover mt-8"
            />
            <img
              src="https://images.unsplash.com/photo-1699239116624-85268dce7377?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvciUyMG1vZGVybiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzgwNzk4Mjg4fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Interior 2"
              className="w-full h-64 object-cover -mt-8 col-span-2"
            />
          </div>
          <div>
            <p className="text-[#0a1f44] uppercase tracking-[0.25em] text-xs mb-4" style={{ fontWeight: 600 }}>
              Dizajni Ynë
            </p>
            <h2 className="text-[#0a1f44] text-4xl mb-6 leading-tight" style={{ fontWeight: 300 }}>
              Çdo detaj<br /><span style={{ fontWeight: 700 }}>ka rëndësi</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Interieret tona projektohen nga arkitektë me eksperiencë ndërkombëtare. Nga dyshemeja deri te tavani, çdo zgjedhje materiali bëhet me kujdes dhe pasion — sepse shtëpia juaj meriton të jetë e përsosur.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Ofrojmë mundësinë e personalizimit të apartamentit tuaj para dorëzimit. Zgjidhni ngjyrat, materialet dhe opsionet e brendshme sipas dëshirës tuaj.
            </p>
          </div>
        </div>
      </section>

      {/* NIGHT CITY BANNER */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1638874202640-8f5ff48d5acc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxQcmlzdGluYSUyMEtvc292byUyMGNpdHklMjBza3lsaW5lJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc4MDg2MjMxNHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Prishtinë"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0a1f44]/80" />
        <div className="relative z-10 text-center px-6">
          <h2 className="text-white text-3xl md:text-4xl mb-4" style={{ fontWeight: 300 }}>
            Gati të bëheni <span style={{ fontWeight: 700 }}>fqinj tanë?</span>
          </h2>
          <a
            href="#kontakt"
            className="inline-block bg-white text-[#0a1f44] px-8 py-3 uppercase tracking-widest text-sm mt-2 hover:bg-white/90 transition-colors"
            style={{ fontWeight: 600 }}
          >
            Rezervoni Tani
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="kontakt" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-[#0a1f44] uppercase tracking-[0.25em] text-xs mb-4" style={{ fontWeight: 600 }}>
              Na Kontaktoni
            </p>
            <h2 className="text-[#0a1f44] text-4xl mb-6" style={{ fontWeight: 300 }}>
              Jemi këtu <span style={{ fontWeight: 700 }}>për ju</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-10">
              Na shkruani ose vizitoni zyrën tonë. Ekipi ynë i shitjeve është i disponueshëm 6 ditë në javë për t'ju ndihmuar të gjeni shtëpinë tuaj ideale.
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#0a1f44] flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-[#0a1f44] mb-1" style={{ fontWeight: 600 }}>Adresa</div>
                  <div className="text-gray-600">Rr. Agim Ramadani Nr. 24<br />10000 Prishtinë, Kosovë</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#0a1f44] flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-[#0a1f44] mb-1" style={{ fontWeight: 600 }}>Telefoni</div>
                  <div className="text-gray-600">+383 44 123 456<br />+383 38 789 012</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#0a1f44] flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-[#0a1f44] mb-1" style={{ fontWeight: 600 }}>Email</div>
                  <div className="text-gray-600">info@londonltd.com<br />shitje@londonltd.com</div>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0a1f44] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 size={22} />
              <span className="tracking-widest uppercase text-lg" style={{ fontWeight: 300 }}>
                London <span style={{ fontWeight: 700 }}>Ltd</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Ndërtim i cilësisë më të lartë në Prishtinë, Kosovë. Nga viti 2008 — me dashuri dhe profesionalizëm.
            </p>
          </div>
          <div>
            <div className="text-white/40 uppercase tracking-widest text-xs mb-4">Navigimi</div>
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="text-white/70 hover:text-white text-sm transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="text-white/40 uppercase tracking-widest text-xs mb-4">Kontakt</div>
            <div className="flex flex-col gap-2 text-white/70 text-sm">
              <span>Rr. Agim Ramadani Nr. 24, Prishtinë</span>
              <span>+383 44 123 456</span>
              <span>info@londonltd.com</span>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-white/40 text-xs">
          <span>© 2026 London Ltd. Të gjitha të drejtat e rezervuara.</span>
          <span>Prishtinë, Kosovë</span>
        </div>
      </footer>
    </div>
  );
}
