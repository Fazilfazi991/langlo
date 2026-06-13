"use client";

import { motion } from "framer-motion";
import { Footer, Navbar } from "../components/SiteChrome";
import { eventsData } from "../data/eventsData";

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -36 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 36 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

function EventsHero() {
  return (
    <section className="mt-[70px] overflow-hidden bg-white pb-[70px] pt-20">
      <div className="container-pad grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <h1 className="text-[46px] font-black leading-none text-brand-navy md:text-[58px]">
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
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.08 }}
        >
          <motion.div
            className="events-squiggle -left-7 bottom-4 hidden sm:block"
            initial={{ opacity: 0, rotate: 2 }}
            animate={{ opacity: 1, rotate: -4 }}
            transition={{ duration: 0.65, delay: 0.35 }}
          />
          <div className="h-[220px] overflow-hidden rounded-[999px] bg-slate-200 shadow-card sm:h-[260px]">
            <img
              src="/images/events/events-hero.jpg"
              alt="Langlo event"
              className="h-full w-full object-cover"
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
      className="event-poster mx-auto w-full max-w-[520px]"
    >
      <img
        src={event.image}
        alt={event.imageAlt}
        className="h-auto w-full rounded-md object-contain shadow-card"
      />
    </motion.div>
  );
  const text = (
    <motion.div variants={imageFirst ? fadeRight : fadeLeft} className="max-w-[590px]">
      <h2 className="text-[31px] font-black leading-[1.08] text-brand-navy md:text-[42px] xl:text-[46px]">
        {event.title}
      </h2>
      <div className="mt-7 space-y-5 text-[15px] leading-7 text-[#5F6472]">
        {event.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section
      className={`overflow-hidden bg-white ${
        index === eventsData.length - 1 ? "pb-24" : "pb-[90px]"
      }`}
    >
      <motion.div
        className="container-pad grid items-start gap-10 lg:grid-cols-2 lg:gap-[70px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
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
