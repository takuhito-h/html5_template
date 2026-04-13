# CLAUDE.md

## プロジェクト概要

HTML5 サイト制作の初期構築を効率化するための個人用テンプレート。
Astro + Sass + TypeScript 構成で、静的ファイル出力・WebP 生成まで含めたビルドパイプラインを備える。

## 技術スタック

| 役割 | 技術 |
|------|------|
| フレームワーク | Astro 5（static モード） |
| スタイル | Sass + sanitize.css（vite-plugin-sass-glob-import） |
| スクリプト | TypeScript（Vanilla TS、jQuery なし） |
| 画像最適化 | sharp-cli（WebP 生成） |
| パッケージマネージャ | pnpm 10.33.0 |
| Node.js | 25.2.1（Volta で固定） |

## コマンド

```bash
yarn start          # 開発サーバー起動 (http://localhost:4321/)
yarn build          # フルビルド（Astro ビルド + WebP 変換）
yarn build:astro    # Astro ビルドのみ（dist/ に出力）
yarn build:webp     # WebP 変換のみ（public/img/**/*.{jpg,png} → dist/assets/）
yarn preview        # ビルド済みファイルのプレビュー
yarn check          # TypeScript / Astro の型チェック
```

## ディレクトリ構成

```
src/
├─ layouts/
│   └─ Default.astro          # 共通レイアウト（CSS/JS の読み込み含む）
├─ components/                # 再利用可能なパーツ
│   ├─ Header.astro
│   ├─ Footer.astro
│   ├─ Drawer.astro
│   ├─ Breadcrumb.astro       # items プロップで構造化データ付きパンくずを出力
│   └─ ContentsArea.astro
├─ pages/                     # URL に対応するページ（1ファイル = 1ページ）
│   └─ index.astro
├─ css/
│   ├─ trunk-all.scss         # Sass エントリポイント（グロブインポート）
│   ├─ foundation/            # base, mixin, variable
│   ├─ layout/                # header, footer, main, wrapper, drawer
│   ├─ object/
│   │   ├─ component/
│   │   ├─ project/
│   │   └─ utility/
│   └─ library/               # 外部ライブラリ用
├─ scripts/                   # TypeScript モジュール（jQuery なし）
│   ├─ drawer.ts
│   └─ modal.ts
└─ img/ ※現在は使用していない（画像は public/img/ に配置）

public/                       # 静的ファイル（そのまま dist/ にコピーされる）
│   └─ img/                   # 元画像を配置する（/img/ファイル名 で参照可能）
dist/                         # ビルド成果物（コミット不要）
```

## 開発ガイドライン

### HTML / Astro
- 新規ページは `src/pages/` に `.astro` ファイルを作成する（ファイル名が URL になる）
- レイアウトの変更は `src/layouts/Default.astro` を編集する
- 共通パーツは `src/components/` に追加し、ページや他コンポーネントから `import` して使う
- CSS のグローバル読み込みは `Default.astro` のフロントマターで `import '../css/trunk-all.scss'` として行う
- GTM ID など外部サービスの設定は `Default.astro` の Props で渡す

### Sass / CSS
- CSS アーキテクチャは FLOCSS に準拠（foundation / layout / object）
- 新しいスタイルファイルは適切なカテゴリのディレクトリに配置する
- `trunk-all.scss` はグロブインポートのため、ファイルを追加するだけで自動的に読み込まれる
- CSS リセットには sanitize.css を使用している（独自リセットは書かない）

#### FLOCSS クラス命名規則

| レイヤー | プレフィックス | 例 |
|----------|--------------|-----|
| Layout | `l-` | `l-header`, `l-footer` |
| Component | `c-` | `c-button`, `c-modal-default` |
| Project | `p-[ページ名]-` | `p-home-banner`, `p-about-hero` |
| Utility | `u-` | `u-hidden`, `u-mt-16` |

- **Project レイヤー**のクラスは `p-[ページ名]-[ブロック名]` の形式とする
  - SCSS ファイル名（例: `_home.scss`）のページ名を `p-` の直後に付ける
- Project の SCSS ファイルは `src/css/object/project/` に `_[ページ名].scss` で作成する

### TypeScript / JavaScript
- UI モジュールは `src/scripts/` に配置し、`Default.astro` の `<script>` タグから import して初期化する
- jQuery は使用しない。DOM 操作は Vanilla TypeScript で実装する
- クラスベースでモジュールを実装する（既存の `modal.ts`, `drawer.ts` を参考にする）
- `Default.astro` 内の `<script>` は Astro がバンドル・最小化して出力する

### 画像
- 元画像は `public/img/` に配置する
- HTML 内では `/img/ファイル名` で参照できる
- `yarn build:webp` で JPG/PNG から WebP を `dist/assets/` に生成する
- HTML 内では `loading="lazy"` を基本とする

### 静的ファイル
- `public/` ディレクトリに置いたファイルはそのまま `dist/` にコピーされる
