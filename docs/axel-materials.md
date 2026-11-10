# アクセル事業資料

- ユーザー指定の原本: `C:/Users/youta/Downloads/アクセル 事業資料 Classless.pdf`
- サーバー用ファイル: `private/materials/axel-service-guide.pdf`（静的公開対象外）
- 受付・ダウンロードAPI: `POST /api/axel-materials`
- 資料請求フォーム: `/axel#materials`
- 18ページ、2,790,671 bytes（表示は約2.7MB）。表紙に2026.06の表記。
- SHA-256（原本・公開用コピー一致）: `415F6B3CEE1C4968766EB19F0E2AB1BEB2639704B0B9E7E8EC74D7B5F38BA3B3`

2026-11-10、全18ページのテキストを抽出し、表紙をレンダーして確認。PDFは一切編集せず、原本のバイト列を保持している。

## 資料請求後の提供

同日の追加要望により、直接公開していたPDFを `private/materials/` へ移動。旧 `/materials/axel-service-guide.pdf` は `/axel#materials` へ転送する。氏名・会社名・メールアドレス・プライバシーポリシーへの同意を受け付ける。個人の利用者は会社欄へ「個人」と記入できる。

APIは型・文字数・必須項目・メール形式・同意・JSONサイズ・Origin・ハニーポットを検証し、資料ファイルの読込を確認した後、既存Resend設定で `yuta.maruyama@classless.jp` へ請求内容・同意・受付日時を通知する。通知サービスから受付IDが返った場合に限り、PDFをレスポンスとして返す。申込者へのメール送信や営業メルマガ登録は行わない。

利用目的は「資料提供およびお問い合わせへの対応」。個人情報をURL、ブラウザー永続ストレージ、アプリケーションログへ出力しない。PDFレスポンスは `no-store`、GETでは取得不可。通信・通知失敗時にはPDFを返さず、フォームに再試行を案内する。フロントは成功レスポンスのBlobからダウンロードリンクを作る。

Vercelの `functions.includeFiles` でPDFを当該関数へ同梱する。参考: [Vercel公式のfunctions設定](https://vercel.com/docs/project-configuration/vercel-json#functions)。追加環境変数は不要。root側でProductionの `RESEND_API_KEY` 設定名を確認済み（値の取得・表示なし）。

検証: `node --test scripts/axel-materials.test.mjs`。必須/型/同意/上限/不正メール、GET、異なるOrigin、通知サービス拒否・不正応答・通信失敗、ファイル失敗、成功時PDFの原本ハッシュ一致をモックで確認。テスト中に実メールは送信していない。

理念、n8nによる自動化、AIシステム開発、データベース最適化、業務整理から運用定着までの内容は、今回のサイト紹介と対応している。原本18ページは設立を「2025年9月」、事業内容に「営業支援」と記載しており、現在のサイト会社情報・2事業構成とは差がある。原本維持の指示に従いPDFを変更せず、当該表記をWeb本文へ転記していない。ユーザー向けの報告事項として共有済み。
