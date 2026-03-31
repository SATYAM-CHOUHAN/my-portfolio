import Card from '../components/Card'
import CopyEmailButton from '../components/CopyEmailButton';
import { useRef } from 'react'
import {Frameworks} from '../components/Frameworks';

const About = () => {
  const grid2Container = useRef();
  return (
    <section className='c-space section-spacing'>
        <h2 className='text-heading'>About Me</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
            {/* Grid 1 */}
            <div className="flex items-end grid-default-color grid-1">
                <img src="assets/coding-pov.png" className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]" />
                <div className="z-10">
                    <p className="headtext">Hi, I'm Satyam chouhan</p>
                    <p className="subtext">
                    Over time, I have developed my frontend development skills through hands-on projects, building dynamic and responsive web applications.
                    </p>
                </div>
            </div>
            {/* Grid 2 */}
            <div ref={grid2Container} className="grid-default-color grid-2">
                <p className="flex items-end text-5xl text-gray-500">CODE IS CRAFT</p>
                <p className="flex items-end text-2xl text-gray-600">Try dragging the cards!</p>
                <Card
                    style={{ rotate: "75deg", top: "30%", left: "20%" }}
                    text="GRASP"
                    containerRef={grid2Container}
                />
                <Card
                    style={{ rotate: "-30deg", top: "60%", left: "45%" }}
                    text="SOLID"
                    containerRef={grid2Container}
                />
                <Card
                    style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
                    text="Design Patterns"
                    containerRef={grid2Container}
                />
                <Card
                    style={{ rotate: "-45deg", top: "55%", left: "0%" }}
                    text="Design Principles"
                    containerRef={grid2Container}
                />
                <Card
                    style={{ rotate: "20deg", top: "10%", left: "38%" }}
                    text="Drag me"
                    containerRef={grid2Container}
                />
                <Card
                    style={{ rotate: "30deg", top: "70%", left: "70%" }}
                    image="assets/logos/csharp-pink.png"
                    containerRef={grid2Container}
                />
                <Card
                    style={{ rotate: "-45deg", top: "70%", left: "25%" }}
                    image="assets/logos/dotnet-pink.png"
                    containerRef={grid2Container}
                />
                <Card
                    style={{ rotate: "-45deg", top: "5%", left: "10%" }}
                    image="assets/logos/blazor-pink.png"
                    containerRef={grid2Container}
                />
            </div>
            {/* Grid 3 */}
            <div className="grid-black-color grid-3">
                <div className="z-10 w-[50%]">
                    <p className="headtext">Time Zone</p>
                    <p className="subtext">
                    I'm based in India, and open to remote work worldwide
                    </p>
                </div>

                <figure className="absolute left-[30%] top-[10%]">
                    <div className="relative">
                    <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />
                    <img
                        src="/models/globe.png"
                        alt="globe"
                        className="relative w-[300px] h-[300px] object-contain opacity-90 animate-spin [animation-duration:25s]"
                    />
                    </div>
                </figure>
            </div>          
            {/* Grid 4 */}
            <div className="grid-special-color grid-4">
                <div className="flex flex-col items-center justify-center gap-4 size-full">
                    <p className="text-center headtext">
                        Do you want to start a project together?
                    </p>
                    <CopyEmailButton/>
                </div>
            </div>
            {/* Grid 5 */}
            <div className="grid-default-color grid-5">
                <div className="z-10 w-[50%]">
                    <p className="headText">Teck Stack</p>
                    <p className="subtext">
                        I specialize in a variety of languages, frameworks, and tools that
                        allow me to build robust and scalable applications
                    </p>
                </div>
                <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
                    <Frameworks />
                </div>
            </div>
        </div>

    </section>
  )
}

export default About