import Header from '@/components/header';
import LinkButton from '@/components/linkButton';
import ProjectList from '@/components/projectList';
import UserMenu from '@/components/userMenu';
import Link from 'next/link';

export default async function Home() {
  return (
    <div className="grid-rows-2 w-full">
      <div className="flex justify-between items-center px-8 py-4">
        <div className="text-[20px] font-semibold text-gray-700 ">프로젝트</div>
        <Link
          href="/new"
          className="p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-semibold"
        >
          프로젝트 등록
        </Link>
      </div>
      <ProjectList />
    </div>
  );
}
