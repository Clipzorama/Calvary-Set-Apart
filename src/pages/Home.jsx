
import { HeroPage } from "@/homeparts/Hero";
import { Glance } from "@/homeparts/Glance"
import Particles from "@/Effects/Particles";


function Home() {
    return (
        <div className="min-h-screen bg-background overflow-x-hidden">
            <Particles
              particleColors={['#717798', '#717798']}
              particleCount={90}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
            />
            <HeroPage />
            <Glance />
        </div>
    )

}




export default Home;