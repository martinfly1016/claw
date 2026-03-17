# OpenClaw + GitHub + Vercel 実践運用ガイド（詳細版）

Claw-Navi のようなポータルサイトや、OpenClaw で生成したコンテンツを Web に公開する場合、GitHub と Vercel を組み合わせた CI/CD（自動デプロイ）環境を構築するのが最も効率的です。

---

## 1. 構築のメリット
- **自動更新**: GitHub へ `push` するだけで、数分以内に本番サイトが更新される。
- **プレビュー機能**: 修正内容を公開前に確認できる「Preview Deployment」。
- **スケーラビリティ**: Vercel の CDN により、日本全国（および世界）から高速にアクセス可能。

---

## 2. 実装ステップ

### Step 1: リポジトリの準備
ローカルのプロジェクトを GitHub にプッシュします。
```bash
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/yourname/your-repo.git
git push -u origin main
```

### Step 2: Vercel との連携
1. [Vercel Dashboard](https://vercel.com/dashboard) にログイン。
2. 「Add New」→「Project」を選択。
3. 対象の GitHub リポジトリをインポート。

### Step 3: 環境変数の設定（重要）
API キーなどを Vercel の設定画面から入力します。
- `NEXT_PUBLIC_API_URL`
- `OPENAI_API_KEY` (サーバーサイド処理がある場合)

---

## 3. 実務での運用 Tips

### プレビュー環境の活用
ブランチ（例：`develop`）を作成して push すると、Vercel が専用のプレビュー URL を発行します。これをチーム内で確認してから `main` へマージ（Merge）することで、デプロイ事故を防げます。

### ビルドエラーの対処
- **Node.js バージョンの不一致**: Vercel の Settings で Node.js バージョンをローカルと合わせる（例：v20.x）。
- **依存パッケージの不足**: `package.json` に必要なライブラリがすべて含まれているか確認。

---

## 4. セキュリティ管理
- **`.env` ファイルの無視**: 絶対に GitHub へ `.env` をコミットしない（`.gitignore` に追記）。
- **デプロイの制限**: Vercel の「Deployment Protection」を有効にし、プレビュー環境にパスワードをかけることが可能です。

---

## 5. KPI
- **デプロイ時間**: commit から反映完了まで 3分以内。
- **デプロイ成功率**: ビルドエラーの発生頻度。

---

## 次に読むべきガイド
- [キーワード運用ガイド](/docs/openclaw-semrush-keyword-ops-jp)
- [流量成長チェックリスト](/docs/openclaw-traffic-growth-checklist-jp)

---

## 参考
- Vercel Documentation: https://vercel.com/docs
- GitHub Desktop: https://desktop.github.com/
