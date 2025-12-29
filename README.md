# Classless Website

留学生UGCでインバウンドの「行きたい」を作る - Classlessの公式WEBサイト

## 技術スタック

- **React 18** - UIライブラリ
- **Vite** - ビルドツール
- **Tailwind CSS** - スタイリング
- **lucide-react** - アイコンライブラリ

## セットアップ

### 必要な環境

- Node.js 18以上
- npm または yarn

### インストール

```bash
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:5173` を開いてください。

### ビルド

```bash
npm run build
```

ビルドされたファイルは `dist` フォルダに生成されます。

### プレビュー

```bash
npm run preview
```

## プロジェクト構造

```
├── index.html          # HTMLエントリーポイント
├── package.json         # 依存関係とスクリプト
├── vite.config.js      # Vite設定
├── tailwind.config.js  # Tailwind CSS設定
├── postcss.config.js   # PostCSS設定
└── src/
    ├── main.jsx        # Reactエントリーポイント
    ├── App.jsx         # メインアプリケーションコンポーネント
    └── index.css       # グローバルスタイル
```

## 特徴

- **Neo-Brutalismデザイン** - 大胆なボーダーとシャドウを使用したモダンなUI
- **レスポンシブデザイン** - モバイル・タブレット・デスクトップに対応
- **スムーズなアニメーション** - インタラクティブな要素とトランジション
- **3つのページ** - ランディングページ、資料ダウンロードページ、サンクスページ

## Vercelへのデプロイ

### 方法1: Vercel CLIを使用（推奨）

1. **Vercel CLIをインストール**
```bash
npm install -g vercel
```

2. **Vercelにログイン**
```bash
vercel login
```

3. **プロジェクトをデプロイ**
```bash
vercel
```

初回デプロイ時は、いくつかの質問に答えます：
- Set up and deploy? → **Y**
- Which scope? → アカウントを選択
- Link to existing project? → **N**
- Project name? → プロジェクト名を入力（例: `classless-website`）
- Directory? → **./** （そのままEnter）
- Override settings? → **N**

4. **本番環境にデプロイ**
```bash
vercel --prod
```

### 方法2: GitHub経由でデプロイ（推奨・自動デプロイ）

1. **GitHubリポジトリを作成**
   - GitHubで新しいリポジトリを作成
   - リモートリポジトリを追加：
```bash
git remote add origin https://github.com/your-username/your-repo-name.git
git branch -M main
git push -u origin main
```

2. **Vercelに接続（自動デプロイ設定）**
   - [Vercel](https://vercel.com)にアクセスしてログイン
   - 「Add New Project」をクリック
   - GitHubリポジトリを選択
   - プロジェクト設定を確認（自動検出されます）
   - 「Deploy」をクリック

3. **自動デプロイの確認**
   - Vercelダッシュボードの「Settings」→「Git」で、GitHub連携が有効になっていることを確認
   - `main`ブランチへのプッシュで自動的にデプロイされます

**重要**: GitHubにプッシュするだけで、Vercelが自動的にデプロイを開始します。手動での操作は不要です。

### ビルド設定

Vercelは自動的にViteプロジェクトを検出しますが、以下の設定が含まれています：

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **Framework**: `vite`

### 環境変数

必要に応じて、Vercelダッシュボードの「Settings」→「Environment Variables」から環境変数を設定できます。

## ライセンス

© 2024 Classless LLC. All rights reserved.


