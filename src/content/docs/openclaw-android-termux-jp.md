# OpenClaw Android/Termux 導入ガイド（詳細版）

外出先や移動中に OpenClaw を操作したい場合、Android 端末上の `Termux` 環境を利用して OpenClaw CLI を動作させることが可能です。本ガイドでは、モバイル環境特有の制限と具体的な構築ステップを解説します。

---

## 1. 動作要件
- **Android OS**: 10.0 以上推奨
- **Termux**: F-Droid 版を推奨（Google Play 版は更新が止まっており非推奨）
- **ストレージ**: 2GB 以上の空き容量

---

## 2. インストール手順

### Step 1: パッケージの更新
```bash
pkg update && pkg upgrade
```

### Step 2: 必須依存関係の導入
Node.js と Git をインストールします。
```bash
pkg install nodejs git python binutils
```

### Step 3: OpenClaw CLI のインストール
```bash
npm install -g @openclaw/cli
```

---

## 3. モバイル環境での注意点と対策

### スリープによるプロセス停止
Android のバッテリー最適化機能により、画面を閉じると Termux が停止します。
- **対策**: Termux 通知バーの「Acquire wakelock」をタップしてスリープを防止してください。

### ブラウザ自動化スキルの制限
Termux 上では Headless Chrome の動作が不安定な場合があります。
- **対策**: ブラウザ操作が必要なタスクは、VPS 上で動かしている OpenClaw へコマンドを飛ばす（Message スキル経由）か、Cloud プロバイダーを利用してください。

### 文字入力の効率化
標準キーボードでは記号入力が困難です。
- **推奨**: `Hacker's Keyboard` などの PC レイアウトに近いキーボードアプリの導入を推奨します。

---

## 4. ユースケース
- **緊急時の再起動**: 外出先から VPS のエージェントを再起動。
- **簡単な調査依頼**: `tavily-search` スキルを使って移動中に要約レポートを取得。
- **ログ確認**: 実行中のタスクが成功したかを `openclaw status` で確認。

---

## 5. FAQ
- **Q: iOS (iPhone) でも動きますか？**
  - A: iOS には Termux 相当の強力な環境がないため、`iSH` 等で一部動作する可能性はありますが、現状非推奨です。VPS の Web UI へのアクセスを推奨します。

---

## 次に読むべきページ
- [インストール完全手順](/docs/openclaw-install-jp)
- [OpenClaw とは？](/docs/openclaw-what-it-is-jp)
- [エラー解決ガイド](/docs/openclaw-error-fixes-jp)

---

## 参考リンク
- Termux Wiki: https://wiki.termux.com/wiki/Main_Page
- F-Droid (Termux): https://f-droid.org/en/packages/com.termux/
