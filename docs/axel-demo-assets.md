# アクセルの構築例画像

作成日: 2026-11-10

内蔵 `image_gen` による新規生成（built-in mode）。CLI/APIによる画像生成は使用していません。各画像は、サービスで相談できる構築例を伝えるためのオリジナルの画面図です。実在する稼働中製品のスクリーンショット、顧客導入実績、成果の証拠ではありません。サイト上では「構築例」とし、説明や「入力 → 処理 → 結果」はHTMLでも併記します。

## 保存先

すべて1536×1024px（3:2）、白背景。生成PNGから `sharp-cli` でWebP品質88へ形式変換のみ実施。内容の加工・切り抜き・再描画はしていません。元PNGは内蔵画像生成の保存先に残しています。

| 用途 | 公開パス | ファイル容量 | 推奨alt |
|---|---|---:|---|
| 社内資料を使った質問対応 | `/demos/axel-knowledge.webp` | 59,526 bytes | 資料を参照しながら質問に答える社内ナレッジ検索の構築例 |
| 問い合わせの整理・通知 | `/demos/axel-workflow.webp` | 79,498 bytes | 問い合わせの受付からAI分類、一覧への保存、担当通知までをつなぐ構築例 |
| Webフォームと管理画面の連携 | `/demos/axel-data.webp` | 88,610 bytes | Webフォームから問い合わせ一覧へ情報を集めて対応状況を管理する構築例 |

プロジェクト内の絶対パスは `C:/Users/youta/Downloads/WEBサイト/classless-website/public/demos/` 配下です。

元PNGの保存ディレクトリ: `C:/Users/youta/.codex/generated_images/01a1c305-19b1-7880-b68e-fdfea1cd50a9/`

- knowledge: `exec-d36112db-65d4-4808-83a5-3a8bb599ced5.png`
- workflow: `exec-751bb42a-9595-473a-840c-7b94cc1df44d.png`
- data: `exec-58a595ed-d556-44cd-a02b-7e94242aaed7.png`

## 最終生成プロンプト

### 社内ナレッジ

```text
Create an original polished flat UI demo image for a Japanese business automation design service. Landscape 3:2 composition, approx 1536x1024. This is an illustrative design concept, NOT a screenshot of an existing product. White background, navy #24343b typography, teal-blue #167fa5 controls, subtle pale mint and pale blue surfaces, tiny coral #ed735e accents. Calm, friendly, precise Japanese web design. Absolutely no 3D, robot, sparkle, glow, gradients, photographic desk, browser/device perspective, or third-party logos. A straight-on application interface fills most of the image with comfortable outer white padding. A narrow document sidebar at left and a wide knowledge Q&A panel at right. Large readable Japanese headings exactly: top '社内ナレッジ', sidebar '資料', main '質問', bottom '参照資料'. Sidebar shows three simple document rows with page icons and short labels '手順書', 'FAQ', 'マニュアル'. Main has one short user question bubble '資料はどこにありますか？' and one blue-accented answer card '関連する資料をまとめました。' with two simple source chips '手順書' and 'FAQ'. At bottom a rounded simple text entry field with subtle send-arrow icon. Include only these short Japanese strings, no extra body text or lorem ipsum, no personal names, customer logos, metrics, sales numbers or fake promises. Large enough UI elements to understand at half size. Restrained 10px corner rounding, thin pale blue-gray borders, very light shadow only if necessary. Design concept should feel professionally laid out and human, not a generic futuristic AI dashboard.
```

### ワークフロー

```text
Create an original polished flat UI demo illustration for a Japanese business workflow automation design service. Landscape 3:2, approx 1536x1024. White background, navy #24343b typography, teal-blue #167fa5 connectors, pale mint and pale blue panels, tiny coral #ed735e accents. A straight-on conceptual software workflow canvas filling most of the image, no perspective or device. At top left large readable Japanese title exactly '問い合わせを自動で整理'. Four evenly spaced large connected nodes go left to right, with simple flat line icons: envelope node labeled '受付', branching/classification node labeled 'AIで分類', database node labeled '一覧に保存', bell node labeled '担当へ通知'. Clear gently curved connector arrows connecting these four nodes in order. Under the main workflow, a simple white sample input card labeled 'お問い合わせ' with three short horizontal placeholder lines, and a larger pale mint output card labeled '整理された情報' showing three fields '内容', '分類', '担当' with colored simple placeholder rectangles instead of made-up values. Make workflow easy to understand at half size. These are conceptual service demonstration visuals, NOT a real product screenshot. Large readable Japanese labels only as specified, no tiny unreadable text, no fabricated numerical results, no fake customer names, no third-party logos, no n8n brand copying, no robots, gradients, neon, 3D, sparkle, photographic table or browser chrome. Thin blue-gray borders, tasteful 10px corners and generous spacing; calm human editorial design.
```

### Webとデータ管理

```text
Create an original polished flat UI demo illustration for a Japanese website and database design service. Landscape 3:2, approx 1536x1024. White background, navy #24343b readable Japanese typography, teal-blue #167fa5 controls, pale mint and blue surfaces, tiny coral #ed735e accents. Front-facing two-pane conceptual application interface with generous white padding, no perspective or physical devices. Main heading exactly 'Webとデータを、ひとつにつなぐ'. Left one-third shows a compact website inquiry form panel headed 'お問い合わせ', three clean fields labeled 'お名前', 'メール', 'ご相談内容' (empty fields), and a blue button '送信'. A thin curved teal arrow connects the form to the right two-thirds management table headed '問い合わせ管理'. Table has 3 columns with readable headings '内容', '担当', '対応状況', and 3 rows with short labels 'サイト制作', '業務の自動化', 'データ整理'. The担当cells use simple neutral person-circle icons rather than names. Status chips read '確認中', '対応中', '完了' with pale blue, pale coral, pale mint. No dates, no personal data, no numbers, no graphs, no fake clients or results. This is clearly a service design demo concept, not a screenshot of an actual launched SaaS product. Large clean Japanese text exactly as specified, thin blue-gray borders, modest rounded corners, calm human-friendly editorial composition. No robots, third-party logos, 3D, sparkle, neon, gradients, photographic desk, excessive decorative chrome or unreadable tiny body text.
```

## 確認

- 3点とも生成直後に目視し、見出し・主要ラベルの日本語、接続の向き、内容の対応を確認。
- 企業ロゴ・顧客名・数値実績・第三者製品の画面コピーはなし。
- 重要な情報は画像に依存せず、ページ側のテキストでも説明する。
- 問い合わせ画面の入力欄は画像内の構築例であり、実際の送信フォームではない。
