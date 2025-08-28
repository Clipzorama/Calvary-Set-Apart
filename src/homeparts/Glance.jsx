import { Link } from "react-router-dom";
import { Church, Users, BookOpen, HeartHandshake } from "lucide-react";
// import featureImg from "@/assets/church-feature.jpg";

export default function Glance() {
  const items = [
    {
      icon: <Church className="h-6 w-6" aria-hidden="true" />,
      title: "Sunday Worship",
      text: "Uplifting worship & teaching every Sunday at 12:00 PM.",
      to: "/services#worship",
    },
    {
      icon: <Users className="h-6 w-6" aria-hidden="true" />,
      title: "Youth Development",
      text: "Programs that inspire faith and lifelong friendships.",
      to: "/explore#youth",
    },
    {
      icon: <BookOpen className="h-6 w-6" aria-hidden="true" />,
      title: "Prayer & Bible Study",
      text: "Join us in person and on Zoom throughout the week.",
      to: "/get-involved#prayer",
    },
    {
      icon: <HeartHandshake className="h-6 w-6" aria-hidden="true" />,
      title: "Outreach",
      text: "Serving our neighbors through the Shelter Program.",
      to: "/explore#outreach",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid gap-10 md:gap-14 md:grid-cols-2 items-center">
          {/* Text */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Set Apart to Worship, Grow, and Serve
            </h2>
            <p className="text-muted-foreground max-w-prose">
              At Calvary Set Apart Deliverance Ministry, we worship Jesus, grow
              through the Word and prayer, and serve our neighbors. Explore more
              on the pages above.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {items.map((it) => (
                <li key={it.title} className="flex gap-3">
                  <div className="shrink-0 rounded-xl border p-2">{it.icon}</div>
                  <div>
                    <h3 className="font-medium">{it.title}</h3>
                    <p className="text-sm text-muted-foreground">{it.text}</p>
                    <Link
                      to={it.to}
                      className="text-sm underline underline-offset-4 hover:no-underline"
                    >
                      Learn more →
                    </Link>
                  </div>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Link
                to="/about#visit"
                className="inline-flex items-center rounded-xl px-4 py-2 border shadow-sm hover:shadow transition"
              >
                Plan Your Visit
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative order-first md:order-last">
            <div className="relative w-full overflow-hidden rounded-2xl ring-1 ring-foreground/10 shadow-sm">
              {/* <img
                src={featureImg}
                alt="Congregation gathered in worship at Calvary Set Apart"
                loading="lazy"
                className="h-[clamp(220px,38vh,520px)] w-full md:h-[28rem] object-cover object-center"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
