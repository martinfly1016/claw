export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-16">
      <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl p-8 md:p-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">運営者情報（About Claw-Navi）</h1>
        <p className="text-slate-700 leading-relaxed mb-6">
          Claw-Navi は、OpenClaw の導入・運用・改善を日本語で体系化するための実務メディアです。
          単なるニュース要約ではなく、再現可能な手順・安全な運用・継続改善の3点を重視してコンテンツを作成しています。
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-3">ミッション</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          「AIを導入したのに現場で使われない」をなくすこと。
          Claw-Navi は、導入時の学習コストを下げ、実務に定着するところまで伴走する情報設計を目指します。
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-3">編集方針</h2>
        <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
          <li>再現できる手順を優先し、抽象論で終わらせない</li>
          <li>セキュリティ・権限設計を必ず併記する</li>
          <li>日本市場の運用要件に合わせて情報を翻訳・再構成する</li>
          <li>更新日・参考情報を明記し、継続的に内容を改善する</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-900 mb-3">運営情報</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          ブランド: <strong>Claw-Navi</strong><br />
          企画・運営: <strong>Mojimoon Art Lab</strong><br />
          対象読者: OpenClawを業務で活用したい個人・チーム・企業
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-3">免責事項</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          本サイトの情報は執筆時点の内容です。外部サービスやAPI仕様の変更により、
          手順や画面が異なる場合があります。実運用では検証環境で確認した上で本番適用してください。
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-3">お問い合わせ</h2>
        <p className="text-slate-700">
          連携・監修・掲載依頼は、運営チャネルからご連絡ください。
        </p>
      </div>
    </main>
  );
}
