import Lottie from "lottie-react";
import ap from "@/assets/assistantp.webp";
import candleAnim from "@/icons/candle.json";


export const AboutTop = () => { 
    
    return (
        <section id="about" className="w-full px-4 relative min-h-screen pt-45 pb-30">
            <div className="flex flex-col items-center gap-5 border-b-primary">
                <h1 className="text-primary font-quint text-3xl md:text-5xl opacity-0 animate-fade-in-delay-1">About Our Church</h1>
                <p className="font-poppins text-center text-md opacity-0 animate-fade-in-delay-2">Join us as we share our journey of faith, community, and service in Christ.</p>

            </div>
            {/* Two-column block (desktop) / stacked (mobile) */}
            <div className="mx-auto w-full max-w-6xl mt-16 md:mt-24 grid md:grid-cols-2 items-center gap-8 md:gap-12">
                {/* Image on left (desktop), below text on mobile */}
                <div className="order-2 md:order-1 container">
                    <div className="w-full relative aspect-square bg-muted/40 overflow-hidden rounded-2xl opacity-0 animate-fade-in-delay-5">
                        <img
                        src={ap}
                        alt="Church community"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                        />
                    </div>
                </div>

                {/* Text on right (desktop), above image on mobile */}
                <div className="order-1 md:order-2 flex flex-col items-center">
                <h2 className="font-poppins font-semibold text-2xl md:text-4xl leading-tight text-center opacity-0 animate-fade-in-delay-3">
                    A Place to Belong
                </h2>
                <p className="font-poppins mt-4 text-foreground/80 leading-relaxed text-center opacity-0 animate-fade-in-delay-4 mb-10">
                    More than a gathering, we are a family of believers walking in faith and love.
                    No matter where you are on your spiritual journey, you will find encouragement and belonging here.
                </p>
                <Lottie animationData={candleAnim} loop={true} className="w-24 h-24 md:w-40 md:h-40 opacity-0 animate-fade-in-delay-5" />

                </div>
            </div>

        </section>

    );

}


