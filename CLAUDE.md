# CLAUDE.md

このファイルはリポジトリ内で作業する Claude Code へのガイダンスを提供します。

@AGENTS.md

## コマンド

```bash
pnpm dev          # 開発サーバー起動 (http://localhost:3000)
pnpm build        # プロダクションビルド
pnpm lint         # ESLint 実行
```

shadcn/ui コンポーネントの追加:
```bash
pnpm dlx shadcn@latest add <component>
```

## スタック

- **Next.js 16** (App Router) + **TypeScript** + **Tailwind CSS v4**
- **shadcn/ui** — UI コンポーネントライブラリ。設定は `components.json`
- **Supabase** — データベース（導入予定）
- **TanStack Table** — テーブルレンダリング（導入予定）
- **pnpm** — パッケージマネージャー

## プロジェクト概要

Notional は Notion の table view に似た個人向けデータベースアプリ。想定データモデル: `tables / columns / rows / cells`。

## 規約

- インポートエイリアス: `@/*` → `src/*`
- UI コンポーネント: `src/components/ui/`
- ユーティリティ: `src/lib/utils.ts`（shadcn の `cn` ヘルパー）
- Tailwind v4 は `@import "tailwindcss"` を使用（`tailwind.config.js` 不要）。CSS 変数は `globals.css` の `@theme inline` で定義
