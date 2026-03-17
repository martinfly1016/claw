# OpenClaw Android / Termux 導入の注意点（実務モバイル版）

Android 端末上の Termux 環境で OpenClaw を動作させることで、PC がない環境でもエージェントを実行できます。ただし、モバイル環境特有の制約と対策を理解しておく必要があります。

---

## 1. 動作環境の構築
通常の Linux 環境と異なり、Termux ではパッケージ管理に注意が必要です。

### 必須コマンド
```bash
pkg update && pkg upgrade
pkg install nodejs-lts git python-pip
# ストレージ権限の付与（重要）
termux-setup-storage
```

---

## 2. モバイル環境での 3 大注意点

### A. バックグラウンド制限
Android OS の節電機能により、Termux が勝手に終了することがあります。
- **対策**: Android の設定で Termux の「バッテリー最適化」をオフにし、「Wake Lock」を有効にしてください（Termux の通知欄から設定可能）。

### B. ブラウザ自動化の制約
モバイル版 Termux では GUI 版 Chrome を動かすのが難しいため、`agent-browser` などのスキルがそのままでは動作しません。
- **対策**: ブラウザ操作が必要な場合は、VPS 上で動かしている OpenClaw 本体に SSH 経由で命令を出すか、ヘッドレスブラウザの設定を詳細に行う必要があります。

### C. 入力効率
スマホのキーボードでは CLI 操作が困難です。
- **対策**: `Hacker's Keyboard` などの修飾キーが使えるアプリを導入するか、PC から `adb shell` または SSH で Termux にログインして設定することを推奨します。

---

## 3. 実務ユースケース
- **外出先からのステータス確認**: `openclaw status` で VPS 上の稼働状況を確認。
- **簡易通知受け取り**: Telegram/Discord 経由でスマホに結果を飛ばす。

---

## 4. トラブルシューティング
- **`npm install` が失敗する**: 一部のネイティブモジュールのコンパイルに `clang` や `make` が必要です。`pkg install build-essential` を試してください。
- **ストレージにアクセスできない**: `termux-setup-storage` を実行し、スマホ側の許可ボタンを必ず押してください。

---

## 5. 次に読むべきガイド
- [OpenClaw インストール完全手順](/docs/openclaw-install-jp)
- [VPS 本番運用ガイド](/docs/vps-deploy)
- [エラー解決ガイド](/docs/openclaw-error-fixes-jp)

---

## 参考
- Termux Wiki: https://wiki.termux.com/
- OpenClaw Mobile Strategy: https://docs.openclaw.ai
