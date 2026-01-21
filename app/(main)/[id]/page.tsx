import Image from 'next/image';
import Tag from '@/components/tag';
import LinkButton from '@/components/linkButton';
import LikeButton from '@/components/likeButton';
import Link from 'next/link';

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Mock data - 실제로는 API에서 가져올 데이터
  const project = {
    id,
    title: '포트폴리오 공유 플랫폼 - Refolio',
    author: {
      name: '홍길동',
      avatar: 'https://avatar.vercel.sh/user',
      role: 'Full-stack Developer',
    },
    thumbnail:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    description: `이 프로젝트는 개발자들이 자신의 포트폴리오를 공유하고 피드백을 받을 수 있는 플랫폼입니다. 
    
사용자들은 자신의 프로젝트를 등록하고, 다른 개발자들의 작업물을 탐색하며, 서로 영감을 주고받을 수 있습니다.`,
    detailedDescription: `프로젝트의 주요 기능:
    
1. 프로젝트 등록 및 관리
   - 프로젝트 정보, 스크린샷, 기술 스택 등록
   - 마크다운 기반 상세 설명 작성
   - 프로젝트 카테고리 분류

2. 탐색 및 검색
   - 기술 스택별 프로젝트 필터링
   - 인기도 및 최신순 정렬
   - 키워드 기반 검색

3. 소셜 기능
   - 좋아요 및 북마크
   - 댓글 및 피드백
   - 사용자 팔로우`,
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    links: {
      demo: 'https://example.com',
      github: 'https://github.com/example/repo',
    },
    likes: 42,
    views: 1250,
    createdAt: '2024-12-15',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
      'https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=800',
    ],
  };

  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      {/* 헤더 섹션 */}
      <div className="mb-8">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {project.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>{project.views} views</span>
              <span>•</span>
              <span>{project.createdAt}</span>
            </div>
          </div>
          <LikeButton initialCount={project.likes} variant="count" />
        </div>

        {/* 작성자 정보 */}
        <div className="flex items-center gap-3 mb-6">
          <Image
            src={project.author.avatar}
            alt={project.author.name}
            width={48}
            height={48}
            className="rounded-full"
          />
          <div>
            <div className="font-semibold text-gray-900">
              {project.author.name}
            </div>
            <div className="text-sm text-gray-600">{project.author.role}</div>
          </div>
        </div>

        {/* 태그 */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        {/* 링크 버튼 */}
        <div className="flex gap-3">
          {project.links.demo && (
            <Link href={project.links.demo} type="demo">
              Live Demo
            </Link>
          )}
          {project.links.github && (
            <Link href={project.links.github} type="github">
              GitHub
            </Link>
          )}
        </div>
      </div>

      {/* 메인 이미지 */}
      <div className="mb-8 rounded-2xl overflow-hidden bg-gray-100">
        <Image
          src={project.thumbnail}
          alt={project.title}
          width={1200}
          height={600}
          className="w-full h-auto"
        />
      </div>

      {/* 프로젝트 설명 */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">프로젝트 소개</h2>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {project.description}
        </p>
      </div>

      {/* 상세 설명 */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">상세 내용</h2>
        <div className="bg-gray-50 rounded-xl p-6">
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {project.detailedDescription}
          </p>
        </div>
      </div>

      {/* 추가 이미지 갤러리 */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">스크린샷</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.images.map((image, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden bg-gray-100 aspect-video"
            >
              <Image
                src={image}
                alt={`Screenshot ${index + 1}`}
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 기술 스택 상세 */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">기술 스택</h2>
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Frontend</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Next.js 14 (App Router)</li>
                <li>• React 18</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Backend</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Node.js</li>
                <li>• Express</li>
                <li>• PostgreSQL</li>
                <li>• Prisma ORM</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 댓글 섹션 (UI만) */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          댓글 <span className="text-gray-500 text-lg">(0)</span>
        </h2>
        <div className="bg-gray-50 rounded-xl p-6 text-center text-gray-500">
          아직 댓글이 없습니다. 첫 번째 댓글을 작성해보세요!
        </div>
      </div>
    </div>
  );
}
