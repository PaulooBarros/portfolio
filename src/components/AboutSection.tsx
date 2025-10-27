import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { GraduationCap, Code2, Rocket } from "lucide-react";

export function AboutSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div {...fadeInUp}>
          <h2 className="text-center mb-4">Sobre Mim</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.1 }}>
            <Card className="h-full border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="mb-2">Full Stack</h3>
                <p className="text-muted-foreground">
                  Experiência em front-end e back-end, construindo aplicações web modernas e eficientes.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.2 }}>
            <Card className="h-full border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="mb-2">Formação</h3>
                <p className="text-muted-foreground">
                  Ciência da Computação pela Universidade Tiradentes (Aracaju-SE).
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.3 }}>
            <Card className="h-full border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Rocket className="w-6 h-6 text-primary" />
                </div>
                <h3 className="mb-2">Metodologia</h3>
                <p className="text-muted-foreground">
                  Familiaridade com metodologias ágeis e boas práticas, sempre buscando aprendizado contínuo.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="border-primary/20">
            <CardContent className="pt-6">
              <p className="text-muted-foreground leading-relaxed">
                Desenvolvedor Full Stack com experiência em front-end e back-end, atuando na construção de 
                aplicações web modernas e eficientes. Com formação em Ciência da Computação pela Universidade 
                Tiradentes (Aracaju-SE), tenho familiaridade com metodologias ágeis e boas práticas de 
                desenvolvimento, sempre buscando aprendizado contínuo e inovação tecnológica.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
