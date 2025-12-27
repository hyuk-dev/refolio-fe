import Header from '@/components/header';
import ProjectList from '@/components/projectList';
import UserMenu from '@/components/userMenu';

export default async function Home() {
  return (
    <div className="grid-rows-2 w-full">
      <ProjectList />
    </div>
  );
}
