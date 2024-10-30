'use client';
import { projects } from '@/config/projects';
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
    <div id="projects" className="scroll-mt-48 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden">
      {projects.map((project) => (
        <Card key={project.id} className="flex flex-col">
          <CardHeader>
            <div className="relative w-full h-48">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover rounded-t-lg object-top"
              />
            </div>
            <CardTitle className="pt-3">{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-violet-800 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </CardContent>
          <CardFooter className="mt-auto">
            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <ExternalLink className="w-6 h-6" />
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
