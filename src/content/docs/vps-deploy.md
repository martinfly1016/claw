# OpenClaw VPS導入ガイド（本番運用向け）

## 目的
OpenClawを24時間稼働させるための、最小コストかつ安定性重視のVPS構成を解説します。

## 推奨構成
- CPU: 2 vCPU
- RAM: 4GB 以上
- OS: Ubuntu 22.04 LTS
- Reverse Proxy: Nginx
- Process Manager: systemd / pm2

## 基本フロー
1. サーバー初期設定（ユーザー作成・SSH鍵）
2. Node.js / OpenClaw インストール
3. APIキーを環境変数で注入
4. systemd で自動起動設定
5. 監視（ログローテーション + ヘルスチェック）

## セキュリティ要点
- rootログイン禁止
- パスワード認証OFF
- 最小権限のAPIキーを発行
- 機密情報はGit管理対象外

## 運用チェック
- 毎日: プロセス生存確認
- 毎週: エラーログ集計
- 毎月: 依存パッケージ更新
