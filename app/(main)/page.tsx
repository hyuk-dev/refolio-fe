import Header from '@/components/header';
import LinkButton from '@/components/linkButton';
import ProjectList from '@/components/projectList';
import SearchBar from '@/components/searchBar';
import UserMenu from '@/components/userMenu';
import Link from 'next/link';

export default async function Home() {
  return (
    <div className="grid-rows-2 w-full">
      <div className="flex flex-col gap-4 px-8 py-4 mb-4 sm:flex-row sm:justify-between sm:items-center">
        <div className="text-[20px] font-semibold text-gray-700">프로젝트</div>
        <div className="flex gap-4">
          <SearchBar />
          <Link
            href="/new"
            className="min-w-[140px] h-10 px-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-semibold flex items-center justify-center"
          >
            프로젝트 등록
          </Link>
        </div>
      </div>
      <ProjectList />
    </div>
  );
}
