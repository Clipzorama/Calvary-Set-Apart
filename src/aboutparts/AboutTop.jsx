import Lottie from "lottie-react";
import ap from "@/assets/assistantp.webp";
import heart from "@/icons/heart.json";


export const AboutTop = () => { 
    
    return (
        <section id="about" className="w-full px-4 relative min-h-screen pt-35 pb-0">
            <div className="flex flex-col items-center gap-5 border-b-primary">
                <h1 className="text-primary font-quint font-bold text-3xl md:text-5xl opacity-0 animate-fade-in-delay-1">About Our Church</h1>
                <p className="font-poppins text-center text-md opacity-0 animate-fade-in-delay-2">Join us as we share our journey of faith, community, and service in Christ.</p>
            </div>
            <div className="mt-4 h-[1px] w-full bg-primary rounded opacity-0 animate-fade-in-delay-2"></div>


            <div className="mx-auto w-full max-w-6xl mt-16 md:mt-24 grid md:grid-cols-2 items-center gap-8 md:gap-12">
                {/* Left */}
                <div className="order-2 md:order-1 container">
                    <div className="w-full relative aspect-square h-[200px] sm:h-[300px] md:h-[420px] lg:h-[440px] bg-muted/40 overflow-hidden rounded-2xl opacity-0 animate-fade-in-delay-5">
                        <img
                        src={ap}
                        alt="Church community"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                        />
                    </div>
                </div>

                {/* Right */}
                <div className="order-1 md:order-2 flex flex-col items-center">
                    <h2 className="font-quint font-semibold text-3xl md:text-5xl leading-tight text-center opacity-0 animate-fade-in-delay-3">
                        Where Hearts Come Together
                    </h2>
                    <p className="font-poppins mt-4 text-foreground/80 leading-relaxed text-center opacity-0 animate-fade-in-delay-4 mb-10">
                        More than a gathering, we are a family of believers walking in faith and love.
                        No matter where you are on your spiritual journey, you will find encouragement and belonging here.
                    </p>
                    <Lottie animationData={heart} loop={false} className="w-24 h-24 md:w-40 md:h-40 opacity-0 animate-fade-in-delay-5" />
                </div>
            </div>

        </section>

    );

}


