export default function SearchBar() {
  return (
    <div className="relative w-full sm:min-w-[140px] sm:w-auto">
      <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
        <svg
          aria-hidden="true"
          className="h-4 w-4 text-gray-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="7" />
          <line x1="16.5" y1="16.5" x2="21" y2="21" />
        </svg>
      </div>
      <input
        type="text"
        placeholder="프로젝트 검색..."
        className="w-full h-10 rounded-xl border border-gray-300 px-4 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}
