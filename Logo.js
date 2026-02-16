export default function Logo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <svg width="36" height="36" viewBox="0 0 64 64">
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#6b7cff" />
          </linearGradient>
        </defs>
        <rect x="6" y="10" width="52" height="44" rx="10" fill="url(#g)" opacity="0.25"/>
        <rect x="12" y="14" width="40" height="36" rx="6" fill="#fff"/>
        <path d="M22 24h20M22 30h16" stroke="#1f2937" strokeWidth="3" opacity="0.3"/>
        <polygon points="32,6 35,14 44,16 37,22 39,30 32,26 25,30 27,22 20,16 29,14" fill="#d4af37"/>
      </svg>
      <strong style={{ fontWeight: 900 }}>My Magic Story Book</strong>
    </div>
  );
}
