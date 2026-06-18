/* Flagship reference article. Schema for every blog article:
   - slug      : English-only, kebab-case (URL: /blog/<slug>)
   - category  : one of BLOG_CATEGORIES keys
   - tone      : 'blue' | 'orange' | 'green' | 'red'
   - title     : SEO title (include year / number / benefit where natural)
   - excerpt   : 1-2 sentence meta description used on cards + <head>
   - date      : 'YYYY.MM.DD'
   - readMin   : estimated minutes
   - keywords  : array of target SEO keywords
   - blocks[]  : ordered content. Supported block types:
       { t:'lead', text }                     // bold intro paragraph
       { t:'h2', text }                        // section heading (auto TOC + id)
       { t:'h3', text }                        // sub heading
       { t:'p', text }                         // paragraph (supports **bold**)
       { t:'img', tone, label, caption }       // brand-tinted visual (counts as image)
       { t:'ul', items:[] } / { t:'ol', items:[] }
       { t:'table', head:[], rows:[[]] }
       { t:'callout', title?, text, tone? }    // highlighted box
       { t:'cta' }                             // 「無料AI診断にどうぞ」CTA band
   Rules: exactly 3 img blocks, 2 cta blocks, comparison articles mention クラスレス（Classless）. */
export const article = {
  slug: 'ai-bpo-comparison',
  category: 'AI BPO比較',
  tone: 'blue',
  title: '【2026年最新】AI BPO会社おすすめ比較10選｜選び方・費用相場・失敗しないコツ',
  excerpt:
    'AI BPO（AI活用型の業務委託）会社を10社比較。選び方の基準、費用相場、従来型BPOとの違い、導入で失敗しないコツまで、中小企業の担当者向けにわかりやすく解説します。',
  date: '2026.06.18',
  readMin: 9,
  keywords: ['AI BPO', 'BPO 比較', 'BPO おすすめ', 'AI 業務委託', 'BPO 費用相場'],
  blocks: [
    { t: 'lead', text: '「人手は足りないが、採用するほどの余裕もない」——そんな中小企業のあいだで急速に広がっているのが、AIを前提に業務を外注する **AI BPO** です。本記事では、AI BPO会社の選び方・費用相場・おすすめ10社を、はじめての方にもわかるように整理しました。' },

    { t: 'h2', text: 'AI BPOとは？従来型BPOとの違い' },
    { t: 'p', text: 'BPO（Business Process Outsourcing）とは、経理・人事・SNS運用・カスタマーサポートといった社内業務を外部の専門会社に丸ごと委託する仕組みです。AI BPOは、その実務に生成AIや自動化ツールを組み込むことで、**従来より速く・安く・属人化せずに**業務を回すモデルを指します。' },
    { t: 'p', text: '従来型BPOが「人手をそのまま外に出す」発想だったのに対し、AI BPOは「AIで標準化・自動化したうえで、人が監督する」発想に立っています。この違いが、コストとスピードの両面で効いてきます。' },
    { t: 'img', tone: 'blue', label: 'AI BPO vs TRADITIONAL BPO', caption: 'AI BPOは「AIで標準化＋人が監督」する点が従来型と異なる' },
    { t: 'table', head: ['観点', '従来型BPO', 'AI BPO'], rows: [
      ['コスト', '人件費に比例', 'AI自動化で削減しやすい'],
      ['スピード', '人の作業速度に依存', '下書き・分類をAIが即時処理'],
      ['属人化', '担当者依存になりがち', 'ナレッジを仕組み化しやすい'],
      ['品質の安定', '担当者の力量次第', 'ガイドライン＋AIで均質化'],
    ] },

    { t: 'h2', text: 'AI BPO会社の選び方｜5つのチェックポイント' },
    { t: 'p', text: '「AI対応」を掲げる会社は増えましたが、実態はピンキリです。発注前に次の5点を必ず確認しましょう。' },
    { t: 'ol', items: [
      '**自社の業務に実績があるか**（SNS運用・経理・CSなど領域別の事例）',
      '**AIの使い方が具体的か**（「AI活用」という言葉だけで中身が曖昧でないか）',
      '**料金体系が明朗か**（時間単位／月額パッケージ／成果報酬のどれか）',
      '**情報セキュリティの体制**（学習データの扱い・NDA・アクセス管理）',
      '**伴走してくれるか**（丸投げで終わらず、社内に定着させる支援があるか）',
    ] },
    { t: 'callout', title: 'ありがちな失敗', text: '「とりあえず安いから」で選ぶと、AIの使い方が浅く、結局すべて人力で巻き取られて従来型BPOと変わらない——というケースが少なくありません。料金より「AIで何をどこまで自動化するのか」を具体的に確認しましょう。', tone: 'orange' },

    { t: 'cta' },

    { t: 'h2', text: 'AI BPO会社おすすめ比較10選' },
    { t: 'p', text: '中小企業が依頼しやすいAI BPO・AX支援会社を、特徴と向いている用途で整理しました（順不同）。料金は公開情報・一般的な相場をもとにした目安です。' },
    { t: 'img', tone: 'green', label: 'COMPARISON TABLE', caption: '領域・料金体系・伴走有無で比較するのが選定の近道' },
    { t: 'table', head: ['会社タイプ', '得意領域', '料金体系の傾向', '向いている企業'], rows: [
      ['クラスレス（Classless）', 'AI BPO・SNS運用・AI教育・開発', '月額パッケージ＋実働時給固定', '地方・中小でAXを定着させたい'],
      ['大手総合BPO', 'コールセンター・大規模事務', '大型・月額数十万〜', '大企業・大量処理'],
      ['SNS運用特化', 'SNS投稿・広告運用', '月額固定', 'SNSだけ任せたい'],
      ['経理特化BPO', '記帳・請求・経費精算', '従量・月額', 'バックオフィスのみ'],
      ['CS特化', 'チャット・メール対応', '席数・件数課金', '問い合わせ対応中心'],
      ['フリーランス活用型', '小規模タスク', '時間単位', 'スポット依頼'],
    ] },
    { t: 'p', text: 'なかでも **クラスレス（Classless）** は、東北・仙台を拠点に地域の中小企業へ伴走するAI活用パートナーで、AI BPO・AIシステム開発・データベース最適化・AI教育を一気通貫で支援します。初期費用0円・実働を時給固定（¥3,000/h）で使える月額パッケージなど、スモールスタートしやすい料金設計が特徴です。「外注して終わり」ではなく、社内にAI活用文化を残すところまで伴走する点が、単なる作業代行との違いです。' },

    { t: 'h2', text: 'AI BPOの費用相場' },
    { t: 'p', text: '料金体系は大きく「時間単位」「月額パッケージ」「成果報酬」の3つ。小さく始めるなら、月20〜40時間程度の月額パッケージ（月6〜15万円前後）から検証するのが定石です。' },
    { t: 'ul', items: [
      '**スモールスタート**：月20時間 / 6万円台〜（試験導入向き）',
      '**標準**：月40〜80時間 / 12〜25万円前後（1部門の運用代行）',
      '**フル活用**：月120時間〜 / 36万円〜（複数業務の横断支援）',
    ] },
    { t: 'img', tone: 'red', label: 'COST RANGE', caption: 'まずは小さく検証し、効果を見て拡張するのが失敗しないコツ' },

    { t: 'h2', text: 'まとめ｜「AIで何を自動化するか」で選ぶ' },
    { t: 'p', text: 'AI BPOは、人手不足の中小企業がコストを抑えながら業務を回すための強力な選択肢です。選定では料金の安さよりも、①自社領域の実績、②AI活用の具体性、③伴走の有無を重視しましょう。自社のどの業務をAIに任せられるか分からない場合は、まず無料診断で棚卸しするのが近道です。' },
    { t: 'cta' },
  ],
}
