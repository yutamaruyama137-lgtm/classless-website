# 写真エリアの差し替え

トップのファーストビューの次に、6つの画像枠がある写真ボードを配置しています。
設定は **`src/data/activityPhotos.js` の `activityPhotos`** だけで管理します。

## 写真を入れる

1. 画像ファイルを `public/photos/` に保存します（フォルダがなければ作成）。
2. 対象の枠の `src: null` を `src: '/photos/event.jpg'` などに変更します。
3. `alt` に実際の写真の内容、`caption` に活動名などの短い説明を記入します。
4. 顔などが切れる場合は `position: '50% 35%'` のように表示位置を調整します。

```js
{
  id: 'create',
  src: '/photos/workshop.jpg',
  alt: 'ワークショップでアイデアを書き出す参加者',
  caption: 'ワークショップ',
  word: 'つくる。',
  tone: 'yellow',
  shape: 'small',
  position: '50% 40%',
}
```

`id` は配置に使うため変更しないでください。今ある6枠への差し替えではCSS編集は不要です。
横長の写真は `gather` / `local`、正方形・縦長は残りの4枠に向いています。
`src: null` または読込失敗時には、図形と `word` を使った淡色の枠が表示されます。
画像アップロード機能はなく、サイトのファイルを差し替える構成です。

実際の活動写真を使い、掲載許諾を確認した素材を配置してください。仮の写真を実績として載せないでください。

## 現在の写真

- Tokyo Global Hub: `public/projects/tokyo-global-hub.jpg`。公式note [TGH立ち上げ記事](https://note.com/tokyoglobalhub/n/nbd1bd3d82cc7) のイベント写真。
- ちいきのかまど: `public/projects/chiikinokamado.jpg`。[Local Question #01 実施レポート](https://chiikinokamado.jp/news/local-question-01-report/) の活動写真。

既存の3つのプロジェクト紹介は、このボードとは別に保持しています。
