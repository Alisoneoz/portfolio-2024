import Image from "next/image";
import ParticlesBackground from "@/components/Animations/ParticlesBackground";
import AnimatedTitle from "@/components/Animations/AnimatedTitle";
import AnimatedSection from "@/components/Animations/AnimatedSection";
import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import ProjectsSection from "@/components/ProjectsSection";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <div className="overflow-x-hidden ">
      <main className="flex flex-col items-center sm:items-start w-full my-auto">
        {/* Hero Section */}
        <section
          id="home"
          className="relative w-screen h-screen justify-center flex flex-col"
        >
          <ParticlesBackground
            className="absolute inset-0 -z-10 w-full h-full -mt-4"
            quantity={100}
          />
          <AnimatedTitle>
            <h1 className=" animate-title text-edge-outline text-center py-3.5 px-0.5 z-10 text-transparent duration-1000 bg-white cursor-default font-display  w-full  text-3xl md:text-5xl lg:text-6xl md:whitespace-nowrap bg-clip-text">
              Alison Estephany <div className="md:hidden mb-2"></div> <span className="hidden md:inline">| </span>Web Developer
            </h1>
            <p className="text-center pt-6 text-lg">
              Building Modern Digital Experiences
            </p>
          </AnimatedTitle>
        </section>

        {/* About Section  */}
        <AnimatedSection className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-600 via-black to-black flex flex-col w-full ">
          <div id="about" className="flex flex-col md:flex-row scroll-mt-48 pt-16 sm:pt-5">
            <div className="w-full pt-8 pb-16 items-center md:h-fit  md:w-1/3  md:mr-8 xl:mr-20 flex relative">
              <div className="rounded-xl absolute bg-violet-900 border-2 border-violet-600 h-full w-full py-30 md:-ml-4  xl:-ml-10 md:mt-8 lg:mt-4 z-1 flex items-end justify-center md:justify-start">
                <div className="flex items-center">
                  {/* SOCIAL MEDIA ICONS */}
                  <div className="flex gap-4 md:pt-4 md:pb-6 mb:py-4 px-10 items-center my-auto h-10">
                    <a
                      href="https://github.com/Alisoneoz"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5 md:w-6 md:h-6 hover:text-primary transition-colors" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/alisonestephany/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-5 h-5 md:w-6 md:h-6 hover:text-primary transition-colors" />
                    </a>

                    <a href="mailto:alisonestephanyoz@gmail.com">
                      <Mail className="w-5 h-5 hover:text-primary transition-colors" />
                    </a>
                  </div>
                </div>
              </div>
              {/* Profile Picture */}

              <Image
                src="/Alison-Estephany.webp"
                width={500}
                height={500}
                alt="Picture of the Alison Estephany, Web Developer and Dietitian"
                loading="lazy"
                className="rounded-xl  h-60 md:h-full z-10 object-top object-scale-down md:object-cover mx-auto -mt-4 md:mt-auto justify-center"
              />
            </div>
            <div className="w-full md:w-2/3 items-center flex flex-col my-auto">
              <h4>
                Alison Estephany is a dedicated Fullstack Developer and
                Dietitian with a background in Nutrition and a passion for
                software development
              </h4>
              <br />
              <p>
                {" "}
                She specializes in the MERN stack (MongoDB, ExpressJS, ReactJS,
                NodeJS) and is skilled in ReactJS, TailwindCSS, and more.
              </p>
              <br />
              <p>
                Alison has experience with WordPress, Squarespace, and Wix, and
                has worked as a Virtual Assistant and content creator. She is a
                fast learner with strong multitasking skills, fluent in English,
                and always eager to explore new technologies.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Project Section */}
        {/* <section>
        <ProjectsSection />
        </section> */}
        <AnimatedSection className="bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-violet-800 via-black to-black py-16">
          {" "}
          {/* Añadido py-16 */}
          <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
          <ProjectsSection />
        </AnimatedSection>

        <AnimatedSection className="bg-black bg-[radial-gradient(at_48.16%_51.30%,rgb(76,29,149)_0,transparent_0%),radial-gradient(at_48.72%_50.67%,rgb(76,29,149)_0,transparent_75%)]">
          <TechStack />
        </AnimatedSection>
      </main>
    </div>
  );
}
