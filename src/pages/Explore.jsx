// src/pages/Explore.jsx — single-file JSX (no external components)
// Uses Tailwind and a different animation style (clip-path reveal) from your Get Involved page.
// Images expected at @/assets/b1.webp, @/assets/b2.webp, @/assets/choir.webp

import { motion } from "framer-motion";

import b1 from "@/assets/b1.webp";
import b2 from "@/assets/b2.webp";
import choirImg from "@/assets/choir.webp";

// Reveal animation to use in variants
const reveal = {
  hidden: { opacity: 0, clipPath: "inset(0 0 100% 0 round 16px)" },
  show: (i = 0) => ({
    opacity: 1,
    clipPath: "inset(0 0 0% 0 round 16px)",
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.05 * i },
  }),
};

export const Explore = () => {
  return (
    <section id="explore" className="w-full px-4 py-30">
      <div className="mx-auto w-full max-w-5xl">
        {/* Heading */}
        <header className="text-center">
          <h1 className="font-quint text-3xl md:text-4xl font-semibold text-primary opacity-0 animate-fade-in-delay-1">Explore</h1>
          <p className="mt-2 font-poppins text-sm md:text-base text-foreground/80 opacity-0 animate-fade-in-delay-2">
            A quick look at Baptism, Youth Choir, and our Shelter Ministry.
          </p>
        </header>

        {/* Baptism Section */}
        <section id="baptism" className="mt-10">
          <div className="flex items-end justify-between">
            <h2 className="font-quint text-2xl md:text-3xl font-semibold">Baptism</h2>
            <span className="font-poppins text-xs md:text-sm text-foreground/60">2 photos</span>
          </div>
          <p className="mt-4 font-poppins text-sm md:text-[15px] text-foreground/80 text-justify">
            Then cometh Jesus from Galilee to Jordan unto John, to be baptized of him. But John forbad him, saying, I have need to be baptized of thee, and comest thou to me? And Jesus answering said unto him, Suffer it to be so now: 
            for thus it becometh us to fulfil all righteousness. Then he suffered him. And Jesus, when he was baptized, went up straightway out of the water: and, lo, the heavens were opened unto him, 
            and he saw the Spirit of God descending like a dove, and lighting upon him: and lo a voice from heaven, saying, This is my beloved Son, in whom I am well pleased. (Matthew 3:13-17 KJV)
          </p>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[b1, b2].map((src, i) => (
              <motion.figure
                key={i}
                custom={i}
                initial="hidden"
                whileInView="show"
                variants={reveal}
                className="relative aspect-[16/15] overflow-hidden rounded-2xl bg-muted/50"
              >
                <img
                  src={src}
                  alt={i === 0 ? "Baptism—moment 1" : "Baptism—moment 2"}
                  className="absolute inset-0 h-full w-full object-top object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 p-3 text-center">
                  <span className="inline-block rounded-full bg-background/70 px-3 py-1 text-xs font-poppins text-foreground/80 backdrop-blur">
                    Baptism {i + 1}
                  </span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </section>

        {/* Youth Choir Section */}
        <section id="youth" className="mt-20">
          <h2 className="font-quint text-2xl md:text-3xl font-semibold">Youth Choir</h2>
          <p className="mt-4 font-poppins text-sm md:text-[15px] text-foreground/80">
            The Youth Choir performs exclusively inside our church. Practices and programs are scheduled on 5th Sundays and during our yearly convention. 
            The choir gives young people an opportunity to grow, serve, and share their gifts with the congregation.
          </p>

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            className="mt-4 relative flex justify-center"
          >
            <img
            src={choirImg}
            alt="Youth Choir performing inside the church"
            className="max-w-md w-full rounded-2xl border bg-background object-contain"
            />
            <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 p-3 text-center">
              <span className="inline-block rounded-full bg-background/70 px-3 py-1 text-xs font-poppins text-foreground/80 backdrop-blur">
                Youth Choir
              </span>
            </figcaption>
          </motion.div>
        </section>

        {/* Shelter Section*/}
        <section id="shelter" className="mt-20">
          <h2 className="font-quint text-2xl md:text-3xl font-semibold">Shelter Ministry</h2>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.45 } }}
            viewport={{ once: true, amount: 0.6 }}
            className="mt-3 rounded-2xl border bg-background p-5"
          >
            <p className="font-poppins text-sm md:text-base text-foreground/80">
              The Shelter Ministry team prepares meals and delivers them to the shelter for distribution. Scarves, socks, gloves, hats, and other essentials are also purchased and provided. 
              Through this outreach, we aim to share comfort, care, and hope with those in need.
            </p>
          </motion.div>
        </section>

        
      </div>
    </section>
  );
};

export default Explore;
