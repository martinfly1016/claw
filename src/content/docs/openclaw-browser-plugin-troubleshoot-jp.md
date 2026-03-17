# OpenClaw ブラウザプラグイン導入とトラブルシューティング

OpenClawでブラウザ自動化を行う際、最も詰まりやすいのがプラグイン連携です。

## よくある症状
1. tab not found
2. relay connected だが操作できない
3. snapshot が空になる

## 対処手順
1. 対象タブを前面表示して3〜5秒待つ
2. RelayをOFF→ONして再接続
3. tabs/focus/snapshot を同一フローで実行
4. 動的リダイレクトページは再openして再attach

## 安定運用のコツ
- 重要操作前に一度 snapshot を取る
- ログインが必要な画面は手動で先に認証
- セッション切れを前提にリトライ設計する
