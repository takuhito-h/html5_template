# html5_template

HTML5 サイト制作の初期構築を効率化するための個人用テンプレートです。Astro をベースに Sass / TypeScript を組み合わせ、静的ファイル出力と WebP 生成まで含めたビルドパイプラインを備えています。

## 特徴
- Astro 5（static モード）による静的ファイル出力（`dist/` へ）
- Astro コンポーネントによるレイアウト継承とパーツ管理（`src/layouts/`, `src/components/`）
- Sass（sanitize.css、グロブインポート対応）による FLOCSS スタイル設計（`src/css/trunk-all.scss` がエントリ）
- Vanilla TypeScript による UI コンポーネント実装（jQuery なし）
- `sharp-cli` での WebP 自動生成

## 必要環境
- Node.js 25.2.1（Volta でバージョン固定）
- Yarn 4.12.0

## セットアップ
```bash
yarn install
yarn start
```
開発サーバーは `http://localhost:4321/` で立ち上がります。

## 定義済みスクリプト
- `yarn start`：Astro の開発サーバーを起動します。
- `yarn build`：Astro ビルド（`dist/` 出力）と JPG/PNG の WebP 変換をまとめて実行します。
- `yarn build:astro`：Astro のみでビルドする際に利用します。
- `yarn build:webp`：`sharp-cli` を使って `public/img/` 内の画像を WebP 化します。
- `yarn preview`：ビルド済みファイルをローカルサーバーでプレビューします。
- `yarn check`：TypeScript と Astro の型チェックを実行します。

## ディレクトリ構成
```text
src/
├─ layouts/
│   └─ Default.astro      # 共通レイアウト。CSS/JS の読み込み・GTM 設定などを含む
├─ components/            # 再利用可能なパーツ（Header, Footer, Drawer, Breadcrumb など）
├─ pages/                 # URL に対応するページ（1ファイル = 1ページ）
│   └─ index.astro
├─ css/                   # Sass。trunk-all.scss がエントリ（グロブインポート）
│   ├─ foundation/        # 変数・Mixin・ベーススタイル
│   ├─ layout/            # ヘッダー・フッター・ドロワーなど
│   └─ object/            # component / project / utility
└─ scripts/               # TypeScript モジュール（drawer.ts, modal.ts など）

public/
└─ img/                   # 元画像を配置（/img/ファイル名 で参照）

dist/                     # yarn build の生成物（コミット不要）
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
    <main class="l-main" role="main">
        <!-- コンテンツ -->
    </main>
    <Footer />
</Default>
```

## スタイルの追加
`src/css/` の適切なディレクトリに `_ファイル名.scss` を作成するだけで、グロブインポートにより自動的に読み込まれます。FLOCSS に準拠したクラス命名（`l-`, `c-`, `p-`, `u-`）を使用してください。

## GTM の設定
`Default.astro` に `gtmId` プロップを渡すと GTM が有効になります。

```astro
<Default title="ページタイトル" gtmId="GTM-XXXXXXX">
```
