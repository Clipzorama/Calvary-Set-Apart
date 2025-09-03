import { Sun, BookOpen, HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";



const pointers = [
  {
    icon: <Sun className="h-10 w-10" />,
    title: "Worship: Faithful Connection",
    text: "Join us in uplifting worship that inspires and connects.",
  },
  {
    icon: <BookOpen className="h-10 w-10" />,
    title: "Teaching: God's Truth",
    text: "Experience transformative teachings that deepen your faith.",
  },
  {
    icon: <HeartHandshake className="h-10 w-10" />,
    title: "Outreach: Love and Purpose",
    text: "Engage in outreach programs that make a difference.",
  },
];


export const Pillars = () => {
    return (
        <section id="pillars" className="py-16 md:py-20 lg:py-60">
            <div className="px-10 md:px-20 lg:px-25 xl:px-30 2xl:px-50 flex flex-col items-center ">
                <h1 className="font-quint font-semibold text-3xl md:text-4xl xl:text-5xl leading-tight md:leading-normal tracking-normal text-primary mb-6 text-center">
                    Building Blocks of Our Ministry
                </h1>
                <p className="font-poppins leading-6 xs:text-xs sm:text-sm md:text-md xl:text-[1rem] text-foreground/90 max-w-3xl text-center mb-10">
                    At our church, we are committed to nurturing a vibrant community through worship, teaching, and outreach. These pillars guide our mission and strengthen our faith.    
                </p>

                <div className="flex flex-col lg:flex-row gap-12 text-center mb-17">
                    {pointers.map((item, index) => (
                        <div key={index} className="flex flex-col items-center px-6 gap-3">
                            {item.icon}
                            <h3 className="text-xl font-bold">{item.title}</h3>
                            <p className="font-poppins text-sm leading-6 text-foreground/90">{item.text}</p>
                        </div>
                    ))}
                </div>

                <Link to="/get-involved" className="inline-block cursor-pointer border rounded-xl px-4 py-2 font-poppins font-medium bg-transparent hover:scale-150 text-primary transition-all duration-300">
                    Join us
                </Link>

            </div>





        </section>


    )
}