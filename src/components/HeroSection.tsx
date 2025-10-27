"use client";
import { motion } from "framer-motion"; // ✅ Use framer-motion em vez de motion/react
import { Button } from "./ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center gap-8"
        >
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
              <img
                src="/assets/paulo.PNG"
                alt="Paulo Barros"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback caso a imagem não carregue
                }}
              />
            </div>
          </motion.div>

          {/* Content */}
          <div className="flex-1 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h1 className="mb-3">Paulo Barros</h1>
              <h2 className="text-primary mb-6">Desenvolvedor Full Stack</h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Transformo ideias em experiências digitais únicas. Especializado em criar 
              aplicações web modernas, escaláveis e de alta performance, unindo design 
              elegante com código limpo e eficiente.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 justify-center mb-10"
            >
              <Button 
                onClick={() => scrollToSection("projects")} 
                size="lg"
                className="bg-primary hover:bg-primary/90"
              >
                Ver Projetos
              </Button>
              <Button 
                onClick={() => scrollToSection("contact")} 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary/10"
              >
                Entrar em Contato
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-6 justify-center"
            >
              <a
                href="https://github.com/paulo-barros"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200 p-2 rounded-full hover:bg-primary/10"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/paulo-barros-149146235/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200 p-2 rounded-full hover:bg-primary/10"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:paulogustavobarros90@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200 p-2 rounded-full hover:bg-primary/10"
              >
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          duration: 0.6, 
          delay: 0.8, 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection("about")}
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
      </motion.div>
    </section>
  );
}