// src/aboutparts/Journey.jsx
const MILESTONES = [
  {
    year: "1998",
    title: "Life Transformation",
    body:
      "Pastor Orlando McDonald gives his life to Christ, marking the beginning of his spiritual journey. This pivotal moment set the foundation for his future ministry.",
  },
  {
    year: "2016",
    title: "New Beginnings",
    body:
      "Pastor Orlando and his family relocate to Connecticut, bringing their faith and vision for a new church. This move marks the start of a new chapter in their ministry.",
  },
  {
    year: "2017",
    title: "Church Established",
    body:
      "Calvary Set Apart Deliverance Ministry officially begins in Waterbury, CT. Pastor Orlando is ordained to lead the church, guiding its mission and vision.",
  },
  {
    year: "Today",
    title: "Growing Community",
    body:
      "We are a vibrant community dedicated to prayer, discipleship, and serving our neighbors. Our journey continues as we strive to live out our faith together.",
  },
];

export const Journey = () => {
  return (
    <section id="journey" className="pb-16 md:pb-24 lg:pb-[7.5rem]">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-12 2xl:px-[1rem]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-34">
          {/* Left: Heading / Intro */}
          <aside className="w-full lg:w-5/12">
            <h2 className="font-quint text-3xl md:text-4xl xl:text-5xl font-semibold leading-tight text-center">
              Church's Journey
            </h2>
            <p className="mt-4 max-w-md font-poppins text-sm sm:text-base text-foreground/80 text-center">
              Explore the significant milestones that have shaped our church
              community. Each event reflects our commitment to faith and service.
            </p>
          </aside>

          {/* Right: Timeline */}
          <div className="w-full lg:w-7/12 relative">
            {/* vertical line */}
            <div className="absolute left-4 md:left-6 top-0 h-full w-px bg-foreground/20" aria-hidden />

            <ol className="space-y-16">
              {MILESTONES.map((m, i) => (
                <li key={i} className="relative pl-12 md:pl-16">
                  {/* dot */}
                  <span
                    className="absolute left-3 md:left-5 top-2 h-3 w-3 rounded-full bg-buttonh"
                    aria-hidden
                  />
                  <div>
                    <p className="font-quint text-2xl md:text-[2rem] font-extrabold tracking-tight">
                      {m.year}
                    </p>
                    <h3 className="mt-2 font-poppins text-lg md:text-xl font-semibold">
                      {m.title}
                    </h3>
                    <p className="mt-3 max-w-xl font-poppins text-sm sm:text-base text-foreground/80">
                      {m.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
