"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Pibaf",
    description: "Plataforma web completa desenvolvida para gerenciamento e apresentação de conteúdo institucional...",
    image: "/assets/pibaf.PNG", // ✅ Caminho correto para public/assets/
    link: "https://pibaf.com.br/",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Mulvi Parking",
    description: "Landing page moderna e responsiva para solução de estacionamento inteligente...",
    image: "/assets/mulviparking.png", // ✅ Caminho correto
    link: "https://mulvi-parking-landing-page.vercel.app/",
    technologies: ["React", "Next.js", "Tailwind CSS", "Motion"],
  },
  {
    title: "Casa do Plug",
    description: "E-commerce moderno para loja de eletrônicos...",
    image: "/assets/casadoplug.png", // ✅ Caminho correto
    link: "https://casadoplug.vercel.app/",
    technologies: ["React", "Next.js", "TypeScript", "Node.js"],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center mb-4">Projetos</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col border-primary/20 hover:border-primary/40 transition-all hover:shadow-xl group">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </CardHeader>
                <CardContent className="flex-1 pt-6">
                  <CardTitle className="mb-3">{project.title}</CardTitle>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="default" className="w-full group">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      Ver Projeto
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}