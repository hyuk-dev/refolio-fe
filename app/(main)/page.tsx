import Header from '@/components/header';
import ProjectList from '@/components/projectList';
import UserMenu from '@/components/userMenu';

export default async function Home() {
  return (
    <div className="flex flex-col items-center gap-5 max-w-[1580px] mx-auto">
      <div className="flex justify-between w-full px-20 py-5 border-b border-b-gray-200">
        <Header />
        <UserMenu />
      </div>
      <div className='grid-rows-2 w-full'>
        <ProjectList />
      </div>
    </div>
  );
}
