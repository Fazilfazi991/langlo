"use client";

import { motion } from "framer-motion";
import { Footer, Navbar } from "../components/SiteChrome";
import { eventsData } from "../data/eventsData";

const smoothEase = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 42 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: smoothEase } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -42 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: smoothEase } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 42 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: smoothEase } },
};

function EventsHero() {
  return (
    <section className="mt-[70px] overflow-hidden bg-white pb-16 pt-20 md:pb-[76px]">
      <div className="container-pad grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <h1 className="text-[46px] font-black leading-none text-brand-navy md:text-[60px]">
            Events
          </h1>
          <div className="mt-5 flex items-center gap-3 text-sm font-bold">
            <a href="/#home" className="text-brand-pink">
              Home
            </a>
            <span className="text-slate-300">/</span>
            <span className="text-brand-navy">Events</span>
          </div>
        </motion.div>
        <motion.div
          className="relative justify-self-end lg:w-[620px]"
          initial={{ opacity: 0, scale: 0.92, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: smoothEase, delay: 0.08 }}
        >
          <motion.div
            className="events-squiggle -left-7 bottom-4 hidden sm:block"
            initial={{ opacity: 0, rotate: 2 }}
            animate={{ opacity: 1, rotate: -4 }}
            transition={{ duration: 0.65, delay: 0.35 }}
          />
          <div className="h-[220px] overflow-hidden rounded-[999px] bg-slate-100 shadow-card sm:h-[260px]">
            <img
              src="/images/events/events-hero.jpg"
              alt="Langlo event"
              className="h-full w-full object-cover object-center"
              loading="eager"
              decoding="async"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function EventFeatureSection({ event, index }) {
  const imageFirst = event.imagePosition === "left";
  const image = (
    <motion.div
      variants={imageFirst ? fadeLeft : fadeRight}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: smoothEase }}
      className="event-poster mx-auto w-full max-w-[500px] justify-self-center lg:max-w-[520px]"
    >
      <img
        src={event.image}
        alt={event.imageAlt}
        className="h-auto w-full rounded-md object-contain shadow-card"
        loading={index === 0 ? "eager" : "lazy"}
        decoding="async"
      />
    </motion.div>
  );
  const text = (
    <motion.div
      variants={imageFirst ? fadeRight : fadeLeft}
      className="max-w-[570px] self-center"
    >
      <h2 className="text-[30px] font-black leading-[1.08] text-brand-navy md:text-[40px] xl:text-[44px]">
        {event.title}
      </h2>
      <div className="mt-6 space-y-5 text-[15px] font-normal leading-7 text-[#5F6472] md:text-[16px] md:leading-8">
        {event.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section
      className={`overflow-hidden bg-white ${
        index === eventsData.length - 1 ? "pb-24" : "pb-[86px]"
      }`}
    >
      <motion.div
        className={`container-pad grid items-center gap-10 lg:gap-[72px] ${
          imageFirst
            ? "lg:grid-cols-[520px_minmax(0,1fr)]"
            : "lg:grid-cols-[minmax(0,1fr)_520px]"
        }`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.28 }}
        transition={{ staggerChildren: 0.12 }}
      >
        {imageFirst ? image : text}
        {imageFirst ? text : image}
      </motion.div>
    </section>
  );
}

export default function EventsPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar active="events" />
      <EventsHero />
      {eventsData.map((event, index) => (
        <EventFeatureSection key={event.title} event={event} index={index} />
      ))}
      <Footer />
    </main>
  );
}
