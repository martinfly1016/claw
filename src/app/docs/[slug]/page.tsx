import fs from "fs";
import path from "path";
import { marked } from "marked";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import type { Metadata } from "next";
import { DOCS } from "../../../lib/docs";

function getDocFilePath(slug: string) {
  return path.join(process.cwd(), "src/content/docs", `${slug}.md`);
}

export function generateStaticParams() {
  return DOCS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doc = DOCS.find((d) => d.slug === slug);

  if (!doc) {
    return {
      title: "記事が見つかりません | Claw-Navi",
    };
  }

  const canonical = `https://www.claw-navi.com/docs/${slug}`;
  const desc = doc.desc || `${doc.title}の導入手順、注意点、失敗例を日本向けに解説します。`;

  return {
    title: `${doc.title} | Claw-Navi`,
    description: desc,
    alternates: { canonical },
    robots: doc.indexable === false ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: `${doc.title} | Claw-Navi`,
      description: desc,
      type: "article",
      url: canonical,
      images: [
        {
          url: "/og-cover.png",
          width: 1200,
          height: 630,
          alt: `${doc.title} | Claw-Navi`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${doc.title} | Claw-Navi`,
      description: desc,
      images: ["/og-cover.png"],
    },
  };
}

export default async function DocPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = DOCS.find((d) => d.slug === slug);
  const filePath = getDocFilePath(slug);

  if (!fs.existsSync(filePath) || !doc) {
    return <div className="p-20 text-center text-gray-500">記事が見つかりませんでした。</div>;
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const htmlContent = marked(fileContent);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: doc.title,
    description: doc.desc,
    datePublished: doc.publishedAt,
    dateModified: doc.updatedAt,
    author: {
      "@type": "Organization",
      name: doc.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Claw-Navi",
    },
    mainEntityOfPage: `https://www.claw-navi.com/docs/${slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.claw-navi.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Docs",
        item: "https://www.claw-navi.com/docs",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: doc.title,
        item: `https://www.claw-navi.com/docs/${slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b h-16 flex items-center px-4 bg-gray-50">
        <Link href="/docs" className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-navy">
          <ChevronLeft size={16} /> ドキュメント一覧へ戻る
        </Link>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <nav className="text-sm text-slate-500 mb-4">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-2">&gt;</span>
          <Link href="/docs" className="hover:underline">Docs</Link>
          <span className="mx-2">&gt;</span>
          <span className="text-slate-700">{doc.title}</span>
        </nav>

        <div className="mb-8 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
          Author: <span className="font-medium">{doc.author}</span>
          <span className="mx-3">|</span>
          Published: <span className="font-medium">{doc.publishedAt}</span>
          <span className="mx-3">|</span>
          Updated: <span className="font-medium">{doc.updatedAt}</span>
        </div>

        <article
          className="prose prose-slate max-w-none
          prose-headings:text-navy prose-headings:font-bold
          prose-h1:text-3xl prose-h1:mb-8
          prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-b prose-h2:pb-2
          prose-p:text-gray-700 prose-p:leading-relaxed
          prose-code:bg-gray-100 prose-code:p-1 prose-code:rounded
          prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-4 prose-pre:rounded-lg"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <footer className="border-t py-12 bg-gray-50 text-center text-sm text-gray-500">
        © 2026 Claw-Navi | Powered by Mojimoon Art Lab
      </footer>
    </div>
  );
}
