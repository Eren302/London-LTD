import { useState, useRef } from "react";
import { Menu, X, Phone, Mail, MapPin, Building2, ChevronDown, ChevronLeft, ChevronRight, CheckCircle, Loader, Star } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import Image1 from "../images/Image1.jpg";
import Image2 from "../images/Image2.jpg";
import Image3 from "../images/Image3.jpg";
import Image4 from "../images/Image4.jpg";
import Image5 from "../images/Image5.jpg";
import Image6 from "../images/Image6.jpg";
import Image7 from "../images/Image7.jpg";
import Image8 from "../images/Image8.jpg";
import Image9 from "../images/Image9.jpg";
import Image10 from "../images/Image10.jpg";
import Image11 from "../images/Image11.jpg";
import Image12 from "../images/Image12.jpg";
import Image13 from "../images/Image13.jpg";
import Image14 from "../images/Image14.jpg";
import Logo from "../images/logo.jpg";

const NAV_LINKS = [
  { label: "Rreth Nesh", href: "#rreth-nesh" },
  { label: "Ndërtimet Tona", href: "#ndertimet" },
  { label: "Vlerësimet", href: "#vleresimet" },
  { label: "Na Kontaktoni", href: "#kontakt" },
];

const STATS = [
  { value: "15+", label: "Vjet Përvojë" },
  { value: "500+", label: "Familje të Lumtura" },
  { value: "12", label: "Projekte të Përfunduara" },
  { value: "3", label: "Projekte Aktive" },
];

const REVIEWS = [
  {
    id: 1,
    name: "Valon Krasniqi",
    role: "Pronar në London Residence I",
    initials: "VK",
    rating: 5,
    title: "Cilësi e jashtëzakonshme",
    comment: "Përvoja me London Ltd ka qenë e jashtëzakonshme. Cilësia e ndërtimit është e standardit europian dhe izolimi akustik është i përsosur. Një investim që ia ka vlejtur çdo cent.",
  },
  {
    id: 2,
    name: "Elena Berisha",
    role: "Pronare në London Residence II",
    initials: "EB",
    rating: 5,
    title: "Profesionalizëm i lartë",
    comment: "Profesionalizmi dhe përkushtimi ndaj detajeve na la pa fjalë. Që nga marrëveshja e parë e deri te pranimi i çelësave, çdo gjë ishte transparente dhe sipas afateve të premtuara.",
  },
  {
    id: 3,
    name: "Dr. Alban Mehmeti",
    role: "Blerës në London Towers",
    initials: "AM",
    rating: 5,
    title: "Përkushtim ndaj klientit",
    comment: "Si blerës i ri në London Towers, jam shumë i kënaqur me bashkëpunimin. Komunikimi me ekipin e shitjes është i shkëlqyer dhe mundësia për të personalizuar ndarjet e brendshme ishte një avantazh i madh.",
  },
];

function ContactForm() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");
  const [formData, setFormData] = useState({ name: "", email: "", project: "", message: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setStatus("sending");
    try {
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
          className="w-full border border-gray-200 px-4 py-3 text-gray-800 focus:outline-none focus:border-[#0a1f44] focus:ring-2 focus:ring-[#0a1f44]/10 transition-all duration-200"
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
          className="w-full border border-gray-200 px-4 py-3 text-gray-800 focus:outline-none focus:border-[#0a1f44] focus:ring-2 focus:ring-[#0a1f44]/10 transition-all duration-200"
        />
      </div>
      <div>
        <label className="block text-[#0a1f44] text-sm uppercase tracking-wider mb-2" style={{ fontWeight: 600 }}>
          Projekti i Interesit
        </label>
        <select
          value={formData.project}
          onChange={(e) => setFormData((f) => ({ ...f, project: e.target.value }))}
          className="w-full border border-gray-200 px-4 py-3 text-gray-700 focus:outline-none focus:border-[#0a1f44] focus:ring-2 focus:ring-[#0a1f44]/10 transition-all duration-200 bg-white"
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
          className="w-full border border-gray-200 px-4 py-3 text-gray-800 focus:outline-none focus:border-[#0a1f44] focus:ring-2 focus:ring-[#0a1f44]/10 transition-all duration-200 resize-none"
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
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  const towerImages = [
    Image1, Image2, Image3, Image4, Image5,
    Image6, Image7, Image8, Image9, Image10,
    Image11, Image12, Image13, Image14
  ];

  function nextImage() {
    setCurrentImageIdx((prev) => (prev + 1) % towerImages.length);
  }

  function prevImage() {
    setCurrentImageIdx((prev) => (prev - 1 + towerImages.length) % towerImages.length);
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a1f44] shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <img src={Logo} alt="London Ltd Logo" className="h-8 w-auto object-contain rounded-sm" />
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
          alt="Mitrovicë Panoramë"
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
            Mitrovicë, Kosovë
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
              href="#ndertimet"
              className="bg-white text-[#0a1f44] px-8 py-3 uppercase tracking-widest text-sm hover:bg-white/90 transition-colors"
              style={{ fontWeight: 600 }}
            >
              Shiko Ndërtimet
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
              London Ltd u themelua në vitin 2008 me një vizion të qartë: t'u ofrojë familjeve kosovare shtëpi të cilësisë europiane me çmime të arsyeshme. Sot jemi një nga kompanitë kryesore të ndërtimit në Mitrovicë, me mbi 500 familje që banojnë në projektet tona.
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

      {/* RESIDENCES (Ndërtimet Tona) */}
      <section id="ndertimet" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#0a1f44] uppercase tracking-[0.25em] text-xs mb-4" style={{ fontWeight: 600 }}>
              Projektet Aktive
            </p>
            <h2 className="text-[#0a1f44] text-4xl md:text-5xl" style={{ fontWeight: 300 }}>
              Ndërtimet <span style={{ fontWeight: 700 }}>Tona</span>
            </h2>
          </div>

          {/* SINGLE TOWER SHOWCASE WITH CAROUSEL */}
          <div className="grid md:grid-cols-12 gap-0 bg-white shadow-xl overflow-hidden border border-gray-100">
            {/* CAROUSEL COLUMN */}
            <div className="md:col-span-7 relative h-[450px] md:h-[550px] overflow-hidden group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIdx}
                  src={towerImages[currentImageIdx]}
                  alt={`London Towers Image ${currentImageIdx + 1}`}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* OVERLAY BADGE (Top Left) */}
              <span className="absolute top-6 left-6 text-xs px-3 py-1 font-semibold uppercase tracking-wider rounded-full backdrop-blur-md shadow-sm bg-amber-50 text-amber-700 border border-amber-200/60 z-10">
                Në ndërtim
              </span>

              {/* BRAND BADGE (Bottom Left - Covers Watermark) */}
              <div className="absolute bottom-0 left-0 bg-[#0a1f44] text-white/95 text-[10px] sm:text-xs px-4 py-2.5 font-semibold tracking-widest uppercase z-10 rounded-tr-lg border-t border-r border-white/10 flex items-center gap-2 shadow-lg">
                <img src={Logo} alt="Logo" className="h-4 w-auto object-contain rounded-sm" />
                <span>London Ltd</span>
              </div>

              {/* NAVIGATION BUTTONS */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#0a1f44]/80 hover:bg-[#0a1f44] text-white flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#0a1f44]/80 hover:bg-[#0a1f44] text-white flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
              >
                <ChevronRight size={20} />
              </button>

              {/* INDICATORS (DOTS) */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {towerImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIdx(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      currentImageIdx === idx ? "bg-white scale-125" : "bg-white/50 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* DESCRIPTION COLUMN */}
            <div className="md:col-span-5 p-8 md:p-12 flex flex-col justify-between">
              <div>
                <p className="text-[#0a1f44]/60 uppercase tracking-widest text-xs mb-2 font-semibold">
                  Projekt Rezidencial & Komercial
                </p>
                <h3 className="text-[#0a1f44] text-3xl md:text-4xl mb-4" style={{ fontWeight: 700 }}>
                  London Towers
                </h3>
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
                  <MapPin size={16} />
                  <span>Qendra e Mitrovicës</span>
                  <span className="mx-2">·</span>
                  <Building2 size={16} />
                  <span>120 njësi</span>
                </div>

                <div className="space-y-4 text-gray-600 text-sm leading-relaxed mb-8">
                  <p>
                    London Towers përfaqëson projektin tonë më ambicioz dhe modern në zemër të qytetit të Mitrovicës. Ky kompleks është projektuar për të ofruar standarde të larta dhe jetesë komode.
                  </p>
                  <p>
                    Çdo apartament karakterizohet nga hapësirat e bollshme, dritaret e mëdha që ofrojnë ndriçim natyral maksimal, dhe teknologjitë më të fundit të izolimit termik e akustik.
                  </p>
                  <p>
                    Kompleksi përfshin garazhe nëntokësore moderne, hapësira të dedikuara komerciale në katet përdhese, dhe qasje të shpejtë në shkollat, dyqanet dhe shërbimet kryesore të qytetit.
                  </p>
                </div>
              </div>

              {/* SPEC LIST */}
              <div className="border-t border-gray-100 pt-6">
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="block text-gray-400 uppercase tracking-wider mb-1">Statusi</span>
                    <span className="font-semibold text-[#0a1f44]">Në Ndërtim e Sipër</span>
                  </div>
                  <div>
                    <span className="block text-gray-400 uppercase tracking-wider mb-1">Dorëzimi</span>
                    <span className="font-semibold text-[#0a1f44]">Dhjetor 2027</span>
                  </div>
                </div>
              </div>
            </div>
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

      {/* REVIEWS SECTION */}
      <section id="vleresimet" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#0a1f44] uppercase tracking-[0.25em] text-xs mb-4" style={{ fontWeight: 600 }}>
              Vlerësimet e Klientëve
            </p>
            <h2 className="text-[#0a1f44] text-4xl md:text-5xl" style={{ fontWeight: 300 }}>
              Çfarë thonë <span style={{ fontWeight: 700 }}>klientët tanë</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {REVIEWS.map((rev, idx) => (
              <motion.div
                key={rev.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 shadow-md border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <h4 className="text-[#0a1f44] font-semibold text-lg mb-2">{rev.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                    "{rev.comment}"
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#0a1f44] to-[#1e3a8a] flex items-center justify-center text-white text-sm font-semibold shrink-0">
                    {rev.initials}
                  </div>
                  <div>
                    <div className="text-[#0a1f44] text-sm font-bold">{rev.name}</div>
                    <div className="text-gray-500 text-xs">{rev.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NIGHT CITY BANNER */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1638874202640-8f5ff48d5acc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxQcmlzdGluYSUyMEtvc292byUyMGNpdHklMjBza3lsaW5lJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc4MDg2MjMxNHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Mitrovicë"
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
      <section id="kontakt" className="py-24 px-6 bg-white">
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
                  <div className="text-gray-600">Rr. Mbretëresha Teutë Nr. 45<br />40000 Mitrovicë, Kosovë</div>
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
              <img src={Logo} alt="London Ltd Logo" className="h-7 w-auto object-contain rounded-sm" />
              <span className="tracking-widest uppercase text-lg" style={{ fontWeight: 300 }}>
                London <span style={{ fontWeight: 700 }}>Ltd</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Ndërtim i cilësisë më të lartë në Mitrovicë, Kosovë. Nga viti 2008 — me dashuri dhe profesionalizëm.
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
              <span>Rr. Mbretëresha Teutë, Mitrovicë</span>
              <span>+383 44 123 456</span>
              <span>info@londonltd.com</span>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-white/40 text-xs">
          <span>© 2026 London Ltd. Të gjitha të drejtat e rezervuara.</span>
          <span>Mitrovicë, Kosovë</span>
        </div>
      </footer>
    </div>
  );
}
