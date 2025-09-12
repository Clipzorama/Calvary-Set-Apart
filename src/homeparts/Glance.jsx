import { Link } from "react-router-dom";
import { Church, Users} from "lucide-react";
import crossImg from "@/assets/gold.webp"
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";



gsap.registerPlugin(ScrollTrigger);


export const Glance = () => {
  const leftRef = useRef(null);

  useGSAP(() => {
      gsap.from(leftRef.current, {
            opacity: 0,
            x: -100,
            duration: 1,
            scrollTrigger: {
                trigger: leftRef.current,
                start: "top 80%",
                end: "top 35%",
                toggleActions: "play none none none",
                scrub: true,
                once: true,
            },
        });
      }, {dependencies: []});



    const items = [
      {
        icon: <Church className="h-9 w-9" aria-hidden="true" />,
        title: "Sunday Worship",
        text: "Join us for uplifting worship and teaching every Sunday at 12:00 PM.",
        to: "/services#worship",
        segue: "Worship →",
      },
      {
        icon: <Users className="h-9 w-9" aria-hidden="true" />,
        title: "Youth Development",
        text: "Engage in our youth programs that inspire faith and foster lifelong friendships.",
        to: "/explore#youth",
        segue: "Youth →",

      },
    ];

    return (
      <section id="glance" className="bg-background2 py-16 md:py-20 lg:py-30">
        <div className="px-10 md:px-20 lg:px-25 xl:px-30 2xl:px-45">
          <div className="grid gap-10 md:gap-0 lg:grid-cols-2 items-center">
            {/* Left Side */}
            <div ref={leftRef} className="space-y-6 mb-10 lg:mb-0">
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-center font-quint tracking-normal leading-normal">
                A Community Set Apart for Christ
              </h2>
              <p className="font-poppins text-md text-center leading-6 xs:text-xs sm:text-sm md:text-md xl:text-[1rem] text-foreground/90 max-w-3xl mx-auto ">
                At Calvary Set Apart Deliverance Ministry, we are committed to fostering a vibrant community rooted in Christ. 
                Our mission encompasses worship, teaching, deliverance, youth development, and impactful outreach.
              </p>

              <div className="flex flex-col sm:flex-row gap-20 mb-8">
                {items.map((it) => (
                  <div key={it.title} className="flex flex-col gap-3">
                    <div className="p-2">{it.icon}</div>
                    <div>
                      <h3 className="font-bold mb-2 font-poppins text-lg">{it.title}</h3>
                      <p className="mb-4 text-justify font-poppins text-sm leading-6 text-foreground/90">{it.text}</p>
                      <Link
                        to={it.to}
                        className="inline-block cursor-pointer rounded-xl px-4 py-2 font-poppins font-medium bg-button hover:bg-buttonh text-white transition-colors duration-300">
                        {it.segue}
                      </Link>
                    </div>
                  </div>
                  ))}
              </div>
            </div>

            <div className="relative mx-auto my-auto h-full w-full flex justify-center items-center">
              <img 
                src={crossImg} 
                alt="Cross" 
                className="h-80 w-80 md:h-90 md:w-90 lg:w-230 lg:h-120 xl:w-120 xl:h-120 
                          text-foreground 
                          lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-[25%]
                          animate-orbit md:animate-[orbit_6s_linear_infinite]" 
              />
            </div>
          </div>
        </div>
      </section>
    );
};
