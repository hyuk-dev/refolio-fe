export default function Counter() {
  return (
    <div className="w-full bg-primary text-white shadow-md">
      <div className="mx-auto flex max-w-4xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        {[
          { label: '오늘 방문자 수', value: '100', icon: '🔥' },
          { label: '전체 방문자 수', value: '100,000', icon: '👀' },
          { label: '전체 회원 수', value: '5,000', icon: '🧑‍🤝‍🧑' },
        ].map(({ label, value, icon }, idx) => (
          <div
            key={label}
            className="flex flex-1 items-center justify-between rounded-xl bg-white/10 px-4 py-3 backdrop-blur"
          >
            <div className="flex items-center gap-2 text-sm text-white/90">
              <span className="text-base">{icon}</span>
              <span>{label}</span>
            </div>
            <div className="text-lg font-semibold tabular-nums">{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
