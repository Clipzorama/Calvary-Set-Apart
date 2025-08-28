
import { HeroPage } from "@/homeparts/Hero";
import Particles from "@/Effects/Particles";


function Home() {
    return (
        <div className="min-h-screen bg-background overflow-x-hidden">
            <Particles
              particleColors={['#000000', '#000000']}
              particleCount={90}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
            />
            <HeroPage />
        </div>
    )

}




export default Home;