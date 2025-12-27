import ProjectCard from './projectCard';

const projectMock = {
  data: [
    {
      id: 1,
      title: 'Project One',
      description: 'This is the first project.',
      imageLink: 'https://cdn.pixabay.com/photo/2023/12/16/19/33/christmas-8453173_1280.jpg',
      category: '웹 개발',
      duration: 90,
      teamMembers: 5,
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'This is the second project.',
      imageLink: 'https://cdn.pixabay.com/photo/2025/11/27/16/45/christmas-9980861_1280.jpg',
      category: '모바일 앱',
      duration: 180,
      teamMembers: 8,
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'This is the third project.',
      imageLink: 'https://cdn.pixabay.com/photo/2025/10/29/12/49/jingle-bells-9924928_1280.jpg',
      category: '데이터 과학',
      duration: 120,
      teamMembers: 4,
    },
    {
      id: 4,
      title: 'Project Four',
      description: 'This is the fourth project.',
      imageLink: 'https://cdn.pixabay.com/photo/2025/11/30/18/19/leaves-9986904_1280.jpg',
      category: '머신 러닝',
      duration: 150,
      teamMembers: 6,
    },
    {
      id: 5,
      title: 'Project Five',
      description: 'This is the fifth project.',
      imageLink: 'https://cdn.pixabay.com/photo/2024/02/21/08/44/run-8587089_1280.png',
      category: '게임 개발',
      duration: 210,
      teamMembers: 10,
    },
    {
      id: 6,
      title: 'Project Six',
      description: 'This is the sixth project.',
      imageLink: 'https://cdn.pixabay.com/photo/2025/09/12/16/49/dog-9830831_1280.jpg',
      category: '블록체인',
      duration: 240,
      teamMembers: 12,
    },
    {
      id: 7,
      title: 'Project Seven',

      description: 'This is the seventh project.',
      imageLink: 'https://cdn.pixabay.com/photo/2025/12/08/11/05/pinecone-10001896_1280.jpg',
      category: '사이버 보안',
      duration: 60,
      teamMembers: 3,
    },
    {
      id: 8,
      title: 'Project Eight',
      description: 'This is the eighth project.',
      imageLink: 'https://cdn.pixabay.com/photo/2025/10/07/10/59/parrot-9878922_1280.jpg',
      category: '클라우드 컴퓨팅',
      duration: 270,
      teamMembers: 15,
    },
  ],
};

export default function ProjectList() {
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 px-5 w-full">
      {projectMock.data.map((project) => {
        return (
          <div key={project.id}>
            <ProjectCard {...project} />
          </div>
        );
      })}
    </div>
  );
}
