# VPS 本番運用ガイド（実務詳細版）

OpenClaw を 24時間 365日安定して稼働させるためには、ローカル環境ではなく VPS（仮想専用サーバー）での運用が推奨されます。本ガイドでは、Ubuntu サーバーを例に、セキュアで止まらない本番環境の構築手順を解説します。

---

## 1. 推奨スペック
- **OS**: Ubuntu 22.04 LTS / 24.04 LTS
- **CPU**: 2コア以上
- **RAM**: 4GB以上（ブラウザ自動化スキルを多用する場合は 8GB 推奨）
- **Storage**: 40GB SSD 以上

---

## 2. セキュリティの基本設定（重要）
VPS 公開直後に必ず実施すべき項目です。

- **SSH ポートの変更**: デフォルトの 22番から別の番号へ変更。
- **公開鍵認証の徹底**: パスワードログインを禁止（`PasswordAuthentication no`）。
- **ファイアウォール (UFW)**: 必要なポート（SSH, HTTP/HTTPS等）のみを許可。
  ```bash
  sudo ufw allow 2222/tcp  # 変更後のSSHポート
  sudo ufw enable
  ```

---

## 3. 常駐実行の設定 (PM2)
サーバー再起動時やプログラム異常終了時に自動復旧させるために `pm2` を使用します。

### インストールと起動
```bash
npm install -g pm2
pm2 start "openclaw start" --name "openclaw-main"
pm2 save
pm2 startup
```

---

## 4. リバースプロキシの設定 (Nginx)
外部から安全にアクセスするため、また SSL 化のために Nginx を前段に置きます。

### 設定例 (`/etc/nginx/sites-available/openclaw`)
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 5. 監視とメンテナンス
- **ログ監視**: `pm2 logs openclaw-main` でエラーを定期チェック。
- **自動更新**: `unattended-upgrades` を有効化し、OS のセキュリティパッチを自動適用。
- **リソース監視**: `htop` やクラウド事業者のダッシュボードで CPU/メモリ負荷を確認。

---

## 6. FAQ
- **Q: どの VPS プロバイダーがおすすめですか？**
  - A: 日本国内なら ConoHa VPS, さくらのVPS、グローバルなら DigitalOcean, Vultr, Linode 等が実績豊富です。
- **Q: データのバックアップはどうすればいいですか？**
  - A: `~/.openclaw/workspace` ディレクトリを定期的に外部ストレージへ同期（rsync 等）してください。

---

## 次に読むべきページ
- [インストール完全手順](/docs/openclaw-install-jp)
- [セキュリティ基準チェックリスト](/docs/security-baseline)
- [エラー解決ガイド](/docs/openclaw-error-fixes-jp)

---

## 参考リンク
- PM2 Quick Start: https://pm2.keymetrics.io/docs/usage/quick-start/
- Nginx Documentation: https://nginx.org/en/docs/
