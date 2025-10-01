import { SkillCard } from "./SkillCard";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTypescript, SiTailwindcss, SiGithub,SiAdobeillustrator, SiAdobephotoshop, SiPostgresql, SiJest, SiNodedotjs} from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML", Icon: SiHtml5 },
    { name: "CSS", Icon: SiCss3 },
    { name: "JavaScript", Icon: SiJavascript },
    { name: "React", Icon: SiReact },
    { name: "TypeScript", Icon: SiTypescript },
    { name: "Tailwind", Icon: SiTailwindcss },
    { name: "Git/GitHub", Icon: SiGithub },
    { name: "Jest", Icon: SiJest },
    { name: "Adobe Illustrator", Icon: SiAdobeillustrator },
    { name: "Adobe Photoshop", Icon: SiAdobephotoshop },
    { name: "PostgreSQL", Icon: SiPostgresql },
    { name: "Node.Js", Icon: SiNodedotjs },
  ];

  return (
    <section id="skills" className="py-20 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        Minhas <span className="text-gray-900">Skills</span>
      </h2>
      <p className="text-center mb-10">
        Habilidades sólidas em desenvolvimento web, criando soluções funcionais, modernas e criativas.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <SkillCard key={index} name={skill.name} Icon={skill.Icon} />
        ))}
      </div>
    </section>
  );
}

export default Skills