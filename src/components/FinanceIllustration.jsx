function FinanceIllustration() {
  return (
    <div className="overflow-hidden rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 via-white to-orange-100 p-4 sm:p-6">
      <svg
        viewBox="0 0 520 360"
        className="h-auto w-full"
        role="img"
        aria-label="Business consultancy illustration"
      >
        <defs>
          <linearGradient id="panel" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff7ed" />
            <stop offset="100%" stopColor="#ffedd5" />
          </linearGradient>
          <linearGradient id="bar" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fb923c" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
        </defs>

        <rect x="30" y="36" width="460" height="286" rx="22" fill="url(#panel)" />
        <rect x="54" y="60" width="220" height="84" rx="14" fill="#ffffff" />
        <rect x="74" y="86" width="102" height="10" rx="5" fill="#fed7aa" />
        <rect x="74" y="106" width="166" height="8" rx="4" fill="#fdba74" />
        <rect x="290" y="60" width="176" height="170" rx="14" fill="#ffffff" />

        <rect x="320" y="182" width="20" height="30" rx="5" fill="url(#bar)" />
        <rect x="352" y="154" width="20" height="58" rx="5" fill="url(#bar)" />
        <rect x="384" y="132" width="20" height="80" rx="5" fill="url(#bar)" />
        <rect x="416" y="112" width="20" height="100" rx="5" fill="url(#bar)" />

        <path d="M74 258 C118 208, 164 280, 206 240 C248 200, 286 248, 334 216 C378 187, 418 210, 452 172" stroke="#f97316" strokeWidth="7" fill="none" strokeLinecap="round" />

        <circle cx="170" cy="278" r="54" fill="#ffffff" />
        <circle cx="170" cy="278" r="38" fill="#ffedd5" />
        <path d="M170 246 v32 h24" stroke="#ea580c" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />

        <circle cx="426" cy="270" r="42" fill="#ffffff" />
        <path d="M406 270 h40" stroke="#f97316" strokeWidth="6" strokeLinecap="round" />
        <path d="M426 250 v40" stroke="#f97316" strokeWidth="6" strokeLinecap="round" />
      </svg>
    </div>
  )
}

export default FinanceIllustration

