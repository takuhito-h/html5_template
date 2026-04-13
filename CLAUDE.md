# CLAUDE.md

## プロジェクト概要

HTML5 サイト制作の初期構築を効率化するための個人用テンプレート。
Astro + Tailwind CSS 構成で、静的ファイル出力・自動画像最適化まで含めたビルドパイプラインを備える。

## 技術スタック

| 役割 | 技術 |
|------|------|
| フレームワーク | Astro 5（static モード） |
| スタイル | Tailwind CSS v4 + Sass（コンポーネントスコープ） |
| CSS リセット | Tailwind Preflight（`@import "tailwindcss"` に内包） |
| スクリプト | Vanilla TypeScript（Astro コンポーネントの `<script>` にインライン） |
| 画像最適化 | Astro `<Image>` コンポーネント（WebP 変換・圧縮を自動処理） |
| パッケージマネージャ | pnpm 10.33.0 |
| Node.js | 25.2.1（Volta で固定） |

## コマンド

```bash
pnpm start      # 開発サーバー起動 (http://localhost:4321/)
pnpm build      # ビルド（dist/ に出力。画像の WebP 変換・圧縮も自動実行）
pnpm preview    # ビルド済みファイルのプレビュー
pnpm check      # TypeScript / Astro の型チェック
pnpm lint       # ESLint による静的解析
```

## ディレクトリ構成

```
src/
├─ layouts/
│   └─ Default.astro      # 共通レイアウト（tailwind.css の読み込み・GTM 設定など）
├─ components/            # 再利用可能なパーツ（スタイル・スクリプトを内包）
│   ├─ Header.astro
│   ├─ Footer.astro
│   ├─ Drawer.astro       # ドロワー UI・スクリプト・スタイルを一体化
│   ├─ Modal.astro        # モーダル UI・スクリプト・スタイルを一体化（id プロップ必須）
│   ├─ Breadcrumb.astro   # items プロップで構造化データ付きパンくずを出力
│   └─ ContentsArea.astro
├─ pages/                 # URL に対応するページ（1ファイル = 1ページ）
│   └─ index.astro
├─ assets/
│   └─ img/               # 元画像（<Image> コンポーネントで最適化・WebP 変換される）
└─ css/
    └─ tailwind.css       # Tailwind エントリポイント（Preflight + utilities）

public/                   # 最適化不要な静的ファイル（favicon など）
dist/                     # ビルド成果物（コミット不要）
```

## 開発ガイドライン

### HTML / Astro
- 新規ページは `src/pages/` に `.astro` ファイルを作成する（ファイル名が URL になる）
- レイアウトの変更は `src/layouts/Default.astro` を編集する
- 共通パーツは `src/components/` に追加し、ページや他コンポーネントから `import` して使う
- GTM ID など外部サービスの設定は `Default.astro` の Props で渡す

### CSS
- グローバルスタイルは `src/css/tailwind.css` で管理する
- コンポーネント固有のスタイルは各 `.astro` ファイルの `<style>` タグに記述する
- Sass の機能（ネスト・変数など）が必要な場合は `<style lang="scss">` を使う
- `body` など外部要素を参照するスタイルは `<style is:global>` を使う
- レスポンシブ対応には Tailwind のユーティリティクラスまたは `@media` / `@container` を使う

### TypeScript / JavaScript
- インタラクションのロジックは各コンポーネントの `<script>` タグにインライン記述する
- jQuery は使用しない。DOM 操作は Vanilla TypeScript で実装する
- Astro の `<script>` はバンドル・最小化して出力される

### 画像
- 元画像は `src/assets/img/` に配置する
- ページ・コンポーネントで `import` して `<Image>` コンポーネントで使う
- ビルド時に自動で WebP 変換・圧縮が行われる（追加ツール不要）
- `loading="lazy"` を基本とする

```astro
---
import { Image } from 'astro:assets';
import myImage from '../assets/img/photo.jpg';
---
<Image src={myImage} alt="説明文" loading="lazy" />
```

- favicon など最適化不要なファイルは `public/` に置く（そのまま `dist/` にコピーされる）
