'use client'
import { useState } from 'react';

interface LikeButtonProps {
  initialCount?: number;
  initialIsLiked?: boolean;
  variant?: 'icon' | 'count';
}

export default function LikeButton({ 
  initialCount = 0, 
  initialIsLiked = false,
  variant = 'count'
}: LikeButtonProps) {
  const [count, setCount] = useState(initialCount);
  const [isLiked, setIsLiked] = useState(initialIsLiked);
  const [isLoading, setIsLoading] = useState(false);

  const handleLike = async (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();

    // Optimistic Update - 먼저 UI 업데이트
    const newIsLiked = !isLiked;
    setIsLiked(newIsLiked);
    setCount((prev) => newIsLiked ? prev + 1 : prev - 1);

    setIsLoading(true);
    try {
      // TODO: 실제 API 호출
      // await fetch('/api/like', { method: 'POST', body: JSON.stringify({ projectId }) });
      
      // 임시 딜레이 (실제로는 API 응답 대기)
      await new Promise(resolve => setTimeout(resolve, 300));
    } catch (error) {
      // 실패 시 롤백
      setIsLiked(!newIsLiked);
      setCount((prev) => newIsLiked ? prev - 1 : prev + 1);
      console.error('좋아요 실패:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // icon variant - 기존 디자인 (하트만)
  if (variant === 'icon') {
    return (
      <button
        type="button"
        className="flex items-center justify-center text-rose-500 transition hover:scale-105 cursor-pointer"
        aria-label="찜하기"
        aria-pressed={isLiked}
        onClick={handleLike}
        disabled={isLoading}
      >
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill={isLiked ? 'currentColor' : 'none'}
          stroke="white"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4c1.74 0 3.41.81 4.5 2.09C12.09 4.81 13.76 4 15.5 4 18 4 20 6 20 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </button>
    );
  }

  // count variant - 새 디자인 (숫자 포함)
  return (
    <button
      type="button"
      className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition"
      aria-label="좋아요"
      aria-pressed={isLiked}
      onClick={handleLike}
      disabled={isLoading}
    >
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill={isLiked ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4c1.74 0 3.41.81 4.5 2.09C12.09 4.81 13.76 4 15.5 4 18 4 20 6 20 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
      <span className={`text-sm font-medium ${isLiked ? 'text-rose-500' : 'text-gray-700'}`}>
        {count}
      </span>
    </button>
  );
}
