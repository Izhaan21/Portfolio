const COMMITS = [
  { prompt: '❯', branch: 'main', sep: '·', msg: 'feat: add Firebase auth integration' },
  { prompt: '❯', branch: 'dev', sep: '·', msg: 'fix: optimize Flutter build pipeline' },
  { prompt: '❯', branch: 'main', sep: '·', msg: 'chore: deploy to Play Store v2.1.0' },
  { prompt: '❯', branch: 'feat/ui', sep: '·', msg: 'style: implement glassmorphism design' },
  { prompt: '❯', branch: 'main', sep: '·', msg: 'feat: integrate Gemini AI assistant' },
  { prompt: '❯', branch: 'dev', sep: '·', msg: 'refactor: migrate to Jetpack Compose' },
  { prompt: '❯', branch: 'main', sep: '·', msg: 'perf: reduce app startup time 40%' },
  { prompt: '❯', branch: 'hotfix', sep: '·', msg: 'fix: resolve memory leak in player' },
];

export default function TickerTape() {
  const repeated = [...COMMITS, ...COMMITS, ...COMMITS, ...COMMITS];
  return (
    <div className="ticker-wrap">
      <div className="ticker-inner">
        {repeated.map((item, i) => (
          <span key={i} className="ticker-item">
            <span className="tick-prompt">{item.prompt}</span>
            <span className="tick-branch">({item.branch})</span>
            <span className="tick-sep">{item.sep}</span>
            {item.msg}
            <span className="tick-sep" style={{ margin: '0 16px' }}>│</span>
          </span>
        ))}
      </div>
    </div>
  );
}
