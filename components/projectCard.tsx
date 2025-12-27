import Image from "next/image";
import Tag from "./tag";

export default function ProjectCard(project: {
  id: number;
  title: string;
  description: string;
  imageLink: string;
  category: string;
  duration: number;
  teamMembers: number;
}) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          className="object-cover transition-transform duration-300 ease-out transform-gpu group-hover:scale-110"
          src={project.imageLink}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h2>{project.title}</h2>
        <p className="text-sm text-gray-600 mt-2">{project.description}</p>
        <div className="flex gap-3 items-center mt-4 text-xs text-gray-500">
          <Tag label={project.category} color="blue" radius="full" />
          <Tag label={`기간: ${project.duration}일`} color="slate" radius="full" />
          <Tag label={`팀원: ${project.teamMembers}명`} color="green" radius="full" />
        </div>
      </div>
    </div>
  )
}
