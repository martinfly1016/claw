import Image from "next/image";
import {
  Search,
  Rocket,
  Zap,
  Shield,
  Globe,
  CheckCircle2,
  Server,
  ArrowRight,
  Sparkles,
  LineChart,
  Clock3,
} from "lucide-react";

const quickStart = [
  { title: "Windows", desc: "PowerShellで5分導入", href: "/docs/getting-started" },
  { title: "macOS", desc: "Homebrew + CLIで最速セットアップ", href: "/docs/getting-started" },
  { title: "Linux / Docker", desc: "本番向けの安定構成", href: "/docs/getting-started" },
  { title: "Cloud (VPS)", desc: "24時間稼働の推奨構成", href: "/docs/vps-deploy" },
];

const skills = [
  {
    name: "self-improving-agent",
    category: "人気 #1",
    desc: "自動学習・自動修正ループを回し、運用改善を継続。",
    href: "/docs/skill-self-improving-agent-jp",
  },
  {
    name: "gog",
    category: "生産性",
    desc: "Google Workspace（Gmail/Calendar/Drive）連携の中核スキル。",
    href: "/docs/skill-gog-jp",
  },
  {
    name: "tavily-search",
    category: "検索",
    desc: "高精度Web検索を実行し、調査タスクの速度を向上。",
    href: "/docs/skill-tavily-search-jp",
  },
  {
    name: "github",
    category: "開発",
    desc: "Issue/PR運用を効率化。開発ワークフローに直結。",
    href: "/docs/skill-github-jp",
  },
  {
    name: "agent-browser",
    category: "自動化",
    desc: "ブラウザ操作の自動実行により反復作業を削減。",
    href: "/docs/skill-agent-browser-jp",
  },
  {
    name: "nano-pdf",
    category: "文書",
    desc: "PDF編集・抽出・要約を一体化して実務処理を短縮。",
    href: "/docs/skill-nano-pdf-jp",
  },
];

const compareRows = [
  ["実行場所", "ローカル / 自社VPS", "ベンダークラウド"],
  ["機密データ管理", "高コントロール", "ポリシー依存"],
  ["拡張性", "非常に高い（Skill内製可）", "中〜高（制限あり）"],
  ["導入速度", "中（初期設計必要）", "高（即時利用）"],
  ["長期コスト", "最適化余地が大きい", "課金体系依存"],
];

const faqs = [
  {
    q: "OpenClawは無料で使えますか？",
    a: "本体はオープンソースで無料です。実運用では使用するLLM API（Claude/OpenAI/Gemini等）の従量課金が発生します。",
  },
  {
    q: "日本語だけで運用できますか？",
    a: "可能です。システムプロンプトを日本語固定にし、運用手順を統一すれば、社内運用でも実用レベルで安定します。",
  },
  {
    q: "Kimi/MiniMax系のクラウドAgentより優れている点は？",
    a: "最大の差は“制御性”です。データ保護、権限、実行ロジックを自社要件に合わせて深く設計できます。",
  },
  {
    q: "最初に何から着手すべきですか？",
    a: "Quick Startで導入 → browser/github/healthcheckの3スキル導入 → 週次KPI（削減時間・再現率）測定、の順がおすすめです。",
  },
];

const cases = [
  {
    title: "開発チーム運用",
    value: "レビュー工数 -28%",
    desc: "Issue要約・PR下書き・CI監視をOpenClawに集約。",
  },
  {
    title: "マーケ/調査運用",
    value: "調査時間 -41%",
    desc: "競合モニタリングと週次サマリを自動化。",
  },
  {
    title: "文書ワークフロー",
    value: "処理速度 2.1x",
    desc: "PDF分析 + ルール化で社内ナレッジ作成を高速化。",
  },
];

const latestTutorials = [
  {
    title: "OpenClaw × SEMrush キーワード運用ガイド",
    href: "/docs/openclaw-semrush-keyword-ops-jp",
    tag: "運用",
  },
  {
    title: "Claw-Navi 流入成長チェックリスト",
    href: "/docs/openclaw-traffic-growth-checklist-jp",
    tag: "成長",
  },
  {
    title: "OpenClaw vs Kimi / MiniMax 比較（意思決定版）",
    href: "/docs/openclaw-vs-kimi-minimax-decision-jp",
    tag: "比較",
  },
  {
    title: "OpenClaw API Key 設定の落とし穴（実務版）",
    href: "/docs/openclaw-api-key-pitfalls-jp",
    tag: "重要",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <header className="border-b border-slate-200 bg-white/95 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/logo-header.webp"
              alt="Claw-Navi"
              width={118}
              height={64}
              className="block object-contain"
              priority
              sizes="118px"
            />
          </a>
          <nav className="hidden md:flex gap-7 text-sm font-semibold text-slate-700">
            <a href="#how-to" className="hover:text-hanko transition-colors">使い方</a>
            <a href="#skills" className="hover:text-hanko transition-colors">スキル一覧</a>
            <a href="#tutorials" className="hover:text-hanko transition-colors">チュートリアル</a>
            <a href="#value" className="hover:text-hanko transition-colors">導入価値</a>
            <a href="#cases" className="hover:text-hanko transition-colors">導入事例</a>
            <a href="#compare" className="hover:text-hanko transition-colors">比較</a>
            <a href="#faq" className="hover:text-hanko transition-colors">FAQ</a>
          </nav>
          <a
            href="/docs/getting-started"
            className="hidden md:inline-flex items-center rounded-full bg-hanko px-4 py-2 text-white text-sm font-semibold hover:brightness-110 transition"
          >
            無料で導入を始める
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-slate-900 to-navy text-white px-4 pt-20 pb-24">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,#ffffff_0%,transparent_35%)]" />
        <div className="relative max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm mb-6">
            <Sparkles size={16} /> 2026 日本市場向け OpenClaw 実務運用ポータル
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-4xl">
            OpenClaw導入を、
            <span className="text-red-300">“成果が出る運用”</span>まで最短化。
          </h1>
          <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-3xl leading-relaxed">
            導入手順・実務スキル・VPS本番化・クラウド比較を一気通貫で提供。
            日本語運用を前提に、チームで使える品質まで引き上げます。
          </p>

          <form action="/docs" className="mt-10 grid md:grid-cols-[1fr_auto] gap-4 items-center max-w-3xl">
            <div className="relative">
              <input
                name="q"
                type="text"
                placeholder="例: OpenClaw 日本語設定 / VPS 構築 / スキルおすすめ"
                className="w-full h-14 px-5 pl-12 rounded-full text-slate-900 text-base focus:outline-none focus:ring-4 focus:ring-hanko/40"
              />
              <Search className="absolute left-4 top-4 text-slate-400" size={20} />
            </div>
            <button
              type="submit"
              className="inline-flex h-14 items-center justify-center rounded-full bg-hanko px-7 text-white font-bold hover:brightness-110 transition"
            >
              ドキュメント検索
            </button>
          </form>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              ["24万+", "GitHub Stars"],
              ["50+", "実戦スキル"],
              ["5分", "最短導入"],
              ["24/7", "本番運用"],
            ].map(([v, l]) => (
              <div key={l} className="rounded-xl border border-white/20 bg-white/10 p-4">
                <div className="text-2xl font-extrabold">{v}</div>
                <div className="text-blue-100 text-sm">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-to" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between gap-4 mb-10">
            <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Rocket className="text-hanko" /> クイックスタート
            </h2>
            <a href="/docs/getting-started" className="text-sm font-semibold text-hanko hover:underline">
              完全ガイドへ <ArrowRight className="inline" size={16} />
            </a>
          </div>
          <p className="text-slate-600 mb-6 leading-relaxed">
            クイックスタートでは、OS別に最短で立ち上げる導線を提供しています。まずはローカルで動作確認し、
            次に権限分離とログ設計を組み込むことで、本番運用へ安全に移行できます。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {quickStart.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
              >
                <h3 className="font-bold text-xl mb-2 text-slate-900 group-hover:text-hanko">{item.title}</h3>
                <p className="text-slate-600 text-sm mb-5">{item.desc}</p>
                <span className="inline-flex items-center text-hanko font-semibold text-sm">
                  導入ガイドを見る <ArrowRight size={14} className="ml-1" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Zap className="text-amber-500" /> 注目のスキル（実データ）
            </h2>
            <p className="mt-3 text-slate-600">OpenClawの実際のエコシステムから、導入効果が高いスキルを厳選して掲載しています。</p>
            <p className="mt-3 text-slate-600 leading-relaxed">
              各スキルページでは、用途だけでなく導入順・権限設計・失敗時の回避策まで解説しています。
              これにより「入れただけで使われない」状態を避け、運用成果に直結させることを狙います。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((s) => (
              <a key={s.name} href={s.href} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 hover:border-hanko hover:bg-white hover:shadow-lg transition">
                <div className="inline-flex rounded-full bg-hanko/10 text-hanko text-xs font-bold px-3 py-1 mb-4">{s.category}</div>
                <h3 className="font-bold text-xl text-slate-900 mb-2">{s.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{s.desc}</p>
                <span className="text-hanko font-semibold text-sm">詳細を見る →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="value" className="py-16 px-4 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">OpenClaw 導入で成果を出すために</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Claw-Navi は、インストール手順だけで終わらせず、運用設計・セキュリティ・改善サイクルまでを含めた
              実務導入を重視しています。特に日本市場では、権限管理、監査対応、チーム運用の整備が成果差に直結します。
            </p>
            <p className="text-slate-700 leading-relaxed">
              本サイトのガイドは、再現可能な手順、失敗時のリカバリ、KPI設計（時間削減率・再実行率・品質安定性）を
              一体化して提供します。
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="font-bold text-slate-900 mb-3">参考リンク（権威ソース）</h3>
            <ul className="space-y-2 text-sm">
              <li><a className="text-hanko hover:underline" href="https://github.com/openclaw/openclaw" target="_blank" rel="noopener noreferrer">OpenClaw GitHub 公式</a></li>
              <li><a className="text-hanko hover:underline" href="https://docs.openclaw.ai" target="_blank" rel="noopener noreferrer">OpenClaw 公式ドキュメント</a></li>
              <li><a className="text-hanko hover:underline" href="https://github.com/openclaw/openclaw/tree/main/skills" target="_blank" rel="noopener noreferrer">OpenClaw Skills リファレンス</a></li>
              <li><a className="text-hanko hover:underline" href="https://platform.openai.com/docs" target="_blank" rel="noopener noreferrer">OpenAI API Docs</a></li>
              <li><a className="text-hanko hover:underline" href="https://ai.google.dev/gemini-api/docs" target="_blank" rel="noopener noreferrer">Google Gemini API Docs</a></li>
            </ul>
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <LineChart className="text-hanko" /> 導入事例（モデルケース）
          </h2>
          <p className="text-slate-700 leading-relaxed mb-8">
            以下の数値は、OpenClawを業務導線へ組み込んだ際の典型的な改善パターンを示しています。
            重要なのは「導入したか」ではなく、役割分担・権限設計・運用ルールを先に決めた上で継続運用したかどうかです。
            Claw-Naviでは、この再現条件まで含めて手順化しています。
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {cases.map((c) => (
              <div key={c.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-sm text-slate-500 mb-2">{c.title}</p>
                <p className="text-2xl font-extrabold text-hanko mb-3">{c.value}</p>
                <p className="text-slate-700 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tutorials" className="py-16 px-4 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6 gap-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">最新チュートリアル</h2>
            <a href="/docs" className="text-sm font-semibold text-hanko hover:underline">一覧を見る</a>
          </div>
          <p className="text-slate-700 leading-relaxed mb-5">
            このセクションでは、検索意図の強いトピックを優先して更新しています。
            単なるニュースまとめではなく、導入時の失敗パターン、再現可能な手順、
            本番運用で必要な安全設計までを1ページで理解できる構成にしています。
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {latestTutorials.map((item) => (
              <a key={item.title} href={item.href} className="rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-hanko p-4 transition">
                <div className="inline-flex text-xs font-bold px-2 py-1 rounded bg-hanko/10 text-hanko mb-2">{item.tag}</div>
                <div className="font-semibold text-slate-900">{item.title}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="compare" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto mb-6">
          <p className="text-slate-700 leading-relaxed">
            比較セクションは、ツールの優劣を断定するためではなく、導入条件を明確化するために設計しています。
            たとえば短期検証ではクラウド型が有利でも、機密性や監査要件が強い業務では自社運用が有効です。
            目的に応じて選択基準を固定すると、導入失敗の大半は回避できます。
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
          <div className="rounded-3xl bg-gradient-to-br from-hanko/10 to-white border border-hanko/20 p-8">
            <h2 className="text-3xl font-bold text-hanko mb-4">OpenClaw vs Kimi / MiniMax / Claude Code</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              速度・制御性・監査対応の観点で、どこに勝ち筋があるかを実務基準で比較。
              導入判断に必要な論点だけを短時間で把握できます。
            </p>
            <a href="/docs/cloud-vs-selfhosted" className="inline-flex items-center rounded-full bg-hanko text-white px-6 py-3 font-bold hover:brightness-110 transition">
              比較レポートを読む <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b">
                  <th className="py-3">項目</th>
                  <th className="py-3">OpenClaw</th>
                  <th className="py-3">クラウド型</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((r) => (
                  <tr key={r[0]} className="border-b last:border-0">
                    <td className="py-3 font-semibold text-slate-700">{r[0]}</td>
                    <td className="py-3 text-slate-700">{r[1]}</td>
                    <td className="py-3 text-slate-700">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="vps" className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="rounded-3xl border border-slate-200 p-8 bg-slate-50">
            <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-2 mb-4">
              <Server className="text-navy" /> VPS本番運用ガイド
            </h2>
            <p className="text-slate-600 mb-6">
              24時間稼働を前提に、コスト・安定性・セキュリティを両立する構成を提示します。
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "初期構築テンプレート（Ubuntu + Node + process manager）",
                "監視・再起動・ログ保全の標準設計",
                "秘密情報の分離と最小権限ポリシー",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-slate-700">
                  <CheckCircle2 className="text-emerald-500 mt-0.5" size={18} /> {t}
                </li>
              ))}
            </ul>
            <a href="/docs/vps-deploy" className="inline-flex items-center font-semibold text-hanko hover:underline">
              VPS導入手順を見る <ArrowRight className="ml-1" size={15} />
            </a>
          </div>

          <div className="rounded-3xl border border-slate-200 p-8 bg-navy text-white">
            <h3 className="text-2xl font-bold mb-3 flex items-center gap-2"><Shield size={22} /> セキュリティ基準</h3>
            <p className="text-blue-100 mb-6">公開前に必須の安全基準をチェックリスト化。運用事故の未然防止を優先します。</p>
            <div className="space-y-3 text-sm">
              {[
                "APIキーの環境分離（dev / prod）",
                "不要権限スキルの無効化",
                "監査ログ保存ポリシー",
                "秘密情報のGit流出防止",
              ].map((i) => (
                <div key={i} className="rounded-xl bg-white/10 border border-white/15 p-3">{i}</div>
              ))}
            </div>
            <a href="/docs/security-baseline" className="inline-flex mt-6 items-center text-white font-semibold hover:underline">
              セキュリティガイドへ <ArrowRight className="ml-1" size={15} />
            </a>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 text-slate-900">
            <Globe className="text-hanko" /> よくある質問
          </h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-slate-200 bg-white p-5">
                <summary className="cursor-pointer list-none font-bold text-slate-900 flex items-center justify-between gap-4">
                  <span>{f.q}</span>
                  <span className="text-hanko group-open:rotate-45 transition">＋</span>
                </summary>
                <p className="mt-3 text-slate-600 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600 flex items-start gap-2">
            <Clock3 size={18} className="text-hanko mt-0.5" />
            導入相談は「初期構築」「運用設計」「セキュリティ」の3軸で整理すると、最短で意思決定できます。
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <footer className="mt-auto bg-slate-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-center">
          <div>
            <div className="text-xl font-bold">Claw-Navi</div>
            <p className="text-slate-400 text-sm mt-2">日本市場向け OpenClaw 実務運用ポータル</p>
          </div>
          <div className="flex flex-wrap gap-6 text-slate-300 text-sm md:justify-center">
            <a href="/docs" className="hover:text-white">ドキュメント</a>
            <a href="/about" className="hover:text-white">運営者情報</a>
            <a href="/privacy" className="hover:text-white">プライバシーポリシー</a>
            <a href="/docs/security-baseline" className="hover:text-white">免責事項</a>
          </div>
          <div className="text-slate-500 text-sm md:text-right">
            © 2026 Claw-Navi<br />Powered by Mojimoon Art Lab
          </div>
        </div>
      </footer>
    </div>
  );
}
