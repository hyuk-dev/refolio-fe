'use client';
import { useState } from 'react';
import ProjectCard from './projectCard';
import CategoryList from './categoryList';

const projectMock = {
  data: [
    {
      id: 9,
      title: 'AI 챗봇 프로젝트',
      description: '자연어 처리 기술을 활용한 고객 상담 챗봇',
      imageLink:
        'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
      category: 'AI/ML',
      duration: 120,
      teamMembers: 7,
      rating: 4.7,
      date: '2023-10-28',
    },
    {
      id: 10,
      title: 'IoT 스마트홈 시스템',
      description: '가정용 IoT 기기 통합 관리 플랫폼',
      imageLink:
        'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80',
      category: 'IoT',
      duration: 200,
      teamMembers: 9,
      rating: 4.6,
      date: '2023-09-14',
    },
    {
      id: 11,
      title: '온라인 교육 플랫폼',
      description: '인터랙티브 학습 관리 시스템',
      imageLink:
        'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
      category: '웹 개발',
      duration: 180,
      teamMembers: 11,
      rating: 4.9,
      date: '2023-08-22',
    },
    {
      id: 12,
      title: '헬스케어 모니터링',
      description: '실시간 건강 데이터 추적 앱',
      imageLink:
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      category: '모바일 앱',
      duration: 150,
      teamMembers: 6,
      rating: 4.8,
      date: '2023-07-10',
    },
    {
      id: 13,
      title: '재고 관리 시스템',
      description: '중소기업용 자동화 재고 관리 솔루션',
      imageLink:
        'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80',
      category: '엔터프라이즈',
      duration: 240,
      teamMembers: 14,
      rating: 4.5,
      date: '2023-06-05',
    },
    {
      id: 14,
      title: 'NFT 마켓플레이스',
      description: '디지털 아트 거래 플랫폼',
      imageLink:
        'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&q=80',
      category: '블록체인',
      duration: 210,
      teamMembers: 10,
      rating: 4.4,
      date: '2023-05-18',
    },
    {
      id: 15,
      title: '음성 인식 비서',
      description: '다국어 지원 음성 AI 어시스턴트',
      imageLink:
        'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&q=80',
      category: 'AI/ML',
      duration: 165,
      teamMembers: 8,
      rating: 4.6,
      date: '2023-04-25',
    },
    {
      id: 16,
      title: '전자상거래 솔루션',
      description: '풀스택 쇼핑몰 구축 프로젝트',
      imageLink:
        'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
      category: '웹 개발',
      duration: 280,
      teamMembers: 16,
      rating: 4.7,
      date: '2023-03-12',
    },
    {
      id: 17,
      title: 'AR 쇼핑 체험',
      description: '증강현실 기반 가상 쇼핑 앱',
      imageLink:
        'https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=800&q=80',
      category: '모바일 앱',
      duration: 190,
      teamMembers: 12,
      rating: 4.8,
      date: '2023-02-08',
    },
    {
      id: 18,
      title: '데이터 시각화 대시보드',
      description: '비즈니스 인텔리전스 분석 도구',
      imageLink:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      category: '데이터 과학',
      duration: 130,
      teamMembers: 5,
      rating: 4.9,
      date: '2023-01-20',
    },
    {
      id: 19,
      title: '소셜 미디어 플랫폼',
      description: '차세대 커뮤니티 네트워크',
      imageLink:
        'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
      category: '웹 개발',
      duration: 320,
      teamMembers: 20,
      rating: 4.5,
      date: '2022-12-15',
    },
    {
      id: 20,
      title: '자율주행 시뮬레이터',
      description: 'AI 기반 자동차 시뮬레이션',
      imageLink:
        'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80',
      category: '머신 러닝',
      duration: 300,
      teamMembers: 18,
      rating: 4.7,
      date: '2022-11-05',
    },
    {
      id: 21,
      title: '피트니스 트래커',
      description: '운동 기록 및 분석 애플리케이션',
      imageLink:
        'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
      category: '모바일 앱',
      duration: 110,
      teamMembers: 4,
      rating: 4.6,
      date: '2022-10-22',
    },
    {
      id: 22,
      title: '암호화폐 지갑',
      description: '멀티체인 디지털 자산 관리',
      imageLink:
        'https://images.unsplash.com/photo-1621504450181-5d356f61d307?w=800&q=80',
      category: '블록체인',
      duration: 170,
      teamMembers: 7,
      rating: 4.8,
      date: '2022-09-18',
    },
    {
      id: 23,
      title: '보안 감사 도구',
      description: '웹 애플리케이션 취약점 스캐너',
      imageLink:
        'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
      category: '사이버 보안',
      duration: 140,
      teamMembers: 6,
      rating: 4.9,
      date: '2022-08-30',
    },
    {
      id: 24,
      title: '게임 스트리밍 플랫폼',
      description: '실시간 게임 방송 서비스',
      imageLink:
        'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80',
      category: '게임 개발',
      duration: 260,
      teamMembers: 15,
      rating: 4.4,
      date: '2022-07-14',
    },
    {
      id: 25,
      title: '날씨 예측 AI',
      description: '딥러닝 기반 기상 예보 시스템',
      imageLink:
        'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80',
      category: 'AI/ML',
      duration: 220,
      teamMembers: 9,
      rating: 4.7,
      date: '2022-06-08',
    },
    {
      id: 26,
      title: '협업 도구',
      description: '팀 프로젝트 관리 플랫폼',
      imageLink:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
      category: '웹 개발',
      duration: 195,
      teamMembers: 11,
      rating: 4.6,
      date: '2022-05-25',
    },
    {
      id: 27,
      title: '음악 스트리밍 서비스',
      description: '개인화 추천 기반 음악 앱',
      imageLink:
        'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80',
      category: '모바일 앱',
      duration: 250,
      teamMembers: 13,
      rating: 4.8,
      date: '2022-04-12',
    },
    {
      id: 28,
      title: '스마트 농업 시스템',
      description: 'IoT 기반 농작물 관리 솔루션',
      imageLink:
        'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80',
      category: 'IoT',
      duration: 230,
      teamMembers: 10,
      rating: 4.5,
      date: '2022-03-28',
    },
    {
      id: 29,
      title: '번역 서비스 API',
      description: '실시간 다국어 번역 엔진',
      imageLink:
        'https://images.unsplash.com/photo-1484069560501-87d72b0c3669?w=800&q=80',
      category: 'AI/ML',
      duration: 160,
      teamMembers: 8,
      rating: 4.9,
      date: '2022-02-16',
    },
    {
      id: 30,
      title: '부동산 플랫폼',
      description: '매물 검색 및 중개 서비스',
      imageLink:
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
      category: '웹 개발',
      duration: 290,
      teamMembers: 17,
      rating: 4.6,
      date: '2022-01-05',
    },
    {
      id: 31,
      title: 'VR 교육 콘텐츠',
      description: '가상현실 기반 학습 프로그램',
      imageLink:
        'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&q=80',
      category: 'VR/AR',
      duration: 210,
      teamMembers: 12,
      rating: 4.7,
      date: '2021-12-20',
    },
    {
      id: 32,
      title: '주식 트레이딩 봇',
      description: '자동 매매 알고리즘 시스템',
      imageLink:
        'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
      category: '머신 러닝',
      duration: 180,
      teamMembers: 6,
      rating: 4.8,
      date: '2021-11-12',
    },
    {
      id: 33,
      title: '레시피 공유 앱',
      description: '요리 레시피 커뮤니티 플랫폼',
      imageLink:
        'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80',
      category: '모바일 앱',
      duration: 135,
      teamMembers: 5,
      rating: 4.5,
      date: '2021-10-28',
    },
    {
      id: 34,
      title: '네트워크 모니터링',
      description: '서버 상태 실시간 감시 도구',
      imageLink:
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      category: '클라우드 컴퓨팅',
      duration: 125,
      teamMembers: 7,
      rating: 4.6,
      date: '2021-09-15',
    },
    {
      id: 35,
      title: '이벤트 예약 시스템',
      description: '행사 및 티켓 예약 관리',
      imageLink:
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
      category: '웹 개발',
      duration: 155,
      teamMembers: 9,
      rating: 4.9,
      date: '2021-08-22',
    },
    {
      id: 36,
      title: '얼굴 인식 보안',
      description: '생체인증 출입 관리 시스템',
      imageLink:
        'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80',
      category: 'AI/ML',
      duration: 175,
      teamMembers: 8,
      rating: 4.7,
      date: '2021-07-10',
    },
    {
      id: 37,
      title: '도서 관리 시스템',
      description: '도서관 자동화 솔루션',
      imageLink:
        'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80',
      category: '엔터프라이즈',
      duration: 145,
      teamMembers: 6,
      rating: 4.4,
      date: '2021-06-05',
    },
    {
      id: 38,
      title: '배달 추적 앱',
      description: '실시간 배송 위치 확인 서비스',
      imageLink:
        'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&q=80',
      category: '모바일 앱',
      duration: 120,
      teamMembers: 5,
      rating: 4.8,
      date: '2021-05-18',
    },
    {
      id: 39,
      title: '펫케어 플랫폼',
      description: '반려동물 건강 관리 앱',
      imageLink:
        'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&q=80',
      category: '모바일 앱',
      duration: 140,
      teamMembers: 7,
      rating: 4.6,
      date: '2021-04-25',
    },
    {
      id: 40,
      title: '클라우드 백업 서비스',
      description: '자동 파일 동기화 솔루션',
      imageLink:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
      category: '클라우드 컴퓨팅',
      duration: 200,
      teamMembers: 11,
      rating: 4.9,
      date: '2021-03-12',
    },
    {
      id: 41,
      title: '메타버스 플랫폼',
      description: '가상 세계 소셜 네트워크',
      imageLink:
        'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
      category: 'VR/AR',
      duration: 350,
      teamMembers: 25,
      rating: 4.5,
      date: '2021-02-08',
    },
    {
      id: 42,
      title: '의료 예약 시스템',
      description: '병원 진료 예약 관리 플랫폼',
      imageLink:
        'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
      category: '웹 개발',
      duration: 185,
      teamMembers: 10,
      rating: 4.7,
      date: '2021-01-20',
    },
    {
      id: 43,
      title: '챗GPT 통합 도구',
      description: 'AI 어시스턴트 업무 자동화',
      imageLink:
        'https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?w=800&q=80',
      category: 'AI/ML',
      duration: 95,
      teamMembers: 4,
      rating: 4.8,
      date: '2020-12-15',
    },
    {
      id: 44,
      title: '드론 제어 시스템',
      description: '자율비행 드론 관리 플랫폼',
      imageLink:
        'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80',
      category: 'IoT',
      duration: 220,
      teamMembers: 13,
      rating: 4.6,
      date: '2020-11-05',
    },
    {
      id: 45,
      title: '온라인 투표 시스템',
      description: '블록체인 기반 투명한 투표',
      imageLink:
        'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=800&q=80',
      category: '블록체인',
      duration: 190,
      teamMembers: 9,
      rating: 4.9,
      date: '2020-10-22',
    },
    {
      id: 46,
      title: '여행 플래너 앱',
      description: 'AI 기반 여행 일정 추천',
      imageLink:
        'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80',
      category: '모바일 앱',
      duration: 165,
      teamMembers: 8,
      rating: 4.7,
      date: '2020-09-18',
    },
    {
      id: 47,
      title: '코드 리뷰 도구',
      description: '자동 코드 품질 분석 시스템',
      imageLink:
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
      category: '개발 도구',
      duration: 130,
      teamMembers: 6,
      rating: 4.8,
      date: '2020-08-30',
    },
    {
      id: 48,
      title: '스마트 시티 플랫폼',
      description: '도시 인프라 통합 관리 시스템',
      imageLink:
        'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80',
      category: 'IoT',
      duration: 400,
      teamMembers: 30,
      rating: 4.9,
      date: '2020-07-14',
    },
  ],
};

export default function ProjectList() {
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');

  // 모든 카테고리 추출
  const categories = [
    '전체',
    ...Array.from(new Set(projectMock.data.map((project) => project.category))),
  ];

  // 카테고리별 필터링
  const filteredProjects =
    selectedCategory === '전체'
      ? projectMock.data
      : projectMock.data.filter(
          (project) => project.category === selectedCategory
        );

  return (
    <div className="w-full">
      {/* 카테고리 선택 버튼 */}
      <CategoryList
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* 프로젝트 그리드 */}
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 px-5 w-full">
        {filteredProjects.map((project) => {
          return (
            <div key={project.id}>
              <ProjectCard {...project} />
            </div>
          );
        })}
      </div>

      {/* 결과 없음 메시지 */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          해당 카테고리에 프로젝트가 없습니다.
        </div>
      )}
    </div>
  );
}
