'use client';

import { useState } from 'react';
import Image from 'next/image';
import Tag from '@/components/tag';

export default function NewProjectPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [detailedDescription, setDetailedDescription] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');
  const [demoLink, setDemoLink] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [thumbnailPreview, setThumbnailPreview] = useState<string>('');
  const [images, setImages] = useState<string[]>([]);

  const handleAddTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 실제로는 여기서 API 호출
    console.log({
      title,
      description,
      detailedDescription,
      tags,
      demoLink,
      githubLink,
      thumbnailPreview,
      images,
    });
  };

  return (
    <div className="w-full max-w-[950px] mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
          새 프로젝트 등록
        </h1>
        <p className="text-sm sm:text-base text-gray-600">
          멋진 프로젝트를 공유해보세요!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* 프로젝트 제목 */}
        <div>
          <label className="block text-lg font-semibold text-gray-900 mb-3">
            프로젝트 제목 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="프로젝트 제목을 입력하세요"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        {/* 썸네일 이미지 */}
        <div>
          <label className="block text-lg font-semibold text-gray-900 mb-3">
            썸네일 이미지 <span className="text-red-500">*</span>
          </label>
          <div className="space-y-3">
            <input
              type="text"
              value={thumbnailPreview}
              onChange={(e) => setThumbnailPreview(e.target.value)}
              placeholder="이미지 URL을 입력하세요"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {thumbnailPreview && (
              <div className="rounded-2xl overflow-hidden bg-gray-100 max-h-96">
                <Image
                  src={thumbnailPreview}
                  alt="썸네일 미리보기"
                  width={800}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}
          </div>
        </div>

        {/* 간단한 설명 */}
        <div>
          <label className="block text-lg font-semibold text-gray-900 mb-3">
            프로젝트 소개 <span className="text-red-500">*</span>
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="프로젝트에 대한 간단한 소개를 입력하세요"
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            required
          />
          <p className="mt-2 text-sm text-gray-500">
            프로젝트의 핵심 내용을 간단히 요약해주세요.
          </p>
        </div>

        {/* 상세 설명 */}
        <div>
          <label className="block text-lg font-semibold text-gray-900 mb-3">
            상세 내용
          </label>
          <textarea
            value={detailedDescription}
            onChange={(e) => setDetailedDescription(e.target.value)}
            placeholder="프로젝트의 주요 기능, 기술적 특징, 개발 과정 등을 상세히 작성해주세요"
            rows={10}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
        </div>

        {/* 기술 스택 태그 */}
        <div>
          <label className="block text-lg font-semibold text-gray-900 mb-3">
            기술 스택
          </label>
          <div className="flex gap-2 mb-3">
            <input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleAddTag();
                }
              }}
              placeholder="기술 스택을 입력하세요 (예: React, TypeScript)"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="button"
              onClick={handleAddTag}
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 font-medium"
            >
              추가
            </button>
          </div>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <div
                  key={tag}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full"
                >
                  <span>{tag}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(tag)}
                    className="text-blue-700 hover:text-blue-900"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 링크 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-semibold text-gray-900 mb-3">
              데모 링크
            </label>
            <input
              type="url"
              value={demoLink}
              onChange={(e) => setDemoLink(e.target.value)}
              placeholder="https://example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-lg font-semibold text-gray-900 mb-3">
              GitHub 링크
            </label>
            <input
              type="url"
              value={githubLink}
              onChange={(e) => setGithubLink(e.target.value)}
              placeholder="https://github.com/username/repo"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* 추가 스크린샷 */}
        <div>
          <label className="block text-lg font-semibold text-gray-900 mb-3">
            추가 스크린샷
          </label>
          <div className="space-y-3">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="이미지 URL을 입력하세요"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    const input = e.currentTarget;
                    if (input.value.trim()) {
                      setImages([...images, input.value.trim()]);
                      input.value = '';
                    }
                  }
                }}
              />
              <button
                type="button"
                onClick={(e) => {
                  const input = e.currentTarget
                    .previousElementSibling as HTMLInputElement;
                  if (input.value.trim()) {
                    setImages([...images, input.value.trim()]);
                    input.value = '';
                  }
                }}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 font-medium"
              >
                추가
              </button>
            </div>
            {images.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((image, index) => (
                  <div key={index} className="relative group">
                    <div className="rounded-xl overflow-hidden bg-gray-100">
                      <Image
                        src={image}
                        alt={`스크린샷 ${index + 1}`}
                        width={300}
                        height={200}
                        className="w-full h-40 object-cover"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        setImages(images.filter((_, i) => i !== index))
                      }
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 제출 버튼 */}
        <div className="flex gap-4 pt-6 border-t border-gray-200">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="flex-1 px-6 py-4 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 font-semibold text-lg"
          >
            취소
          </button>
          <button
            type="submit"
            className="flex-1 px-6 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-semibold text-lg"
          >
            프로젝트 등록
          </button>
        </div>
      </form>
    </div>
  );
}
