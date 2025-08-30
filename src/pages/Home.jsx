
import { HeroPage } from "@/homeparts/Hero";
import { Glance } from "@/homeparts/Glance"
import { Pillars } from "@/homeparts/Pillars"
import Particles from "@/Effects/Particles";


function Home() {
    return (
        <div className="min-h-screen bg-background overflow-x-hidden">
            <Particles
              particleColors={['#717798', '#717798']}
              particleCount={700}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={35}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
            />
            <HeroPage />
            <Glance />
            <Pillars />
        </div>
    )

}




export default Home;