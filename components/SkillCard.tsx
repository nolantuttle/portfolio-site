import { Skill } from "../types/skill";

type Props = {
    skill: Skill;
};

export default function SkillCard({ skill }: Props) {
    return (
        <div className={`p-4 border rounded shadow hover:shadow-lg`}>
            <div className={`text-${skill.color} text-2xl`}>{skill.icon}</div>
            <h3 className="font-bold">{skill.name}</h3>
            <p>{skill.level}%</p>
        </div>
    );
}
