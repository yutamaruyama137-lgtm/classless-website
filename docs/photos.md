# 画像を差し替える

現在は、元のファーストビューと、オリジナルの編集イラスト2点、確認済みの活動写真2点を使っています。

## 事業紹介とプロジェクトの画像

`src/data/friendlyImages.js` の `friendlyImages` に集約しています。画像を `public/photos/` へ置き、対応する `src` と `alt` を更新してください。

| キー | 現在の画像 | 表示方法 |
| --- | --- | --- |
| `ai` | `/illustrations/ai-workflow.png` | 生成イラスト、全体を収める |
| `axelProject` | `/assets/logo-axel.png` | アクセルのプロジェクト紹介のみ、ロゴ全体を余白付きで表示 |
| `community` | `/illustrations/community-garden.png` | 生成イラスト、全体を収める |
| `globalHub` | `/projects/tokyo-global-hub.jpg` | 活動写真、枠へトリミング |
| `kamado` | `/projects/chiikinokamado.jpg` | 公式レポート、下寄せのトリミング |

`position` は写真の切り取り位置です。例: `50% 85%`。生成イラストは3:2の全体を見せ、人物や道具を切らないよう `object-fit: contain` で表示します。画像は下部で遅延読み込みします。

AI事業のイラスト下の説明キャプションは削除し、画像内容を説明するaltは維持しています。生成方式とプロンプトは [illustration-assets.md](illustration-assets.md) に記録しています。

`ai` と `axelProject` は別の画像設定です。最初のAI事業紹介は生成イラストを維持し、プロジェクト紹介では既存のアクセルロゴを使っています。Tokyo Global Hubの画像とテキストのリンク先は [公式Instagram](https://www.instagram.com/tokyoglobalhub/) です。写真の出典は下記のnote記事のままです。

## アクセルの構築例

`src/data/axelExamples.js` に、用途3点のコピー・画像パス・altを集約しています。`public/demos/axel-knowledge.webp`、`axel-workflow.webp`、`axel-data.webp` は、独自に生成した画面イメージです。完成製品や顧客の実画面として扱わず、画面下に「構築例の画面イメージ」と表示します。全体を3:2で収め、用途を選ぶと切り替わります。生成方式とプロンプトは [axel-demo-assets.md](axel-demo-assets.md) を参照してください。

## パートナー・取引先ロゴ

元の公開版 `0bf5400` にあった9点を、ヒーロー直後の静的な一覧として再掲しています。画像は `public/assets/logos/` の既存PNG、表示データは `src/components/SimpleHome.jsx` の `FriendlyPartners` です。企業の追加や実績数値の追加はしていません。横長・縦長の違いに合わせた表示高で、画像全体を収めています。

## 元のファーストビュー

`src/components/TopPage.jsx` の `HeroCutin` 内にある2枚の画像です。最初のデザインの見た目と動きを復元するため、元のUnsplash写真・斜めパネル・青い光・文字アニメーションを維持しています。変更するときは元のレイアウトとのバランスを確認してください。

## 活動写真の出典

- Tokyo Global Hub: 公式note [TGH立ち上げ記事](https://note.com/tokyoglobalhub/n/nbd1bd3d82cc7) のイベント写真。
- ちいきのかまど: [Local Question #01 実施レポート](https://chiikinokamado.jp/news/local-question-01-report/) の活動紹介画像。

過去のプレースホルダー用 `corporateImages.js` / `CorporateImage.jsx` は現在使わないため削除しました。
