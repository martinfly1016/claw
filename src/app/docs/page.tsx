import Link from "next/link";
import { BookOpen, Shield, Server, Scale, SearchX } from "lucide-react";
import { DOCS } from "../../lib/docs";

const iconBySlug: Record<string, any> = {
  "openclaw-error-fixes-jp": Shield,
  "security-baseline": Shield,
  "openclaw-github-vercel-workflow-jp": Server,
  "vps-deploy": Server,
  "cloud-vs-selfhosted": Scale,
};

function scoreDoc(query: string, text: string, title: string, slug: string) {
  const q = query.toLowerCase();
  let score = 0;
  const t = title.toLowerCase();
  const s = slug.toLowerCase();
  const x = text.toLowerCase();

  if (t === q) score += 120;
  if (t.startsWith(q)) score += 60;
  if (t.includes(q)) score += 35;
  if (s.includes(q)) score += 25;
  if (x.includes(q)) score += 10;

  return score;
}

function highlight(text: string, query: string) {
  if (!query) return text;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;

  const end = idx + query.length;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="bg-yellow-200/70 rounded px-0.5">{text.slice(idx, end)}</mark>
      {text.slice(end)}
    </>
  );
}

const suggested = ["openclaw", "エラー", "vps", "スキル", "日本語", "github"];

export default async function DocsIndexPage({
  searchParams,
}: {
  searchParams?: Promise<{ q?: string | string[] }>;
}) {
  const sp = (await searchParams) ?? {};
  const rawQ = Array.isArray(sp.q) ? sp.q[0] : sp.q;
  const q = (rawQ ?? "").trim();

  const publicDocs = DOCS.filter((d) => d.indexable !== false);

  const filtered = q
    ? publicDocs
        .map((d) => {
          const blob = `${d.title} ${d.desc} ${d.slug}`;
          const score = scoreDoc(q, blob, d.title, d.slug);
          return { ...d, score };
        })
        .filter((d) => d.score > 0)
        .sort((a, b) => b.score - a.score)
    : publicDocs.map((d) => ({ ...d, score: 0 }));

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-3">ドキュメント</h1>
        <p className="text-slate-600 mb-6">OpenClawの導入・運用・比較まで、公開前提の品質で整備した実践ガイド集。</p>

        <form action="/docs" className="mb-8">
          <input
            name="q"
            defaultValue={rawQ ?? ""}
            placeholder="キーワードで検索（例: エラー / VPS / スキル）"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-hanko/30"
          />
        </form>

        {q && (
          <p className="text-sm text-slate-500 mb-4">
            検索: <span className="font-semibold text-slate-700">{q}</span>（{filtered.length}件）
          </p>
        )}

        {q && filtered.length === 0 && (
          <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex items-start gap-3 text-slate-700">
              <SearchX className="mt-0.5 text-hanko" size={20} />
              <div>
                <p className="font-semibold mb-2">該当するドキュメントが見つかりませんでした。</p>
                <p className="text-sm text-slate-500 mb-3">別のキーワードで再検索してください。おすすめ:</p>
                <div className="flex flex-wrap gap-2">
                  {suggested.map((k) => (
                    <Link key={k} href={`/docs?q=${encodeURIComponent(k)}`} className="text-xs px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700">
                      {k}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((d) => {
            const Icon = iconBySlug[d.slug] ?? BookOpen;
            return (
              <Link
                key={d.slug}
                href={`/docs/${d.slug}`}
                className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg hover:border-hanko transition"
              >
                <div className="inline-flex p-2 rounded-lg bg-hanko/10 text-hanko mb-4">
                  <Icon size={18} />
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">{highlight(d.title, q)}</h2>
                <p className="text-slate-600 text-sm">{highlight(d.desc, q)}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
