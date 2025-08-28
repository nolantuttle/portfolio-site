import { skills } from "../data/skills";
import SkillCard from "./SkillCard";

export default function SkillsSection() {
    return (
        <div className="grid grid-cols-3 gap-4">
            {skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
            ))}
        </div>
    );
}
