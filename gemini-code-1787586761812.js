import React, { useState, useEffect, useRef } from "https://esm.sh/react@18";
import { createRoot } from "https://esm.sh/react-dom@18/client";

// ==========================================================
// IMAGE PATHS FOR GITHUB REPO
// (Apni images ko 'images' folder mein daal kar yahan naam badlein)
// ==========================================================
const LOGO_IMAGE = "images/logo.png";          // Line 12
const PARTNER_1_IMG = "images/bhupatdan.jpg";  // Line 15 (Bhupatdan Gadhavi)
const PARTNER_2_IMG = "images/ila.jpg";        // Line 18 (Ila Gadhavi)

const Se = [
  { id: "hero", label: "PAGE 1: HERO", short: "Hero" },
  { id: "trust", label: "PAGE 2: TRUST METRICS", short: "Trust" },
  { id: "about", label: "PAGE 3: ABOUT FIRM", short: "About" },
  { id: "practice", label: "PAGE 4: PRACTICE PILLARS", short: "Practice" },
  { id: "judicial", label: "PAGE 5: JUDICIAL PRESENCE", short: "Forums" },
  { id: "clients", label: "PAGE 6: CLIENTS", short: "Clients" },
  { id: "contact", label: "PAGE 7: CONTACT", short: "Contact" }
];

const Jq = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About Firm" },
  { id: "practice", label: "Practice Areas" },
  { id: "judicial", label: "Forums" },
  { id: "clients", label: "Clients" },
  { id: "contact", label: "Contact" }
];

const P1 = [
  { title: "Banking, NBFC & Finance", desc: "Institutional counsel for DRT, SARFAESI, IBC recovery, debt restructuring and bank panel litigation with precision drafting and high-court strategy.", iconPath: "M3 21h18M3 7v14M21 7v14M6 7V4h12v3M9 10h6M9 14h6M9 18h6" },
  { title: "Civil, Property & Family", desc: "Title verification, partition, succession, injunction suits, matrimonial and custody matters — specialist civil and family practice before City Civil & High Court.", iconPath: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z M9 22V12h6v10" },
  { title: "Insurance, Reclaim & RERA", desc: "MACT, insurance claims, reclaim, corporate insurance disputes and RERA — structured settlements, tribunal advocacy and compliance advisory.", iconPath: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z M9 12l2 2 4-4" }
];

function App() {
  const [activeSec, setActiveSec] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState(null);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const topPos = el.getBoundingClientRect().top + window.scrollY - 88;
      window.scrollTo({ top: topPos, behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFBFC] text-[#0A1931] font-sans antialiased">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#0A1931]/10">
        <div className="max-w-[1280px] mx-auto px-6 h-[80px] flex items-center justify-between">
          <button onClick={() => scrollToSection("hero")} className="flex items-center gap-3 text-left">
            {/* IMAGE 1 LOCATION: LOGO */}
            <img src={LOGO_IMAGE} alt="Gadhavi Legal Associates" className="h-[50px] w-auto object-contain" />
            <span className="flex flex-col leading-tight">
              <span className="text-[15px] font-black uppercase text-[#0A1931]">GADHAVI LEGAL</span>
              <span className="text-[15px] font-black uppercase text-[#0A1931]">ASSOCIATES</span>
            </span>
          </button>
          
          <nav className="hidden md:flex items-center gap-8 text-[13px] font-semibold text-[#0A1931]/70">
            {Jq.map((item) => (
              <button key={item.id} onClick={() => scrollToSection(item.id)} className={`hover:text-[#0A1931] transition ${activeSec === item.id ? "text-[#D4AF37] font-bold" : ""}`}>
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="bg-[#0A1931] text-white py-28 lg:py-36 px-6 relative overflow-hidden grain">
        <div className="max-w-[1280px] mx-auto relative z-10">
          <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest bg-[#D4AF37]/10 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/20">
            Established 2004 • Ahmedabad, Gujarat
          </span>
          <h1 className="text-4xl lg:text-7xl font-black mt-6 tracking-tight">
            Gadhavi Legal <span className="text-[#D4AF37]">Associates LLP</span>
          </h1>
          <p className="text-white/70 text-lg mt-4 max-w-2xl font-light">
            Advocates & Legal Advisors — Institutional Panel Counsel for Banking, NBFC, Finance, Insurance, Civil, and Family Matters.
          </p>
          <div className="mt-8 flex gap-4">
            <button onClick={() => scrollToSection("contact")} className="bg-[#D4AF37] text-[#0A1931] font-bold px-7 py-3 rounded-lg hover:bg-[#e5c15a] transition">
              Empanelment Enquiry →
            </button>
            <a href="https://wa.me/919726659090" target="_blank" rel="noopener noreferrer" className="border border-white/20 text-white font-semibold px-7 py-3 rounded-lg hover:bg-white/10 transition">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* About Firm Section */}
      <section id="about" className="py-24 bg-white px-6">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-2">About the Firm</h2>
            <h3 className="text-3xl lg:text-4xl font-black text-[#0A1931] mb-6">Rooted in Integrity, Driven by Legal Precision.</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Founded in 2004 by seasoned practitioners <strong>Bhupatdan Gadhavi & Ila Gadhavi</strong>, our firm offers comprehensive litigation and advisory services across High Courts, Civil Courts, and Tribunals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* IMAGE 2 LOCATION: PARTNER 1 */}
            <div className="bg-[#FAFBFC] p-4 rounded-xl border border-gray-200 shadow-sm text-center">
              <img src={PARTNER_1_IMG} alt="Bhupatdan Gadhavi" className="w-full h-56 object-cover rounded-lg mb-4 object-top" />
              <h4 className="font-bold text-[#0A1931]">Bhupatdan Gadhavi</h4>
              <p className="text-xs text-[#D4AF37] font-semibold mt-1">Managing Partner (G/81/2004)</p>
            </div>

            {/* IMAGE 3 LOCATION: PARTNER 2 */}
            <div className="bg-[#FAFBFC] p-4 rounded-xl border border-gray-200 shadow-sm text-center">
              <img src={PARTNER_2_IMG} alt="Ila Gadhavi" className="w-full h-56 object-cover rounded-lg mb-4 object-top" />
              <h4 className="font-bold text-[#0A1931]">Ila Gadhavi</h4>
              <p className="text-xs text-[#D4AF37] font-semibold mt-1">Partner & Banking Expert</p>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Pillars */}
      <section id="practice" className="py-24 bg-[#FAFBFC] px-6 border-t border-gray-200">
        <div className="max-w-[1280px] mx-auto text-center mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Core Competencies</h2>
          <h3 className="text-3xl font-black text-[#0A1931]">Practice Pillars</h3>
        </div>
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {P1.map((p, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
              <h4 className="text-xl font-black text-[#0A1931] mb-3">{p.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="bg-[#050D1F] text-white py-20 px-6">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h4 className="text-[#D4AF37] font-bold uppercase tracking-wider text-xs mb-4">Court Office</h4>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Gujarat High Court Complex, S.G. Highway, Ahmedabad – 380060
            </p>
            <p className="text-gray-400 text-sm">Phone: <strong className="text-white">+91 9726659090</strong></p>
            <p className="text-gray-400 text-sm">Email: helpdesk@gadhavilegalassociates.com</p>
          </div>
          <div>
            <h4 className="text-[#D4AF37] font-bold uppercase tracking-wider text-xs mb-4">Quick Enquiry</h4>
            <form onSubmit={(e) => { e.preventDefault(); alert("Enquiry submitted successfully!"); }} className="space-y-4">
              <input type="text" placeholder="Your Name" required className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-[#D4AF37]" />
              <input type="email" placeholder="Email Address" required className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-[#D4AF37]" />
              <textarea placeholder="Your Message" rows="3" required className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-[#D4AF37]"></textarea>
              <button type="submit" className="w-full bg-[#D4AF37] text-[#0A1931] font-bold py-3 rounded-lg hover:bg-[#e5c15a] transition">Send Message</button>
            </form>
          </div>
        </div>
        <div className="max-w-[1280px] mx-auto mt-16 pt-8 border-t border-white/10 text-center text-xs text-gray-500">
          © 2026 Gadhavi Legal Associates LLP. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);