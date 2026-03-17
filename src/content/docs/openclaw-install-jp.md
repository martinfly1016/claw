# OpenClaw インストール完全手順（日本語・実務版）

このページは、OpenClawを「試しに動かす」だけでなく、
**業務運用に耐える初期状態**まで持っていくための導入ガイドです。

---

## 1. このガイドの対象
- 初めてOpenClawを導入する個人・チーム
- ローカル検証からVPS本番へ移行したい方
- 日本語中心で運用品質を安定させたい方

---

## 2. 導入前チェック（必須）

### 必要環境
- Node.js: LTS（推奨 v20+）
- Git: 利用可能
- APIキー: OpenAI / Gemini / Anthropic いずれか
- OS: macOS / Windows / Linux

### 事前に決めること
1. まずローカルで検証するか、いきなりVPSで始めるか
2. どのチャネル（Discord/Telegram等）で運用するか
3. 誰がAPIキー管理責任者か

---

## 3. インストール手順

### Step 1: CLI導入
```bash
npm i -g @openclaw/cli
openclaw --version
```

### Step 2: 初期セットアップ
```bash
openclaw onboard
```
セットアップ中に、利用チャネル・モデル・認証方式を選択します。

### Step 3: 動作確認
```bash
openclaw status
```
- エラーが無ければ初期導入成功

---

## 4. OS別の注意点

### macOS
- shell設定（`.zshenv`）への環境変数反映を忘れやすい

### Windows
- PowerShellの実行ポリシーでインストールが止まる場合あり

### Linux/VPS
- systemd/pm2 等の常駐設定を早めに入れると安定

---

## 5. 日本語運用の初期設計
- システムプロンプトを日本語固定
- 用語辞書（顧客名・製品名・部署名）を統一
- 返信フォーマットを固定（結論→根拠→次アクション）

---

## 6. よくあるエラーと対処

### エラーA: `command not found: openclaw`
- 原因: PATH未反映
- 対処: shell再読み込み / ターミナル再起動

### エラーB: `No API key provided`
- 原因: APIキー未設定
- 対処: 環境変数に設定後、プロセス再起動

### エラーC: 権限不足で連携失敗
- 原因: 最小権限設定との不整合
- 対処: 必要な範囲だけ権限追加

### エラーD: Browser Relay `tab not found`
- 原因: セッション再接続・タブID更新
- 対処: Relay再ON → tabs/focus/snapshot を連続実行

---

## 7. 本番移行チェックリスト
- [ ] APIキーを dev/prod で分離
- [ ] 監査ログ保存を有効化
- [ ] 失敗時リカバリ手順を文書化
- [ ] 不要スキルを無効化
- [ ] 週次で依存更新と脆弱性確認

---

## 8. 導入後KPI（最初の2週間）
- 作業時間削減率
- 再実行率（手戻り）
- 失敗時復旧時間（MTTR）

---

## 9. 次に読むべきページ
1. [OpenClaw スキルおすすめ](/docs/openclaw-skills-recommend-jp)
2. [OpenClaw エラー解決ガイド](/docs/openclaw-error-fixes-jp)
3. [VPS本番運用ガイド](/docs/vps-deploy)

---

## 参考リンク
- OpenClaw GitHub: https://github.com/openclaw/openclaw
- OpenClaw Docs: https://docs.openclaw.ai
