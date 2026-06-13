"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaBars,
  FaFacebookF,
  FaGlobe,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaTimes,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FiCheckCircle, FiMail } from "react-icons/fi";

const navLinks = [
  { label: "Home", href: "/#home", key: "home" },
  { label: "ABOUT", href: "/#about", key: "about" },
  { label: "TEAM", href: "/#team", key: "team" },
  { label: "Courses", href: "/#course", key: "courses" },
  { label: "Blogs", href: "/#blog", key: "blogs" },
  { label: "FAQ", href: "/#faq", key: "faq" },
  { label: "Events", href: "/events", key: "events" },
];

export function Navbar({ active = "home" }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <nav className="container-pad flex h-[70px] items-center justify-between">
        <a href="/#home" className="flex items-center gap-2" aria-label="Langlo home">
          <img src="/images/logo.png" alt="Langlo" className="h-10 w-auto object-contain" />
        </a>
        <div className="hidden items-center gap-7 text-[13px] font-semibold uppercase text-brand-navy md:flex">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className={
                active === link.key ? "text-brand-pink" : "transition hover:text-brand-teal"
              }
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-[12px] normal-case">
            <span className="text-base" aria-hidden="true">
              GB
            </span>
            <span>EN</span>
          </div>
        </div>
        <button
          aria-label="Toggle menu"
          className="grid h-10 w-10 place-items-center rounded-full bg-brand-mint text-brand-navy md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-slate-100 bg-white md:hidden"
          >
            <div className="container-pad flex flex-col gap-4 py-5 text-sm font-semibold uppercase text-brand-navy">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className={active === link.key ? "text-brand-pink" : ""}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex w-fit items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-[12px] normal-case">
                <span>GB</span>
                <span>EN</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/919778453244"
      aria-label="WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-[#25d366] text-2xl text-white shadow-lg"
      animate={{ scale: [1, 1.08, 1] }}
      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
    >
      <FaWhatsapp />
    </motion.a>
  );
}

export function Footer() {
  return (
    <footer className="bg-black py-12 text-white">
      <div className="container-pad grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1.1fr_1.1fr]">
        <div>
          <img src="/images/logo.png" alt="Langlo" className="h-12 rounded bg-white object-contain p-1" />
          <p className="mt-5 max-w-[320px] text-sm leading-7 text-white/70">
            Langlo is a career-oriented language academy focused on practical communication and
            global learning.
          </p>
          <p className="mt-6 text-xs font-bold uppercase">Get in Touch</p>
          <div className="mt-3 flex gap-2">
            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube].map((Icon, index) => (
              <span
                key={index}
                className="grid h-8 w-8 place-items-center rounded-full bg-brand-green text-black"
              >
                <Icon />
              </span>
            ))}
          </div>
        </div>
        <FooterLinks title="Quick Links" items={["About Us", "Course", "F&Q", "Team", "Contact"]} />
        <FooterLinks
          title="Courses Category"
          items={["Diploma in Communicative Arabic", "Translation Courses", "Professional Spoken Arabic"]}
        />
        <div>
          <h3 className="text-sm font-black">Address & Contact</h3>
          <div className="mt-5 space-y-4 text-sm text-white/70">
            <p className="flex gap-3">
              <FaGlobe className="mt-1 text-brand-green" /> Calicut.India
            </p>
            <p className="flex gap-3">
              <FaPhoneAlt className="mt-1 text-brand-green" /> +91 9778453244 / +91 9605773955
            </p>
            <p className="flex gap-3">
              <FiMail className="mt-1 text-brand-green" /> langloacademy@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className="container-pad mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/50">
        Copyright © 2026 Langlo Academy. All Rights Reserved.
      </div>
      <FloatingWhatsApp />
    </footer>
  );
}

function FooterLinks({ title, items }) {
  return (
    <div>
      <h3 className="text-sm font-black">{title}</h3>
      <ul className="mt-5 space-y-3 text-sm text-white/70">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <FiCheckCircle className="text-brand-green" /> {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
