import { type IconType } from "react-icons";

interface SkillCardProps {
  name: string;
  Icon: IconType;
}

export function SkillCard({ name, Icon }: SkillCardProps) {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:scale-105 transform transition">
      <Icon className="text-5xl text-blue-500 mb-2" />
      <span className="text-gray-900 dark:text-white font-medium">{name}</span>
    </div>
  );
}
