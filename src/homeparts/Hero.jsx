import { ArrowDown } from "lucide-react";
import heroImg from "@/assets/church.webp";
import doverImg from "@/assets/dover.png"

export const HeroPage = () => {


    return (
        <section id="hero" className="flex bg-background flex-col items-center justify-center w-full px-4 pb-30 relative min-h-screen pt-30 z-10">
            {/* Cross Pattern Background */}
            <svg
            aria-hidden
            className="absolute inset-0 w-full h-full z-0 opacity-[0.14] text-button"
            >
            <defs>
                <pattern id="crossPattern" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M16 4v24M4 16h24" stroke="currentColor" strokeWidth="1" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#crossPattern)" />
            </svg>

            <img
            src={doverImg}
            alt="Dove"
            className="absolute top-26 md:top-30 left-8 w-18 h-18 md:w-24 md:h-24 opacity-0 animate-fade-in-delay-6 z-20"
            />

            <img
            src={doverImg}
            alt="Dove"
            className="absolute bottom-20 md:bottom-8 right-8 w-22 h-22 md:w-28 md:h-28 opacity-0 animate-fade-in-delay-6 scale-x-[-1] z-20"
            />
                            
            <div className="mx-auto text-center z-10 relative max-w-5xl">
                <h1 className="font-quint font-bold text-2xl md:text-4xl xl:text-5xl leading-tight md:leading-normal tracking-normal text-primary mb-6 opacity-0 animate-fade-in-delay-1">
                    Welcome to Calvary Set Apart <br /> Deliverance Ministry
                </h1>

                <p className="font-poppins leading-6 xs:text-xs sm:text-sm md:text-md xl:text-[1rem] text-foreground/90 max-w-3xl mx-auto opacity-0 animate-fade-in-delay-2">
                    Join us for uplifting worship and fellowship centered on Jesus Christ.
                    Our services include Sunday School at 10:30 AM and Worship Service at 12:00 PM.
                </p>

                <div className="mt-6 opacity-0 animate-fade-in-delay-3">
                    <a href="/about" className="inline-block cursor-pointer rounded-xl px-6 py-3 font-poppins font-medium bg-button hover:bg-buttonh text-white transition-colors duration-300">
                        Learn More
                    </a>
                </div>
            </div>
            <div className="w-[100%] mt-6">
                <div className="relative mx-auto w-full max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl h-[200px] sm:h-[300px] md:h-[350px] xl:h-[400px] overflow-hidden rounded-2xl opacity-0 animate-fade-in-delay-4">
                    <img
                        src={heroImg}
                        alt="Congregation of Calvary Set Apart Deliverance Ministry in front of the church"
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-contain z-10"
                    />
                </div>
            </div>

            <div className="absolute bottom-20 md:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 animate-fade-in-delay-6">
                <span className="animate-bounce">Scroll Down</span>
                <ArrowDown className="h-5 w-5 text-button animate-bounce" />
            </div>
        </section>
    )
}