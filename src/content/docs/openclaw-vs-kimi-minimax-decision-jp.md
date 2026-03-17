# OpenClaw vs Kimi / MiniMax 比較（意思決定版）

このページは「どちらが優秀か」を断定するためではなく、
導入目的に応じた選定基準を明確化するための実務ガイドです。

## 結論（先に）
- **短期検証と即導入重視**: Kimi / MiniMax 系が有利
- **制御性・監査性・長期最適化重視**: OpenClaw が有利

## 比較軸
### 1) 導入速度
- Kimi/MiniMax: すぐ使える
- OpenClaw: 初期設計が必要

### 2) データ制御
- Kimi/MiniMax: ベンダーポリシー依存
- OpenClaw: 実行環境と権限を自社で制御

### 3) 拡張性
- Kimi/MiniMax: 連携は可能だが制約あり
- OpenClaw: Skill内製で要件に合わせて拡張可能

### 4) 運用コスト
- Kimi/MiniMax: 課金体系依存
- OpenClaw: 運用設計次第で最適化余地が大きい

## 推奨導入パターン
1. まずクラウド型で価値検証（2〜4週）
2. 成果が見えた業務のみ OpenClaw へ移植
3. 最終的に用途別ハイブリッド運用

## 判断チェックリスト
- [ ] 機密情報を扱うか
- [ ] 監査要件が強いか
- [ ] 週次で改善運用を回せるか
- [ ] 初期学習コストを許容できるか

## 参考
- OpenClaw 公式: https://github.com/openclaw/openclaw
- OpenClaw Docs: https://docs.openclaw.ai
