import Image from "next/image";
import { Search, Rocket, Zap, Shield, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="OpenClaw-Navi" width={180} height={60} priority />
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#how-to" className="hover:text-hanko transition-colors">使い方</a>
            <a href="#skills" className="hover:text-hanko transition-colors">スキル一覧</a>
            <a href="#cases" className="hover:text-hanko transition-colors">導入事例</a>
            <a href="#vps" className="hover:text-hanko transition-colors">VPS推薦</a>
          </nav>
          <div className="md:hidden">
            {/* Mobile menu icon would go here */}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-navy py-20 px-4 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            日本最大の OpenClaw 攻略ポータル
          </h1>
          <p className="text-xl text-blue-100 mb-10">
            インストールから高度な自動化スキルまで全網羅。あなたのAIエージェントを極めよう。
          </p>
          
          <div className="relative max-w-2xl mx-auto">
            <input 
              type="text" 
              placeholder="スキルやエラー解決方法を検索..." 
              className="w-full h-16 px-6 pl-14 rounded-full text-navy text-lg focus:outline-none focus:ring-4 focus:ring-hanko/30"
            />
            <Search className="absolute left-5 top-5 text-gray-400" size={24} />
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section id="how-to" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-10 flex items-center gap-2">
            <Rocket className="text-hanko" /> クイックスタート (Quick Start)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {["Windows", "MacOS", "Linux / Docker", "Cloud (VPS)"].map((platform) => (
              <div key={platform} className="bg-white p-6 rounded-xl border hover:shadow-lg transition-shadow cursor-pointer group">
                <h3 className="font-bold text-lg mb-2 group-hover:text-hanko">{platform}</h3>
                <p className="text-sm text-gray-500">導入ガイドを見る &rarr;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Skills */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-10 flex items-center gap-2">
            <Zap className="text-yellow-500" /> 注目のスキル (Featured Skills)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="border rounded-2xl overflow-hidden hover:border-hanko transition-colors">
                <div className="h-40 bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-300 font-bold">ICON {i}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">Skill Name {i}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    OpenClawの能力を拡張する強力なスキル。日常業務の自動化に最適です。
                  </p>
                  <button className="text-hanko font-medium text-sm hover:underline">
                    詳細を見る &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Catch */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto bg-hanko/5 border border-hanko/20 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-bold text-hanko mb-4">OpenClaw vs Kimi / MiniMax / Claude Code</h2>
            <p className="text-gray-700">
              なぜ今、日本で自律型Agentが必要なのか？プライバシー、カスタマイズ性、コストを徹底比較。
            </p>
          </div>
          <button className="bg-hanko text-white px-8 py-4 rounded-full font-bold hover:brightness-110 transition-all whitespace-nowrap">
            比較レポートを読む
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-bold">OpenClaw-Navi.jp</div>
          <div className="flex gap-8 text-gray-400 text-sm">
            <a href="#">プライバシーポリシー</a>
            <a href="#">免責事項</a>
            <a href="#">お問い合わせ</a>
          </div>
          <div className="text-gray-500 text-sm">
            © 2026 OpenClaw-Navi.jp | Powered by Mojimoon Art Lab
          </div>
        </div>
      </footer>
    </div>
  );
}
