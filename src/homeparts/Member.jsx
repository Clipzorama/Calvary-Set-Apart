
import s1 from "@/scripture/s1.webp";
import s2 from "@/scripture/s2.webp";
import s3 from "@/scripture/s3.webp";
import s4 from "@/scripture/s4.webp";
import s5 from "@/scripture/s5.webp";
import s6 from "@/scripture/s6.webp";


export const Member = () => {

    const members = [
        {
        id: 1,
        img: s1,
        scriptureRef: "Mark 12:30-31 (NIV)",
        scriptureText: "Love the Lord your God with all your heart and with all your soul and with all your mind and with all your strength.' 31 The second is this: 'Love your neighbor as yourself.' There is no commandment greater than these.",
        },
        {
        id: 2,
        img: s2,
        scriptureRef: "Psalm 37",
        scriptureText: "Delight thyself also in the Lord; and he shall give the the desires of thine heart. ",
        },
        {
        id: 3,
        img: s3,
        scriptureRef: "Psalm 37 3-4",
        scriptureText: "Trust in the Lord and do good; dwell in the land and enjoy safe pasture. ",
        },
        {
        id: 4,
        img: s4,
        scriptureRef: "Isaiah 43: 18-20",
        scriptureText: "Behold, I will do a new thing; now it shall spring forth; shall ye not know it? I will even make a way in the wilderness, and rivers in the desert.",
        },
        {
        id: 5,
        img: s5,
        scriptureRef: "Psalm 91",
        scriptureText: "He will cover you with his feathers, and under his wings you will find refuge; his faithfulness will be your shield and rampart.",
        },
        {
        id: 6,
        img: s6,
        scriptureRef: "Psalm 91 1-16",
        scriptureText: "For he will command his angels concerning you to guard you in all your ways.",
        },
    ];



    return (
        <section id="members" className="py-16 md:py-24 lg:py-30 bg-background">
            <div className="mx-auto w-full max-w-6xl px-6 sm:px-20 md:px-6 lg:px-12 2xl:px-8">
                <h2 className="text-center font-quint text-3xl md:text-4xl lg:text-5xl font-semibold tracking-normal leading-tight">
                    Our Members!
                </h2>
                <p className="mx-auto mt-3 max-w-3xl text-center font-poppins text-sm sm:text-base text-foreground/80">
                    Meet some of the wonderful members of our ministry and the scripture that inspires them.
                </p>

                {/* Members grid */}
                <ul className="mt-10 grid grid-cols-1 gap-8 md:mt-12 md:grid-cols-2 lg:grid-cols-3 relative z-20">
                    {members.map((m) => (
                        <li key={m.id} className="h-full">
                        <article className="h-full rounded-2xl border bg-background p-6 shadow-sm transition-shadow hover:shadow-md">
                            {/* Image */}
                            <div className="relative w-full mx-auto max-w-xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl h-[350px] sm:h-[300px] md:h-[350px] xl:h-[400px] overflow-hidden rounded-xl aspect-[3/4] md:aspect-[3/4] ">
                            <img
                                src={m.img}
                                alt={m.scriptureRef}
                                className="h-full w-full object-cover object-top"
                                loading="lazy"/>
                            </div>

                            {/* Scripture */}
                            <div className="mt-5 text-center">
                            <p className="text-sm font-semibold tracking-wide uppercase text-foreground/70 font-poppins">
                                {m.scriptureRef}
                            </p>
                            <p className="mt-2 text-[13px] md:text-[0.9rem] leading-relaxed text-foreground/90 font-poppins">
                                {m.scriptureText}
                            </p>
                            </div>
                        </article>
                        </li>
                    ))}
                </ul>
            </div>
        </section>

    );
}