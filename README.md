# html5_template

HTML5 サイト制作の初期構築を効率化するための個人用テンプレートです。Astro をベースに Tailwind CSS / Sass / TypeScript を組み合わせ、静的ファイル出力と WebP 生成まで含めたビルドパイプラインを備えています。

## 特徴
- Astro 5（static モード）による静的ファイル出力（`dist/` へ）
- Astro コンポーネントによるレイアウト継承とパーツ管理（`src/layouts/`, `src/components/`）
- Tailwind CSS v4 によるユーティリティファーストのスタイル設計
- コンポーネントスコープの `<style>` タグで局所的なスタイルを管理
- Vanilla TypeScript による UI コンポーネント実装（Astro `<script>` にインライン、jQuery なし）
- Astro `<Image>` コンポーネントによる画像の自動 WebP 変換・圧縮

## 必要環境
- Node.js 25.2.1（Volta でバージョン固定）
- pnpm 10.33.0（Volta でバージョン固定）

## セットアップ
```bash
pnpm install
pnpm start
```
開発サーバーは `http://localhost:4321/` で立ち上がります。

## 定義済みスクリプト
- `pnpm start`：Astro の開発サーバーを起動します。
- `pnpm build`：Astro ビルド（`dist/` 出力）。`<Image>` コンポーネントを使った画像は自動で WebP 変換・圧縮されます。
- `pnpm preview`：ビルド済みファイルをローカルサーバーでプレビューします。
- `pnpm check`：TypeScript と Astro の型チェックを実行します。
- `pnpm lint`：ESLint による静的解析を実行します。

## ディレクトリ構成
```text
src/
├─ layouts/
│   └─ Default.astro      # 共通レイアウト。Tailwind・GTM 設定などを含む
├─ components/            # 再利用可能なパーツ（スタイル・スクリプトを内包）
│   ├─ Header.astro
│   ├─ Footer.astro
│   ├─ Drawer.astro       # ドロワー（スクリプト・スタイル一体）
│   ├─ Modal.astro        # モーダル（スクリプト・スタイル一体）
│   ├─ Breadcrumb.astro   # 構造化データ付きパンくず
│   └─ ContentsArea.astro
├─ pages/                 # URL に対応するページ（1ファイル = 1ページ）
│   └─ index.astro
├─ assets/
│   └─ img/               # 元画像（<Image> コンポーネントで最適化・WebP 変換）
└─ css/
    └─ tailwind.css       # Tailwind エントリポイント

public/                   # favicon など最適化不要な静的ファイル
dist/                     # pnpm build の生成物（コミット不要）
```

## 新規ページの追加
`src/pages/` に `.astro` ファイルを作成します。ファイル名が URL になります。

```astro
---
import Default from '../layouts/Default.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
---

<Default title="ページタイトル">
    <Header />
    <main role="main">
        <!-- コンテンツ -->
    </main>
    <Footer />
</Default>
```

## スタイルの追加

### Tailwind ユーティリティ（推奨）
```html
<div class="mt-8 flex gap-4">...</div>
```

### コンポーネントスコープの CSS
各 `.astro` ファイルの `<style>` タグに記述します。Astro が自動でスコープを付与するため、クラス名の衝突を気にせず書けます。

```astro
<style>
    .title {
        font-size: 2rem;
    }
</style>
```

## GTM の設定
`Default.astro` に `gtmId` プロップを渡すと GTM が有効になります。

```astro
<Default title="ページタイトル" gtmId="GTM-XXXXXXX">
```
