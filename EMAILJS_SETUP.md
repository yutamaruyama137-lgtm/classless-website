# EmailJS設定ガイド

このプロジェクトでは、フォーム送信機能にEmailJSを使用しています。
以下の手順で設定を行ってください。

## 1. EmailJSアカウントの作成

1. [EmailJS](https://www.emailjs.com/) にアクセス
2. 無料アカウントを作成（Sign Up）

## 2. Email Serviceの設定

1. EmailJSダッシュボードにログイン
2. 「Email Services」をクリック
3. 「Add New Service」をクリック
4. Gmailを選択して接続
5. 接続後、Service IDをコピー（例: `service_xxxxx`）

## 3. Email Templateの作成

### お問い合わせフォーム用のテンプレート

1. 「Email Templates」をクリック
2. 「Create New Template」をクリック
3. 以下の設定を行う：

**Template Name**: `Contact Form`

**Subject**: `【Classless】お問い合わせがありました`

**Content**:
```
お問い合わせ内容：

会社名/店舗名: {{company_name}}
ご担当者名: {{contact_name}}
メールアドレス: {{email}}
ご希望のメニュー: {{menu}}
ご相談内容:
{{message}}

事例公開の許可: {{case_study}}
```

4. 「To Email」に `yuta.maruyama137@gmail.com` を設定
5. 「Save」をクリック
6. Template IDをコピー（例: `template_xxxxx`）

### 資料ダウンロードフォーム用のテンプレート

1. 同様に「Create New Template」をクリック
2. 以下の設定を行う：

**Template Name**: `Download Form`

**Subject**: `【Classless】資料ダウンロード申請がありました`

**Content**:
```
資料ダウンロード申請：

会社名/店舗名: {{company_name}}
お名前: {{contact_name}}
メールアドレス: {{email}}
業種: {{industry}}
```

3. 「To Email」に `yuta.maruyama137@gmail.com` を設定
4. 「Save」をクリック
5. Template IDをコピー

## 4. Public Keyの取得

1. 「Account」→「General」をクリック
2. 「Public Key」をコピー（例: `xxxxxxxxxxxxx`）

## 5. コードへの設定値の反映

`src/App.jsx` ファイルの以下の部分を、取得した値に置き換えてください：

```javascript
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // ここにService IDを入力
const EMAILJS_TEMPLATE_ID_CONTACT = 'YOUR_TEMPLATE_ID_CONTACT'; // お問い合わせフォーム用のTemplate ID
const EMAILJS_TEMPLATE_ID_DOWNLOAD = 'YOUR_TEMPLATE_ID_DOWNLOAD'; // 資料ダウンロードフォーム用のTemplate ID
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Public Keyを入力
```

## 6. 動作確認

1. 開発サーバーを起動: `npm run dev`
2. フォームを送信して、メールが正しく受信されるか確認してください

## 注意事項

- EmailJSの無料プランでは、1ヶ月あたり200通まで送信可能です
- 本番環境では、環境変数（`.env`ファイル）を使用することを推奨します
- Public Keyは公開されても問題ありませんが、Service IDとTemplate IDは機密情報として扱ってください

