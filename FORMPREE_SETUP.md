# Formspree設定ガイド

クリエイター登録フォームには、EmailJSの代わりにFormspreeを使用します。

## Formspreeとは

Formspreeは、バックエンド不要でフォーム送信を実現できるサービスです。
- 無料プラン：月50件まで送信可能
- 有料プラン：月1000件以上も可能

## 設定手順

### 1. Formspreeアカウントの作成

1. [Formspree](https://formspree.io/) にアクセス
2. 「Sign Up」をクリックしてアカウントを作成（無料）

### 2. フォームの作成

1. Formspreeダッシュボードにログイン
2. 「New Form」をクリック
3. フォーム名を入力（例：`Creator Registration`）
4. 「Create Form」をクリック

### 3. エンドポイントURLの取得

1. 作成したフォームをクリック
2. 「Integration」タブを選択
3. 「Endpoint URL」をコピー（例：`https://formspree.io/f/xxxxxxxxxx`）

### 4. コードへの設定値の反映

`src/App.jsx` ファイルの以下の部分を、取得したエンドポイントURLに置き換えてください：

```javascript
const FORMPREE_ENDPOINT = 'YOUR_FORMPREE_ENDPOINT'; // ここにFormspreeのエンドポイントURLを入力
```

例：
```javascript
const FORMPREE_ENDPOINT = 'https://formspree.io/f/xxxxxxxxxx';
```

### 5. メール通知の設定

1. Formspreeダッシュボードでフォームを開く
2. 「Settings」タブを選択
3. 「Email Notifications」で通知先メールアドレスを設定
   - `yuta.maruyama137@gmail.com` を設定してください

### 6. 動作確認

1. 開発サーバーを起動: `npm run dev`
2. クリエイター登録フォームを送信
3. 設定したメールアドレスに通知が届くか確認してください

## フォームフィールド

現在のフォームには以下のフィールドが含まれています：
- `name` - お名前（必須）
- `email` - メールアドレス（必須）
- `sns_account` - SNSアカウント
- `nationality_language` - 国籍/使用言語
- `area` - 居住エリア
- `shooting_conditions` - 撮影可能条件
- `self_pr` - 自己PR・実績

## 注意事項

- Formspreeの無料プランでは、1ヶ月あたり50通まで送信可能です
- スパム対策のため、Formspreeは最初の送信時に確認メールを送信する場合があります
- 本番環境では、Formspreeの有料プランへのアップグレードを検討してください

## 代替案

Formspreeが使えない場合の代替案：
1. **Google Forms**: 完全無料、ただしデザインのカスタマイズが限定的
2. **Netlify Forms**: Netlifyでホスティングしている場合に使用可能
3. **メールtoリンク**: `mailto:`リンクを使用（シンプルだが機能が限定的）

