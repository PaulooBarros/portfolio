import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase, ExternalLink, GraduationCap } from "lucide-react";

const experiences = [
  {
    company: "Cencosud S.A.",
    role: "Estagiário em Governança de TI",
    period: "Atual",
    link: "https://www.linkedin.com/company/cencosud-s-a-/posts/?feedView=all",
    description: "Apoio na execução e acompanhamento das práticas de Governança de TI, contribuindo para a implementação de estratégias e processos voltados à gestão eficiente dos serviços de tecnologia. Participação na análise e melhoria de processos para otimizar disponibilidade e desempenho de serviços de TI.",
    tags: ["Governança de TI", "Gestão de Processos", "Análise de Serviços"],
    icon: "briefcase"
  },
  {
    company: "Universidade Tiradentes",
    role: "Aluno Mentor",
    period: "Atual",
    link: "https://www.unit.br/",
    description: "Como mentor, atuo de forma colaborativa com o professor orientador na elaboração e implementação do plano de trabalho dos discentes, assegurando uma estrutura organizada que favoreça a produtividade do grupo. Meu papel também envolve promover a integração dos estudantes entre si e com a instituição, fortalecendo vínculos e contribuindo para a construção de um ambiente de cooperação e apoio mútuo. Busco constantemente incentivar o engajamento dos discentes em atividades acadêmicas e científicas, estimulando o pensamento crítico, a troca de saberes e o desenvolvimento de pesquisas que contribuam para o crescimento coletivo e o avanço do conhecimento.",
    tags: ["Mentoria", "Ensino", "Pesquisa Acadêmica", "Desenvolvimento de Equipes"],
    icon: "education"
  },
  {
    company: "Protech Solutions",
    role: "Desenvolvedor Front-End",
    period: "Anterior",
    link: "https://www.linkedin.com/company/protechsolutions/posts/?feedView=all",
    description: "Atuação no desenvolvimento de interfaces web modernas e responsivas utilizando React, com foco na criação de componentes reutilizáveis e na otimização de performance. Responsável pela integração com APIs RESTful e melhoria contínua da experiência do usuário. Aplicação de boas práticas de desenvolvimento e versionamento com Git.",
    tags: ["React", "APIs RESTful", "Git", "UI/UX"],
    icon: "briefcase"
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center mb-4">Experiência Profissional</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        {exp.icon === "education" ? (
                          <GraduationCap className="w-6 h-6 text-primary" />
                        ) : (
                          <Briefcase className="w-6 h-6 text-primary" />
                        )}
                      </div>
                      <div>
                        <CardTitle className="flex items-center gap-2 flex-wrap">
                          {exp.company}
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </CardTitle>
                        <p className="text-muted-foreground mt-1">{exp.role}</p>
                        <p className="text-sm text-muted-foreground mt-1">{exp.period}</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}