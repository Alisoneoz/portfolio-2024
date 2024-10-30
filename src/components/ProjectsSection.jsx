'use client';
import { projects } from '@/config/projects';
import { trackProjectClick } from '@/lib/gtag';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  return (
    <div id="projects" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 md:px-8 scroll-mt-16 w-full">
      {projects.map((project) => (
        <Card key={project.id} className="flex flex-col w-full mx-auto max-w-sm overflow-hidden"> {/* Añadido overflow-hidden */}
          <CardHeader className="p-4"> {/* Ajustado padding */}
            <div className="relative w-full h-48 sm:h-56 mb-4"> {/* Añadido margin bottom */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover rounded-lg object-top"
              />
            </div>
            <CardTitle className="text-lg sm:text-xl mb-2">{project.title}</CardTitle>
            <CardDescription className="text-sm">{project.description}</CardDescription>
          </CardHeader>
          <CardContent className="p-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-violet-800 rounded-full text-xs sm:text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </CardContent>
          <CardFooter className="mt-auto p-4 justify-end"> {/* Ajustado padding y justify */}
            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  onClick={() => trackProjectClick(project.title, 'github')}
                >
                  <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  onClick={() => trackProjectClick(project.title, 'live')}
                >
                  <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              )}
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ProjectsSection;
