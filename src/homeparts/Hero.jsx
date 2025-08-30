import { ArrowDown } from "lucide-react"
import heroImg from "@/assets/church.webp";

export const HeroPage = () => {


    return (
        <section id="hero" className="flex flex-col items-center justify-center w-full px-4 pb-30 relative min-h-screen pt-35 md:pt-50">
            <div className="mx-auto text-center z-10 relative max-w-5xl">
                <h1 className="font-quint font-semibold text-3xl md:text-4xl xl:text-5xl leading-tight md:leading-normal tracking-normal text-primary mb-6 opacity-0 animate-fade-in-delay-1">
                    Welcome to Calvary Set Apart <br /> Deliverance Ministry
                </h1>

                <p className="font-poppins leading-6 xs:text-xs sm:text-sm md:text-md xl:text-[1rem] text-foreground max-w-3xl mx-auto opacity-0 animate-fade-in-delay-2">
                    Join us for uplifting worship and fellowship centered on Jesus Christ.
                    Our services include Sunday School at 10:30 AM and Worship Service at 12:00 PM.
                </p>

                <div className="mt-6 opacity-0 animate-fade-in-delay-3">
                    <a href="/about" className="inline-block cursor-pointer rounded-xl px-6 py-3 font-poppins font-medium bg-button hover:bg-buttonh text-white transition-colors duration 300">
                        Learn More
                    </a>
                </div>
            </div>

           <div className="container mt-6">
                <div
                    className=" relative mx-auto w-full max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl h-[240px] sm:h-[300px] md:h-[420px] lg:h-[440px] overflow-hidden rounded-2xl opacity-0 animate-fade-in-delay-4">
                <img
                    src={heroImg}
                    alt="Congregation of Calvary Set Apart Deliverance Ministry in front of the church"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-contain"
                />
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 animate-fade-in-delay-5">
                <span className="animate-bounce">Scroll Down</span>
                <ArrowDown className="h-5 w-5 text-button animate-bounce" />
            </div>
            
        </section>
    )
}