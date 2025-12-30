 'use client';

import { useState } from 'react';
import Image from 'next/image';
import Tag from './tag';
import LikeButton from './likeButton';

export default function ProjectCard(project: {
  id: number;
  title: string;
  description: string;
  imageLink: string;
  category: string;
  duration: number;
  teamMembers: number;
  rating: number;
  date: string;
}) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="cursor-pointer group overflow-hidden rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          className="object-cover transition-transform duration-300 ease-out transform-gpu group-hover:scale-110"
          src={project.imageLink}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute left-3 right-3 top-3 z-10 flex items-center justify-between text-xs text-gray-700">
          <div className="flex items-center gap-2">
            <Tag label={project.category} color="amber" radius="full" />
          </div>
          <LikeButton isLiked={isLiked} setIsLiked={setIsLiked} />
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h2>{project.title}</h2>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <svg
              className="h-4 w-4 text-amber-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.17c.969 0 1.371 1.24.588 1.81l-3.375 2.453a1 1 0 00-.364 1.118l1.287 3.967c.3.921-.755 1.688-1.54 1.118l-3.375-2.453a1 1 0 00-1.175 0L5.74 17.05c-.785.57-1.84-.197-1.54-1.118l1.287-3.967a1 1 0 00-.364-1.118L1.748 8.394c-.783-.57-.38-1.81.588-1.81h4.17a1 1 0 00.95-.69l1.286-3.967z" />
            </svg>
            <span>{project.rating}</span>
          </div>
        </div>
        <p className="text-sm text-gray-400 mt-2">{project.description}</p>
        <div className='flex justify-end gap-2 mt-4'>
          <Tag
            label={`작업시간: ${project.duration}일`}
            color="slate"
            radius="full"
          />
          <Tag
            label={`팀원: ${project.teamMembers}명`}
            color="slate"
            radius="full"
          />
        </div>
      </div>
    </div>
  );
}
