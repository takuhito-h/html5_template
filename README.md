# html5_template

HTML5 サイト制作の初期構築を効率化するための個人用テンプレートです。Vite をベースに Nunjucks / Sass / TypeScript（＋ jQuery）を組み合わせ、画像最適化や WebP 生成まで含めたビルドパイプラインを備えています。

## 特徴
- Vite 7 による高速な開発サーバーとビルド (`src/` がルート)
- Nunjucks テンプレートでレイアウト継承とパーツ管理 (`src/html`)
- Sass（sanitize.css、グロブインポート対応）によるスタイル設計 (`src/css/trunk-all.scss` がエントリ)
- TypeScript + jQuery による UI コンポーネント実装 (`src/js/application.ts` がエントリ)
- `vite-plugin-imagemin` と `sharp-cli` での画像最適化・WebP 自動生成

## 必要環境
- Node.js 22.20.0（Volta でバージョン固定）
- Yarn 4.10.3
- `sharp` が動作するネイティブ依存ライブラリ（環境に応じて `libvips` など）

## セットアップ
```bash
yarn install
yarn start
```
開発サーバーは `http://localhost:5173/` で立ち上がります。

## 定義済みスクリプト
- `yarn start`：Vite の開発サーバーを起動します。
- `yarn build`：Vite ビルド (`public/` 出力) と JPG/PNG の WebP 変換をまとめて実行します。
- `yarn build:vite`：Vite のみでビルドする際に利用します。
- `yarn build:webp`：`sharp-cli` を使って `src/img` 内の画像を WebP 化します。
- `yarn preview`：ビルド済みファイルをローカルでプレビューします。

## ディレクトリ構成
```text
src/                      # 開発用ソース（Vite の root）
├─ index.html             # トップページ。default.njk を継承
├─ html/                  # Nunjucks のレイアウト・パーツ・設定
├─ css/                   # Sass。trunk-all.scss がエントリ
├─ js/                    # TypeScript。application.ts がメインエントリ
└─ img/                   # 元画像（ビルド時に public/assets/ へ出力）
public/                   # yarn build の生成物
copy/                     # 静的コピーしたいファイルを置く場所（必要に応じて作成）
```

## テンプレートの使い方メモ
- `src/html/_layouts/default.njk` で `<link rel="stylesheet" href="css/trunk-all.scss">` と `<script src="js/application.ts" type="module">` を読み込む構成です。新規ページを追加するときは `src/index.html` を参考に Nunjucks の `extends` / `include` を利用してください。
- Sass の各カテゴリは `foundation/`, `layout/`, `object/` などに分割し、`src/css/trunk-all.scss` でグロブインポートしています。初期化処理には `sanitize.css` を使用しています。
- TypeScript の UI モジュール（`modal.ts`, `drawer.ts` など）は `src/js/module/` 配下に配置します。`application.ts` から必要なモジュールを読み込む想定です。
- 画像は `vite-plugin-imagemin` で圧縮した上で、`sharp-cli` により WebP を `public/assets/` に生成します。オリジナルファイルは `src/img/` にまとめておきます。
- そのままコピーしたい静的ファイルを追加する場合は `copy/` ディレクトリを作成してファイルを置くと、ビルド時に `public/` へ転送されます。

