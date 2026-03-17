# OpenClaw エラー解決ガイド（日本語・実務強化版）

OpenClaw導入時の代表的な障害を、
**症状 → 原因 → 即時復旧 → 再発防止** の順で整理しました。

> 先に結論: エラーの大半は「環境変数」「権限」「バージョン差分」で発生します。

---

## 0. まず最初に確認する3点

1. `openclaw --version` が返るか
2. `openclaw status` に重大エラーが出ていないか
3. APIキーが現在シェルに反映されているか

---

## 1. `command not found: openclaw`

### 症状
- コマンド実行時に openclaw が見つからない

### 主因
- CLI未導入
- PATH未反映

### 即時復旧
```bash
npm i -g @openclaw/cli
openclaw --version
```

### 再発防止
- 環境構築手順を runbook 化
- 新端末導入時に同じ初期化スクリプトを実行

---

## 2. `No API key provided`

### 症状
- モデル呼び出し時に認証エラー

### 主因
- 環境変数未設定
- シェル再読み込み未実施

### 即時復旧
```bash
echo 'export GEMINI_API_KEY="YOUR_KEY"' >> ~/.zshenv
source ~/.zshenv
```

### 再発防止
- dev/prod でキー分離
- 失効・ローテーション手順を先に作成
- 平文キーをチャット/ファイルに残さない

---

## 3. Vercel build failed: `VULNERABLE_NEXTJS_VERSION`

### 症状
- ビルドがセキュリティ要件で失敗

### 主因
- Next.js 脆弱バージョン

### 即時復旧
- `next` を最新版へ更新して再デプロイ

### 再発防止
- 週次で依存更新
- 本番前に脆弱性チェックを実施

---

## 4. Browser Relay: `tab not found`

### 症状
- tabs は見えるが特定タブ操作で失敗

### 主因
- タブID更新
- セッション再接続
- 動的リダイレクト

### 即時復旧
1. Relay OFF→ON
2. 対象タブを前面表示（3〜5秒）
3. tabs / focus / snapshot を連続実行

### 再発防止
- 自動化前に snapshot を1回取得
- ログインが必要なページは先に手動認証
- リトライ回数とタイムアウトを固定

---

## 5. `Config validation failed`

### 症状
- `openclaw config set` 実行時にバリデーションエラー

### 主因
- config path 不正
- 型不一致

### 即時復旧
- `openclaw config set <path> <value>` 形式を厳守
- 変更後に `openclaw config get <path>` で確認

### 再発防止
- 変更前後を必ず記録
- 本番適用前に検証環境で確認

---

## 6. 高速診断テンプレ（運用向け）

障害発生時は以下を順に確認:

1. **環境**: Node/CLI/依存バージョン
2. **認証**: APIキー反映状況
3. **権限**: 実行可能範囲の過不足
4. **接続**: Relay/外部APIの状態
5. **設定**: 直近変更の差分

---

## 7. 再発防止の共通ルール

- 秘密情報は平文保存しない
- 依存更新を週次運用
- エラーを runbook に追記
- 「復旧できた」だけで終わらず、原因を記録

---

## 参考リンク
- OpenClaw GitHub: https://github.com/openclaw/openclaw
- OpenClaw Docs: https://docs.openclaw.ai
