export type DocItem = {
  slug: string;
  title: string;
  desc: string;
  author?: string;
  publishedAt?: string;
  updatedAt?: string;
  indexable?: boolean;
};

const DEFAULT_AUTHOR = "Claw-Navi Editorial Team";
const DEFAULT_PUBLISHED = "2026-03-11";
const DEFAULT_UPDATED = "2026-03-11";

export const DOCS: DocItem[] = [
  { slug: "getting-started", title: "OpenClaw使い方完全ガイド", desc: "導入から日本語設定までを最短で解説。" },
  { slug: "top-skills-japan", title: "日本市場向け 推奨スキル Top 10", desc: "業務効率化に直結する厳選スキルを詳細解説。" },
  { slug: "keyword-plan-jp-q2-2026", title: "日本市場 キーワード計画（Q2 2026）", desc: "優先順位付きの公開計画とKPI。", indexable: false },
  { slug: "x-tutorial-signals", title: "X高閲覧チュートリアル需要シグナル", desc: "SNSトレンドから抽出した選題方針。", indexable: false },
  { slug: "top-30-keywords-openclaw-jp", title: "OpenClaw 日本市場 Top30キーワード", desc: "優先度付きの攻略キーワード一覧。", indexable: false },
  { slug: "openclaw-what-it-is-jp", title: "OpenClaw とは？適用業務ガイド", desc: "向いている業務と向いていない業務を整理。" },
  { slug: "openclaw-deploy-options-jp", title: "OpenClaw 三つの導入方式", desc: "ローカル/VPS/ハイブリッドの選び方。" },
  { slug: "openclaw-api-key-pitfalls-jp", title: "OpenClaw API Key 設定の落とし穴", desc: "漏洩・権限・運用事故を防ぐ実務ガイド。" },
  { slug: "openclaw-browser-plugin-troubleshoot-jp", title: "OpenClaw ブラウザプラグイン トラブルシューティング", desc: "Relay接続やtab not foundへの実践対処。" },
  { slug: "openclaw-clawhub-security-jp", title: "ClawHub 安全インストールガイドライン", desc: "スキル導入時のリスク管理ルール。" },
  { slug: "openclaw-sop-four-step-jp", title: "OpenClaw SOP 構築の4ステップ", desc: "安定運用のための手順設計フレーム。" },
  { slug: "openclaw-vps-x-crawl-safe-jp", title: "OpenClaw + VPS X収集の安全運用", desc: "収集系ワークフローの安全設計。" },
  { slug: "openclaw-content-plan-weekly-jp", title: "OpenClaw コンテンツ補強 7日計画", desc: "Xシグナル反映の公開計画。", indexable: false },
  { slug: "openclaw-hybrid-priority-top20-jp", title: "OpenClaw ハイブリッド優先度 Top20", desc: "SEMrush×Xの優先順位モデル。", indexable: false },
  { slug: "openclaw-skills-weekly-trend-2026w11-jp", title: "OpenClaw Skills 週次トレンド（2026-W11）", desc: "X高反応シグナルの週次まとめ。" },
  { slug: "openclaw-wechat-integration-jp", title: "OpenClaw WeChat 連携ガイド", desc: "WeChat導線を安全運用する実装手順。" },
  { slug: "openclaw-wechat-troubleshooting-jp", title: "OpenClaw WeChat 連携トラブルシューティング", desc: "連携障害を即時復旧する運用手引き。" },
  { slug: "openclaw-vs-kimi-minimax-decision-jp", title: "OpenClaw vs Kimi/MiniMax 比較（意思決定版）", desc: "導入目的別に選定基準を整理。" },
  { slug: "clawhub-security-audit-template-jp", title: "ClawHub 安全審査テンプレート", desc: "Skill導入前の監査チェックリスト。" },
  { slug: "openclaw-semrush-keyword-ops-jp", title: "OpenClaw × SEMrush キーワード運用ガイド", desc: "SEMrush 60% + X 40% で回す3日運用。" },
  { slug: "openclaw-traffic-growth-checklist-jp", title: "Claw-Navi 流入成長チェックリスト", desc: "公開後7/14/30日で改善を回す手順。" },
  { slug: "openclaw-keyword-potential-baseline-jp", title: "OpenClaw Keyword Potential Baseline（JP）", desc: "Top20キーワードと落地ページ対応表。", indexable: false },
  { slug: "content-ops-3day-cycle-jp", title: "Claw-Navi コンテンツ運用（3日サイクル）", desc: "継続更新の標準オペレーション。", indexable: false },
  { slug: "openclaw-install-jp", title: "OpenClaw インストール完全手順", desc: "OS別の導入手順と初期確認。" },
  { slug: "openclaw-japanese-settings-jp", title: "OpenClaw 日本語設定ガイド", desc: "日本語運用の標準設定と品質管理。" },
  { slug: "openclaw-skills-recommend-jp", title: "OpenClaw スキルおすすめ", desc: "チーム別に使える導入順付き。" },
  { slug: "openclaw-error-fixes-jp", title: "OpenClaw エラー解決ガイド", desc: "導入時によくある失敗と即効対処。" },
  { slug: "openclaw-github-vercel-workflow-jp", title: "OpenClaw + GitHub + Vercel 実戦", desc: "更新からデプロイまでの運用手順。" },
  { slug: "openclaw-android-termux-jp", title: "OpenClaw Android/Termux 注意点", desc: "モバイル導入時の落とし穴と対策。" },
  { slug: "skill-self-improving-agent-jp", title: "self-improving-agent 実装ガイド", desc: "改善ループ運用の実務導入手順。" },
  { slug: "skill-gog-jp", title: "gog 運用ガイド", desc: "Google Workspace連携の実装と注意点。" },
  { slug: "skill-tavily-search-jp", title: "tavily-search 実戦ガイド", desc: "調査業務の高速化に向けた実装。" },
  { slug: "skill-github-jp", title: "github スキル運用ガイド", desc: "Issue/PR/CI運用の効率化。" },
  { slug: "skill-agent-browser-jp", title: "agent-browser 運用ガイド", desc: "ブラウザ自動化タスクの設計。" },
  { slug: "skill-nano-pdf-jp", title: "nano-pdf 実務ガイド", desc: "文書処理を短縮する導入手順。" },
  { slug: "vps-deploy", title: "VPS本番運用ガイド", desc: "24時間稼働を前提とした設計と運用手順。" },
  { slug: "security-baseline", title: "セキュリティ基準チェックリスト", desc: "公開前に必須の安全設定を体系化。" },
  { slug: "cloud-vs-selfhosted", title: "クラウド型 vs 自社運用 比較レポート", desc: "Kimi/MiniMax系との比較判断に使える実務視点。" },
].map((d) => ({
  author: DEFAULT_AUTHOR,
  publishedAt: DEFAULT_PUBLISHED,
  updatedAt: DEFAULT_UPDATED,
  indexable: true,
  ...d,
}));
