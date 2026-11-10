# アクセルのサービス画面風デモ画像

作成日: 2026-11-10

内蔵 `image_gen` による新規生成（built-in mode）。CLI/APIによる画像生成は使用していません。前回の図解から、業務ツールのUIを想像できる画面モックへ変更しました。実在する稼働製品のスクリーンショット、顧客データ、処理速度や導入成果の証明ではありません。サイトでは「構築例のサンプル画面」として扱い、日本語の業務説明をHTMLで併記してください。

## 保存先と仕様

すべて1536×1024px（3:2）。生成PNGを `sharp-cli` でWebP品質88へ形式変換しました。画像内容の加工、切り抜き、合成、再描画は行っていません。既存の旧図解は上書きせず残しています。

| 用途 | 保存先 | 容量 | 推奨alt |
|---|---|---:|---|
| n8n型ワークフロー | `C:/Users/youta/Downloads/WEBサイト/classless-website/public/demos/axel-workflow-ui.webp` | 95,376 bytes | 問い合わせ受信からAI分類、データ保存、通知までのノードと実行ログを示す構築例のサンプル画面 |
| データベース管理 | `C:/Users/youta/Downloads/WEBサイト/classless-website/public/demos/axel-database-ui.webp` | 81,246 bytes | 問い合わせ一覧と選択レコードの担当・対応状況、連携履歴を示す構築例のサンプル画面 |
| 社内ナレッジ検索 | `C:/Users/youta/Downloads/WEBサイト/classless-website/public/demos/axel-knowledge-ui.webp` | 84,430 bytes | 社内資料への質問、回答、参照元の文書を並べた構築例のサンプル画面 |

公開パスはそれぞれ `/demos/axel-workflow-ui.webp`、`/demos/axel-database-ui.webp`、`/demos/axel-knowledge-ui.webp`。

元PNG保存ディレクトリ: `C:/Users/youta/.codex/generated_images/01a1c319-6ff7-7730-b339-392ca9e6ae83/`

- workflow: `exec-a5b80aa9-1034-4847-8234-952d13bcfef1.png`
- database: `exec-5358efdd-287c-466d-b652-24c1bbe42344.png`
- knowledge: `exec-b4a97df9-200e-4d87-a77c-57a57f9a7566.png`

## 画面の扱い・確認

- 自動化とデータベースは同一のサンプルレコード `INQ-1042 / Website / Hana / New` を表示し、連携を想像できるようにしています。名前、日時、実行番号なども架空の画面内容です。
- n8n公式の[ノード説明](https://docs.n8n.io/workflows/components/nodes/)を確認し、トリガーからデータの加工・保存・外部通知へ進むノード構成を参考にしています。画像自体は独自生成したUIモックで、n8nの公式画面やバージョン再現ではありません。
- ワークフロー内のサービス名・ロゴ・モデル表記はサンプル構成です。Classlessが独自SaaSを運営している、すべてのツールが常時接続済み、公式提携がある、特定モデルの利用を保証するという意味ではありません。
- 大きな見出しと巨大アイコンの図解ではなく、サイドバー、ツールバー、ノード、実行ログ、行データ、詳細ペインのあるサービス画面として目視確認しました。
- 表の選択行と詳細パネル、ワークフローの出力JSONは一致します。ナレッジ画面は質問・回答と資料プレビューが対応しています。
- 英語UI内の細部に説明を依存させず、サイト側の日本語説明で「入力→処理→保存/確認」を示してください。拡大表示も有効です。

## 最終生成プロンプト

### n8n型ワークフロー

```text
Create a highly realistic, polished desktop web application screenshot mockup, 1536x1024 landscape 3:2, straight-on full-screen UI edge to edge. This is a synthetic demonstration of an n8n-style automation editor, not a real execution screenshot. It MUST look like a real working software interface, NOT a marketing infographic, illustration, flowchart poster or slide. No giant headings, no oversized envelope/database icons, no pastel cartoon art, no devices, no perspective, no gradients. Dense but legible clean English microcopy, ordinary 13-16px app UI type at this resolution. White and very light gray surfaces, dark navy text #24343b, thin gray borders, blue #167fa5 accent, discreet green success state. Small top app bar with wordmark 'Axel / Workflows', breadcrumb 'Inquiry intake', saved indicator and blue 'Test workflow' button. Slim left sidebar with icons and labels Overview, Workflows (selected), Executions, Credentials, Settings. Main upper two-thirds is a pale gray dotted workflow canvas, showing five compact realistic workflow nodes connected left to right with thin elbow/bezier connector lines: 'Webhook', 'AI Agent', 'Edit Fields', 'Postgres', 'Slack'. Node shapes are roughly 80x70 pixels with modest distinct tiny icons, green success outlines and small checkmarks; labels below. Each connector labeled '1 item'. A smaller 'Chat Model' subnode is below the AI Agent, joined to its model input with a dashed connector. Keep nodes integrated with the normal editor chrome, avoid huge infographic boxes. Main canvas has zoom controls bottom-left and a small minimap bottom-right. Lower third is an open execution inspector, tabs 'Execution log', 'Input', 'Output', status 'Succeeded'. Left list shows checkmarked Webhook, AI Agent, Edit Fields, Postgres, Slack. Right selected Output panel uses monospace JSON exactly { "request_id": "INQ-1042", "category": "Website", "assignee": "Hana", "status": "New" }. Small top-right inspector label 'Sample data'. All strings accurate and coherent. Professional production SaaS screen with consistent alignment, spacing and realistic controls. No fake customer logos, no charts or performance metrics. The workflow should be immediately recognizable as automated intake, AI processing, database creation, notification.
```

### データベース

```text
Generate a realistic high-fidelity desktop SaaS database workspace screenshot mockup, landscape 1536x1024, straight-on edge-to-edge. This is a synthetic service demo, not a real deployed application. It must look like actual everyday production software, NOT an infographic, diagram poster, illustration, landing page, slide, or marketing graphic. No oversized heading or icons. Crisp normal 13-16px interface typography, thin gray rules, carefully aligned table cells, white/light gray surfaces, navy #24343b text, teal-blue #167fa5 active controls, modest green/coral status chips. Small top header: 'Axel / Workspace', breadcrumb 'Requests', a search field and a small circle avatar. Left sidebar ~170px: Workspace, Requests selected, Contacts, Activity, Automations, Settings. Main area a realistic database table with toolbar: Grid view, Filter, Sort, Search, Add record. The central table has exactly 6 rows and columns Request ID, Subject, Category, Assignee, Status, Source. Rows are clearly synthetic data: INQ-1040 / Product question / Support / Ken / Done / Email; INQ-1041 / Update request / Website / Mei / In progress / Web form; selected pale-blue row INQ-1042 / New website / Website / Hana / New / Web form; INQ-1043 / Data cleanup / Data / Ken / New / Email; INQ-1044 / Account update / Support / Mei / In progress / Web form; INQ-1045 / Workflow setup / Automation / Hana / New / Web form. The selected INQ-1042 record detail panel occupies rightmost third, title 'INQ-1042' and heading 'New website', visible fields Category Website, Assignee Hana, Status New, Source Web form. Below a small 'Automation activity' timeline with three green check rows 'Workflow completed', 'Record created', 'Team notified', and a modest pill 'Connected to inquiry intake'. Bottom footer '6 records' and 'Sample data'. The selected record and right detail MUST match. Toolbar buttons and standard row checkboxes, realistic subtle separators and small chevron/dropdown icons. No charts, performance metrics, fake customer logos, photos, devices, perspective, glow, gradients or cartoon decoration. Purpose is to see at a glance how an incoming web request becomes an assigned trackable database record. Make it a polished believable real application screen, consistent with a white/navy/blue workflow editor.
```

### ナレッジ検索

```text
Generate a realistic high-fidelity desktop web application screenshot mockup, landscape 1536x1024, straight-on UI edge-to-edge. This is a synthetic knowledge assistant service demo, not a real customer's workspace. It MUST look like an actual everyday enterprise web app screenshot, NOT an illustration, infographic, diagram poster, marketing page or slide. No huge heading. Crisp ordinary app typography and small controls, white/light-gray surfaces, navy #24343b text, blue #167fa5 accent, thin neutral gray borders, restrained rounding. Top app header 'Axel / Knowledge', small search field, workspace avatar H. Left sidebar 170px wide with Knowledge selected, Files, Conversations, Settings. Adjacent document list pane ~250px with title 'Sources', three simple filename rows: 'Onboarding guide', 'Team handbook', 'Tool access'. Main central conversation panel around500px wide, title 'Ask your workspace', one user message 'What is the onboarding process?' and a clean assistant reply: 'The onboarding guide outlines four steps:' followed by short numbered list '1. Complete your profile', '2. Request tool access', '3. Meet your team', '4. Review your first-week plan'. Below the answer, two small clickable-looking source chips 'Onboarding guide · p. 3' and 'Team handbook · p. 2'. At bottom of central panel a normal message input 'Ask a question about your documents' with send icon. Right side source preview panel about350px wide titled 'Onboarding guide', small 'Page 3 of 8' control, document body heading 'Getting started', short text lines, and one pale-blue highlighted excerpt containing 'Request tool access and meet your team.' Tiny bottom footer 'Sample workspace'. Keep all body text legible and coherent. Standard toolbar icons, quiet app density, plenty of ordinary blank space inside panels. No cartoon avatars or robot mascots, no oversized icons, no customer names or logos, no charts/performance metrics, no gradients, device frames, perspective, photography, neon, or decorative splashes. Make the answer and source-document relationship immediately obvious. The visual style should match a white/navy/blue database and workflow editor suite.
```
