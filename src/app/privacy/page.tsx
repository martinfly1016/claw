export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-16">
      <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl p-8 md:p-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">プライバシーポリシー</h1>
        <p className="text-slate-700 leading-relaxed mb-6">
          Claw-Navi（以下「当サイト」）は、利用者のプライバシーを尊重し、
          取得する情報を必要最小限に限定して取り扱います。
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-3">1. 取得する情報</h2>
        <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
          <li>アクセス解析に必要な技術情報（端末情報、閲覧ページ、参照元など）</li>
          <li>お問い合わせ時に利用者が任意で提供する情報</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-900 mb-3">2. 利用目的</h2>
        <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
          <li>サイト品質の改善</li>
          <li>障害対応および不正利用の防止</li>
          <li>お問い合わせ対応</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-900 mb-3">3. 情報の管理</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          当サイトは取得した情報を適切に管理し、法令で認められる場合を除き、
          本人の同意なく第三者に提供しません。
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-3">4. 外部サービスについて</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          当サイトは、アクセス解析や配信最適化のために外部サービスを利用する場合があります。
          その際は各サービス提供者のプライバシーポリシーに基づいて情報が処理される場合があります。
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-3">5. ポリシーの改定</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          本ポリシーは必要に応じて改定されます。改定後の内容は本ページにて公表します。
        </p>

        <p className="text-sm text-slate-500">最終更新日: 2026-03-11</p>
      </div>
    </main>
  );
}
