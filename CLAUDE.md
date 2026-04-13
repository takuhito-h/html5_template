# CLAUDE.md

## プロジェクト概要

HTML5 サイト制作の初期構築を効率化するための個人用テンプレート。
Vite + Nunjucks + Sass + TypeScript（+ jQuery）構成で、画像最適化・WebP 生成まで含めたビルドパイプラインを備える。

## 技術スタック

| 役割 | 技術 |
|------|------|
| ビルドツール | Vite 7 |
| テンプレートエンジン | Nunjucks（vite-plugin-nunjucks） |
| スタイル | Sass + sanitize.css（vite-plugin-sass-glob-import） |
| スクリプト | TypeScript + jQuery |
| 画像最適化 | vite-plugin-imagemin + sharp-cli（WebP 生成） |
| パッケージマネージャ | Yarn 4.10.3 |
| Node.js | 25.2.1（Volta で固定） |

## コマンド

```bash
yarn start          # 開発サーバー起動 (http://localhost:5173/)
yarn build          # フルビルド（Vite ビルド + WebP 変換）
yarn build:vite     # Vite ビルドのみ
yarn build:webp     # WebP 変換のみ（src/img/**/*.{jpg,png} → public/assets/）
yarn preview        # ビルド済みファイルのプレビュー
```

## ディレクトリ構成

```
src/                          # Vite の root
├─ index.html                 # トップページ（default.njk を継承）
├─ html/
│   ├─ _layouts/
│   │   └─ default.njk        # 共通レイアウト（CSS/JS の読み込み含む）
│   ├─ _partials/             # header, footer, drawer, breadcrumb など
│   └─ _settings/             # analytics, facebook-sdk など
├─ css/
│   ├─ trunk-all.scss         # Sass エントリポイント
│   ├─ foundation/            # base, mixin, variable
│   ├─ layout/                # header, footer, main, wrapper, drawer
│   ├─ object/
│   │   ├─ component/
│   │   ├─ project/
│   │   └─ utility/
│   └─ lib/                   # 外部ライブラリ用
├─ js/
│   ├─ application.ts         # JS エントリポイント
│   └─ module/                # UI モジュール（modal.ts, drawer.ts など）
└─ img/                       # 元画像（ビルド時に public/assets/ へ出力）

public/                       # ビルド成果物（コミット不要）
copy/                         # 静的コピーしたいファイル（必要に応じて作成）
```

## 開発ガイドライン

### HTML / Nunjucks
- 新規ページは `src/index.html` を参考に `{% extends %}` / `{% include %}` を使って作成する
- レイアウトの変更は `src/html/_layouts/default.njk` を編集する
- パーツは `src/html/_partials/` に追加し、レイアウトや各ページから `{% include %}` する

### Sass / CSS
- CSS アーキテクチャは FLOCSS に準拠（foundation / layout / object）
- 新しいスタイルファイルは適切なカテゴリのディレクトリに配置する
- `trunk-all.scss` はグロブインポートのため、ファイルを追加するだけで自動的に読み込まれる
- CSS リセットには sanitize.css を使用している（独自リセットは書かない）

### TypeScript / JavaScript
- UI モジュールは `src/js/module/` に配置し、`application.ts` から import して使用する
- jQuery を使用しているため、DOM 操作には jQuery を優先する
- クラスベースでモジュールを実装する（既存の `modal.ts`, `drawer.ts` を参考にする）

### 画像
- 元画像は `src/img/` に配置する
- ビルド時に `vite-plugin-imagemin` で圧縮され `public/assets/` に出力される
- `yarn build:webp` で JPG/PNG から WebP を `public/assets/` に生成する
- HTML 内では `loading="lazy"` を基本とする

### 静的ファイル
- そのままコピーしたいファイルは `copy/` ディレクトリを作成して配置する（ビルド時に `public/` へ転送される）
