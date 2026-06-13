"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  FaBars,
  FaBookOpen,
  FaBullseye,
  FaChevronDown,
  FaFacebookF,
  FaGlobe,
  FaGraduationCap,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTimes,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FiArrowRight, FiCheckCircle, FiMail, FiMinus, FiPlus, FiStar, FiUsers, FiZap } from "react-icons/fi";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "TEAM", href: "#team" },
  { label: "Courses", href: "#course" },
  { label: "Blogs", href: "#blog" },
  { label: "FAQ", href: "#faq" },
  { label: "Events", href: "/events" },
];

const coursesData = [
  {
    category: "60+ Students",
    rating: "Rated 4.5 out of 5",
    title: "Diploma in Communicative Arabic",
    image: "/images/course-1.jpg",
    description:
      "Master Modern Standard Arabic and dialects while enhancing your reading and writing for academic and professional contexts.",
  },
  {
    category: "70+ Students",
    rating: "Rated 4.7 out of 5",
    title: "Translation Courses",
    image: "/images/course-2.jpg",
    description:
      "Gain expertise in English-Arabic and Arabic-English translation across legal, media, academic, and commercial fields.",
  },
  {
    category: "50+ Students",
    rating: "Rated 5 out of 5",
    title: "Professional Spoken Arabic",
    image: "/images/course-3.jpg",
    description:
      "Develop workplace-ready Arabic communication skills tailored for aviation, healthcare, business, and hospitality.",
  },
];

const learningPoints = [
  {
    title: "Language as a Global Advantage",
    text: "At Langlo, we turn language into your global advantage, opening doors to international careers, cross-cultural networks, and global opportunities.",
  },
  {
    title: "Outcome-Based Learning",
    text: "Every course is designed to deliver clear, measurable results learners can apply in conversations, academics, and careers.",
  },
  {
    title: "Interactive & Practical Training",
    text: "Move beyond textbooks with real-life conversations, workplace scenarios, and cultural insights that prepare you for the world.",
  },
  {
    title: "Expert Trainers",
    text: "Learn from professionals who connect classroom learning with real-world application and authentic language use.",
  },
  {
    title: "Technology-Powered Learning",
    text: "Smart resources and guided feedback make your progress faster, clearer, and more practical.",
  },
  {
    title: "Career-Focused Programs",
    text: "From spoken Arabic to advanced translation, Langlo programs are designed to make learners employable and confident.",
  },
];

const advisorData = [
  {
    name: "Mohamed Shabrawi Saadawi",
    role: "Advisory Board Member",
    detail: "Egyptian Journalist, Media Network, Qatar",
    image: "/images/advisor-1.png",
  },
  {
    name: "Hashim Mahmoud Hassan",
    role: "Advisory Board Member",
    detail: "Writer, State of Eritrea",
    image: "/images/advisor-2.png",
  },
  {
    name: "Saleh Shawky Hassan Goda",
    role: "Advisory Board Member",
    detail: "Director, Arabic Language Institute in Indonesia",
    image: "/images/advisor-3.png",
  },
];

const teamData = [
  {
    name: "Dr. Abbas K.P",
    role: "Brand Ambassador",
    image: "/images/team-1.jpg",
  },
  {
    name: "Mohammed Misbah M",
    role: "Managing Director / Founder",
    image: "/images/team-2.jpg",
  },
  {
    name: "Muhammed Swalih",
    role: "Co-founder",
    image: "/images/team-3.jpg",
  },
];

const partnerData = [
  {
    name: "Farook College",
    role: "Academic Partner",
    logo: "/images/partner-1.png",
  },
  {
    name: "Vision School of Aviation",
    role: "Academic Partner",
    logo: "/images/partner-2.png",
  },
];

const faqData = [
  {
    q: "Who can enroll in Langlo courses?",
    a: "Anyone with a passion for learning Arabic. We welcome students, working professionals, translators, and learners improving Arabic for academic, career, or personal growth.",
  },
  {
    q: "Do I need any prior knowledge of Arabic to join?",
    a: "No prior knowledge is required for beginner-level courses. You can start from scratch or continue from your current level.",
  },
  {
    q: "Are the courses available online?",
    a: "Yes. Langlo offers online live sessions, offline classes, and blended formats to suit your schedule and location.",
  },
  {
    q: "What is the difference between Fusha and Industrial Spoken Arabic?",
    a: "Fusha is used in academic, media, and formal settings, while Industrial Spoken Arabic is practical workplace communication for GCC industries.",
  },
  {
    q: "What kind of translation training do you provide?",
    a: "We offer practical training in general and specialized translation, including legal, medical, business, literary, document translation, and interpretation skills.",
  },
  {
    q: "Will I get a certificate after completing a course?",
    a: "Yes. All courses include completion certificates, and selected programs offer industry-recognized certifications.",
  },
];

const contactData = [
  { icon: <FaPhoneAlt />, text: "+91 9778453244 / +91 9605773955" },
  { icon: <FiMail />, text: "langloacademy@gmail.com" },
  { icon: <FaMapMarkerAlt />, text: "Calicut, India" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const imageSlideInLeft = {
  hidden: { opacity: 0, x: -280, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] },
  },
};

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function Navbar() {
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
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="Langlo" className="h-9 w-auto object-contain" />
        </a>
        <div className="hidden items-center gap-8 text-[13px] font-semibold uppercase text-brand-navy md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={
                link.label === "Home" ? "text-brand-pink" : "transition hover:text-brand-teal"
              }
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-[12px] normal-case">
            <span className="font-black text-brand-pink">GB</span>
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
                <a key={link.label} href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative mt-[70px] h-[520px] overflow-hidden md:h-[560px]">
      <motion.div
        className="absolute inset-0 bg-cover"
        style={{ backgroundImage: "url('/images/hero.jpg')", backgroundPosition: "72% center" }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{ duration: 14, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#093c4b]/90 via-[#123f50]/78 to-[#10172f]/48" />
      <div className="container-pad relative flex h-full items-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-[560px] text-white"
        >
          <motion.h1
            variants={fadeUp}
            className="text-[38px] font-black uppercase leading-[0.95] sm:text-[54px] md:text-[64px]"
          >
            Communicate
            <br />
            Beyond
            <br />
            Borders
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-4 text-xs font-bold uppercase">
            Learn languages with Langlo
          </motion.p>
          <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#course"
              className="rounded-full bg-brand-teal px-6 py-3 text-xs font-bold uppercase shadow-lg"
            >
              Our Courses
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#contact"
              className="rounded-full bg-brand-green px-6 py-3 text-xs font-bold uppercase shadow-lg"
            >
              Enroll Now
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  const icons = [
    { label: "Vision", icon: <FaBullseye />, color: "bg-brand-teal" },
    { label: "Academic", icon: <FaGraduationCap />, color: "bg-brand-green" },
    { label: "Innovation", icon: <FiZap />, color: "bg-brand-green" },
    { label: "Faculty", icon: <FiUsers />, color: "bg-brand-teal" },
  ];

  return (
    <section id="about" className="section-pad overflow-hidden bg-brand-blush">
      <div className="container-pad grid items-center gap-10 md:grid-cols-2">
        <motion.div
          className="relative min-h-[390px]"
          variants={imageSlideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="orange-swoosh bottom-14 left-10 opacity-90" />
          <img
            src="/images/student-about.png"
            alt="Langlo student"
            className="relative z-10 mx-auto max-h-[440px] object-contain"
            loading="lazy"
            decoding="async"
          />
        </motion.div>
        <Reveal>
          <p className="max-w-[610px] text-[15px] leading-7 text-slate-700">
            <strong className="text-brand-navy">Langlo</strong> is a career-oriented language
            academy dedicated to helping learners build practical communication skills for academic,
            professional, and international success. We provide outcome-based training in spoken
            fluency, translation, and professional language programs, empowering students and
            professionals to thrive in their careers across diverse industries.
          </p>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-8 grid max-w-[430px] grid-cols-2 gap-5"
          >
            {icons.map((item) => (
              <motion.div key={item.label} variants={fadeUp} className="flex items-center gap-3">
                <span
                  className={`grid h-10 w-10 place-items-center rounded-full text-white ${item.color}`}
                >
                  {item.icon}
                </span>
                <span className="text-sm font-bold text-brand-navy">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

function VisionMission() {
  const cards = [
    {
      title: "Our Vision",
      text: "Empowering individuals to connect across cultures, communicate with confidence, and succeed in their personal and professional lives through innovative, high-quality language learning experiences.",
    },
    {
      title: "Our Mission",
      text: "To transform language learning into a practical, interactive, and student-centered experience through expert guidance and real-world training.",
    },
  ];
  return (
    <section className="relative bg-white pb-24">
      <div
        className="absolute inset-x-0 top-0 h-[300px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/vision-bg.jpg')" }}
      >
        <div className="h-full bg-[#111541]/78" />
      </div>
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container-pad relative grid gap-6 pt-[138px] md:grid-cols-2"
      >
        {cards.map((card) => (
          <motion.article
            key={card.title}
            variants={fadeUp}
            whileHover={{ y: -8 }}
            className="rounded-md bg-white p-9 shadow-soft"
          >
            <span className="rounded-full bg-brand-mint px-4 py-2 text-xs font-bold text-brand-green">
              {card.title}
            </span>
            <p className="mt-6 text-[15px] leading-7 text-slate-700">{card.text}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

function CourseCard({ course }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-md bg-white shadow-card"
    >
      <div className="h-48 overflow-hidden">
        <img src={course.image} alt={course.title} className="image-zoom h-full w-full object-cover" />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between gap-3 text-[12px] font-bold text-brand-green">
          <span>{course.category}</span>
          <span className="flex items-center gap-1 text-amber-500">
            <FiStar /> {course.rating}
          </span>
        </div>
        <h3 className="mt-4 min-h-[52px] text-lg font-extrabold leading-tight text-brand-navy">
          {course.title}
        </h3>
        <p className="mt-3 min-h-[92px] text-sm leading-6 text-slate-600">{course.description}</p>
        <div className="mt-6 grid grid-cols-[1fr_auto_1fr] items-center gap-2 text-center">
          <a className="rounded-full bg-brand-teal px-4 py-2 text-xs font-bold text-white" href="#contact">
            Join now
          </a>
          <span className="text-xs font-bold text-slate-400">or</span>
          <a className="rounded-full bg-brand-green px-4 py-2 text-xs font-bold text-white" href="#course">
            Learn more
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function CoursesSection() {
  return (
    <section id="course" className="section-pad bg-brand-blush">
      <div className="container-pad">
        <Reveal className="text-center">
          <h2 className="text-3xl font-black text-brand-navy">Learn with us</h2>
          <p className="mt-3 text-sm text-slate-600">
            Build real-world language skills that empower your career and connect you globally.
          </p>
        </Reveal>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid gap-7 md:grid-cols-3"
        >
          {coursesData.map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function LearningExperience() {
  const [active, setActive] = useState(0);
  return (
    <section className="section-pad overflow-hidden bg-brand-blush pt-0">
      <div className="container-pad grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          className="relative min-h-[520px]"
          variants={imageSlideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="blue-swoosh left-4 top-4 opacity-95" />
          <img
            src="/images/student-learning.png"
            alt="Learning with Langlo"
            className="relative z-10 mx-auto mt-28 max-h-[390px] object-contain"
            loading="lazy"
            decoding="async"
          />
        </motion.div>
        <Reveal>
          <h2 className="max-w-[520px] text-3xl font-black leading-tight text-brand-navy md:text-4xl">
            Providing a
            <br />
            Transformative Learning
            <br />
            Experience
          </h2>
          <p className="mt-4 max-w-[620px] text-sm leading-6 text-slate-600">
            At Langlo, learning goes beyond the classroom. We ensure you gain practical skills and
            the confidence to succeed globally.
          </p>
          <div className="mt-8 space-y-3">
            {learningPoints.map((item, index) => (
              <div key={item.title} className="overflow-hidden rounded-md bg-white shadow-card">
                <button
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-extrabold text-brand-navy"
                  onClick={() => setActive(active === index ? -1 : index)}
                >
                  <span className="flex items-center gap-3">
                    <FiCheckCircle className="text-brand-teal" />
                    {item.title}
                  </span>
                  <FaChevronDown
                    className={`shrink-0 transition-transform ${active === index ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {active === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <p className="px-5 pb-5 text-sm leading-6 text-slate-600">{item.text}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CountUp({ value }) {
  const [count, setCount] = useState(0);
  const ref = useMemo(() => ({ current: null }), []);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const total = 42;
    const tick = () => {
      frame += 1;
      setCount(Math.round((value * frame) / total));
      if (frame < total) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return <span ref={ref}>{count}+</span>;
}

function StatsSection() {
  const stats = [
    { value: 10, label: "Years of Industry Experience" },
    { value: 400, label: "Successful Graduates" },
    { value: 20, label: "Expert Faculty Members" },
    { value: 15, label: "Partnerships & Collaborations" },
  ];
  return (
    <section className="bg-gradient-to-r from-brand-green via-[#52c0b3] to-brand-teal py-12 text-white">
      <div className="container-pad grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Reveal key={stat.label}>
            <div className="text-4xl font-black">
              <CountUp value={stat.value} />
            </div>
            <p className="mx-auto mt-2 max-w-[150px] text-sm font-bold leading-5">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Socials() {
  return (
    <div className="flex justify-center gap-2 text-xs text-brand-navy">
      {[FaFacebookF, FaLinkedinIn, FaYoutube].map((Icon, index) => (
        <span key={index} className="grid h-7 w-7 place-items-center rounded-full bg-brand-mint">
          <Icon />
        </span>
      ))}
    </div>
  );
}

function TeamSection() {
  return (
    <section id="team" className="section-pad bg-brand-blush">
      <div className="container-pad">
        <div className="grid gap-7 lg:grid-cols-[0.65fr_1.35fr]">
          <Reveal>
            <h2 className="text-3xl font-black leading-tight text-brand-navy">Meet Our Team</h2>
            <p className="mt-4 max-w-[260px] text-sm leading-6 text-slate-600">
              The passionate minds making language learning simple, engaging, and global.
            </p>
            <a
              href="#team"
              className="mt-6 inline-flex rounded-full bg-brand-green px-5 py-3 text-xs font-bold text-white"
            >
              More Members
            </a>
          </Reveal>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-5 md:grid-cols-3"
          >
            {advisorData.map((member) => (
              <motion.article key={member.name} variants={fadeUp} className="rounded-md bg-white p-4 shadow-card">
                <div className="h-56 overflow-hidden rounded bg-sky-100">
                  <img src={member.image} alt={member.name} className="h-full w-full object-cover object-top" />
                </div>
                <h3 className="mt-5 text-center text-sm font-extrabold text-brand-navy">{member.name}</h3>
                <p className="mt-2 text-center text-[12px] font-semibold text-brand-pink">{member.detail}</p>
                <p className="mt-2 text-center text-[11px] font-bold text-slate-500">{member.role}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-14 grid gap-7 md:grid-cols-3"
        >
          {teamData.map((member) => (
            <motion.article
              key={member.name}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="overflow-hidden rounded-md bg-white p-5 text-center shadow-card"
            >
              <div className="mx-auto aspect-square w-full max-w-[260px] overflow-hidden rounded bg-emerald-900">
                <img src={member.image} alt={member.name} className="h-full w-full object-cover object-top" />
              </div>
              <h3 className="mt-5 font-extrabold text-brand-navy">{member.name}</h3>
              <p className="mt-1 text-sm font-bold text-brand-teal">{member.role}</p>
              <div className="mt-4">
                <Socials />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function PartnerSection() {
  return (
    <section className="section-pad bg-slate-50">
      <Reveal className="container-pad">
        <div className="mx-auto max-w-[720px] rounded-lg bg-white p-8 text-center shadow-soft">
          <h2 className="text-2xl font-black text-brand-navy">Our Academic Partners</h2>
          <p className="mx-auto mt-3 max-w-[520px] text-sm leading-6 text-slate-600">
            Creating impactful collaborations that inspire learning, innovation, and future
            opportunities.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {partnerData.map((partner) => (
              <div key={partner.name} className="rounded-md bg-white p-6 shadow-card">
                <img src={partner.logo} alt={partner.name} className="mx-auto h-24 object-contain" />
                <h3 className="mt-4 font-extrabold text-brand-navy">{partner.name}</h3>
                <p className="mt-1 text-sm font-semibold text-slate-500">{partner.role}</p>
              </div>
            ))}
          </div>
          <p className="mt-7 text-xs font-semibold text-slate-500">
            Building trusted partnerships that support learners with quality education and real
            career growth.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

function BlogSection() {
  return (
    <section id="blog" className="section-pad bg-white">
      <div className="container-pad grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="text-xs font-black uppercase text-brand-pink">Blog Update</p>
          <h2 className="mt-3 text-3xl font-black text-brand-navy">Latest Update with Langlo</h2>
        </Reveal>
        <Reveal>
          <article className="grid overflow-hidden rounded-md bg-white shadow-card sm:grid-cols-[260px_1fr]">
            <div className="grid min-h-[170px] place-items-center bg-white p-4">
              <img src="/images/blog-1.jpg" alt="Arabic language update" className="max-h-[160px] w-full object-contain" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-black leading-tight text-brand-navy">
                Importance of Arabic for Non-Native Speakers
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Importance of Arabic for non-native speakers and its role in education, culture, and
                global communication.
              </p>
              <a href="#blog" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-teal">
                Read More <FiArrowRight />
              </a>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-24 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-45"
        style={{ backgroundImage: "url('/images/testimonial-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-[#101342]/78" />
      <div className="container-pad relative grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <p className="text-sm font-bold text-brand-green">Salman T</p>
          <p className="mt-5 max-w-[610px] text-lg font-semibold leading-8">
            "I joined Langlo to improve my business English, but I ended up discovering new
            strengths in communication and presentation skills I now use every day at work."
          </p>
          <p className="mt-4 text-sm font-bold text-white/75">Sales Executive</p>
        </Reveal>
        <Reveal>
          <div className="rounded-md bg-white p-9 text-brand-navy shadow-soft">
            <h2 className="text-3xl font-black leading-tight">Hear What Our Students Say.</h2>
            <p className="mt-5 text-sm leading-7 text-slate-600">
              At Langlo, we believe the best proof of our impact comes from the voices of our
              learners. Students gain confidence in conversation, exam preparation, and career-ready
              communication through practical training.
            </p>
            <div className="mt-5 flex gap-1 text-amber-400">
              {Array.from({ length: 5 }).map((_, index) => (
                <FiStar key={index} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FAQSection() {
  const [active, setActive] = useState(0);
  return (
    <section id="faq" className="section-pad bg-brand-blush">
      <div className="container-pad">
        <Reveal>
          <h2 className="text-3xl font-black text-brand-navy">Frequently Asked Questions</h2>
        </Reveal>
        <div className="mt-8 overflow-hidden rounded-md border border-slate-200 bg-white">
          {faqData.map((item, index) => (
            <div key={item.q} className="border-b border-slate-200 last:border-b-0">
              <button
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-bold text-brand-navy"
                onClick={() => setActive(active === index ? -1 : index)}
              >
                {item.q}
                {active === index ? <FiMinus /> : <FiPlus />}
              </button>
              <AnimatePresence initial={false}>
                {active === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <p className="px-5 pb-5 text-sm leading-6 text-slate-600">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="section-pad bg-brand-blush pt-0">
      <div className="container-pad grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <div className="rounded-md bg-white p-8 shadow-soft">
            <h3 className="text-xl font-black text-brand-navy">
              Have Questions? Contact Langlo Admissions Now!
            </h3>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a
                href="https://wa.me/919778453244"
                className="flex items-center justify-center gap-3 rounded-md bg-brand-green px-5 py-4 text-sm font-bold text-white"
              >
                <FaWhatsapp /> Whatsapp
              </a>
              <a
                href="tel:+919778453244"
                className="flex items-center justify-center gap-3 rounded-md bg-brand-teal px-5 py-4 text-sm font-bold text-white"
              >
                <FaPhoneAlt /> Call
              </a>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <h2 className="text-3xl font-black text-brand-navy">Get in Touch with Us Today!</h2>
          <p className="mt-5 max-w-[620px] text-sm leading-7 text-slate-600">
            Whether you are ready to enroll, have questions about our courses, or need help choosing
            the right program, our team is here to guide you.
          </p>
          <div className="mt-7 space-y-4">
            {contactData.map((item) => (
              <div key={item.text} className="flex items-center gap-4 rounded-md bg-white px-5 py-4 shadow-card">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-slate-900 text-white">
                  {item.icon}
                </span>
                <span className="text-sm font-bold text-slate-700">{item.text}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
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
              <span key={index} className="grid h-8 w-8 place-items-center rounded-full bg-brand-green text-black">
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
            <p className="flex gap-3"><FaGlobe className="mt-1 text-brand-green" /> Calicut.India</p>
            <p className="flex gap-3"><FaPhoneAlt className="mt-1 text-brand-green" /> +91 9778453244 / +91 9605773955</p>
            <p className="flex gap-3"><FiMail className="mt-1 text-brand-green" /> langloacademy@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="container-pad mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/50">
        Copyright (c) 2026 Langlo Academy. All Rights Reserved.
      </div>
      <a
        href="https://wa.me/919778453244"
        aria-label="WhatsApp"
        className="fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-[#25d366] text-2xl text-white shadow-lg"
      >
        <FaWhatsapp />
      </a>
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

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutSection />
      <VisionMission />
      <CoursesSection />
      <LearningExperience />
      <StatsSection />
      <TeamSection />
      <PartnerSection />
      <BlogSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
