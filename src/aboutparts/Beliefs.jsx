// src/aboutparts/Beliefs.jsx
import Lottie from "lottie-react";

import bible from "@/icons/bible.json";
import candle from "@/icons/candle.json";
import wings from "@/icons/wings.json";
import church from "@/icons/church.json";

import beliefsImg from "@/assets/event.webp";

const FEATURES = [
  {
    title: "Scripture as Authority",
    desc: "The Bible is the inspired Word of God and our final authority for faith and life.",
    anim: bible,
  },
  {
    title: "Prayer and Worship",
    desc: "We believe in prayer, worship, and the work of the Holy Spirit in believers' lives.",
    anim: candle,
  },
  {
    title: "Salvation Through Faith",
    desc: "Salvation is by grace through faith in Jesus Christ.",
    anim: wings,
  },
  {
    title: "The Church's Mission",
    desc: "The Church is the body of Christ, called to make disciples and serve the world.",
    anim: church,
  },
];

function FeatureCard({ title, desc, anim }) {
  return (
    <div className="text-center">
      {/* Animated Icon */}
      <div className="mx-auto mb-4 h-16 w-16">
        <Lottie animationData={anim} loop={true} />
      </div>
      <h3 className="font-quint text-lg sm:text-xl font-semibold">{title}</h3>
      <p className="mt-2 font-poppins text-sm sm:text-base text-foreground/70">{desc}</p>
    </div>
  );
}

export const Beliefs = () => {
  return (
    <section id="beliefs" className="w-full bg-background px-4 pt-25">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-12 2xl:px-[1rem]">
        {/* Top Portion  */}
            <div className="text-center">
                <h2 className="font-quint text-3xl md:text-4xl xl:text-5xl font-semibold">
                    What We Believe — Core Beliefs
                </h2>
                <p className="mx-auto mt-4 max-w-2xl font-poppins text-sm sm:text-base text-foreground/80">
                    At Calvary Set Apart Deliverance Ministry, our beliefs are rooted in Scripture and
                    guide our faith and actions. We strive to embody these principles in our daily lives
                    and community.
                </p>
            </div>

            {/* Mobile and Tablet Design for this*/}
            <div className="mt-12 lg:hidden">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                    {FEATURES.map((f) => (
                    <FeatureCard key={f.title} {...f} />
                    ))}
                </div>

                <div className="mt-12">
                    <img
                    src={beliefsImg}
                    alt="Core beliefs"
                    className="w-full h-auto rounded-lg object-cover"
                    />
                </div>
            </div>

                {/* Desktop */}
            <div className="mt-16 hidden lg:grid lg:grid-cols-3 lg:gap-30 items-start">
                <div className="flex flex-col gap-16">
                    <FeatureCard {...FEATURES[0]} />
                    <FeatureCard {...FEATURES[2]} />
                </div>

                <div className="order-none self-center max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl h-[200px] sm:h-[300px] md:h-[350px] xl:h-[600px]">
                    <img
                    src={beliefsImg}
                    alt="Core beliefs"
                    className="w-full h-auto rounded-lg object-cover"
                    />
                </div>

                <div className="flex flex-col gap-16">
                    <FeatureCard {...FEATURES[1]} />
                    <FeatureCard {...FEATURES[3]} />
                </div>
            </div>
        </div>
    </section>
  );
};
