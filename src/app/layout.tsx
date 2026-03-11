import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OpenClaw-Navi.jp | 日本最大の OpenClaw 攻略ポータル",
  description: "オープンソースAIエージェント OpenClaw の導入・使い方・スキル一覧を網罗した日本最大級の攻略サイト。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
