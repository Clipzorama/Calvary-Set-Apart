import Lottie from "lottie-react";
import ap from "@/assets/assistantp.webp";
import heart from "@/icons/heart.json";


export const AboutTop = () => { 
    
    return (
        <section id="leadership" className="w-full px-4 relative pb-30 bg-background2">
            
            <div className="mx-auto w-full max-w-6xl md:pt-30 grid md:grid-cols-2 items-center gap-8 md:gap-12">
                {/* Left */}
                <div className="order-2 md:order-1 container">
                    <div className="w-full relative aspect-square h-[350px] md:h-[420px] lg:h-[440px] bg-muted/40 overflow-hidden rounded-2xl ">
                        <img
                        src={ap}
                        alt="Church community"
                        className="absolute inset-0 w-full h-full object-cover object-top md:object-center"
                        />
                    </div>
                </div>

                {/* Right */}
                <div className="pt-30 md:pt0 order-1 md:order-2 flex flex-col items-center">
                    <h2 className="font-quint font-semibold text-3xl md:text-5xl leading-tight text-center">
                        Where Hearts Come Together
                    </h2>
                    <p className="font-poppins mt-4 text-foreground/80 leading-relaxed text-center mb-10">
                        More than a gathering, we are a family of believers walking in faith and love.
                        No matter where you are on your spiritual journey, you will find encouragement and belonging here.
                    </p>
                    <Lottie animationData={heart} loop={true} className="w-24 h-24 md:w-40 md:h-40" />
                </div>
            </div>

        </section>

    );

}


