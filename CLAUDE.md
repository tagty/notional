# CLAUDE.md

このファイルはリポジトリ内で作業する Claude Code へのガイダンスを提供します。

@AGENTS.md

## コマンド

```bash
pnpm dev          # 開発サーバー起動 (http://localhost:3000)
pnpm build        # プロダクションビルド
pnpm lint         # ESLint 実行
pnpm test:e2e     # Playwright E2E テスト（事前に pnpm dev が必要）
```

shadcn/ui コンポーネントの追加:
```bash
pnpm dlx shadcn@latest add <component>
```

Supabase マイグレーション:
```bash
supabase migration new <name>   # マイグレーション作成
supabase db push                # リモートに適用
```

## スタック

- **Next.js 16** (App Router) + **TypeScript** + **Tailwind CSS v4**
- **shadcn/ui** — UI コンポーネントライブラリ（`@base-ui/react` ベース）。設定は `components.json`
- **Supabase** — データベース。`src/lib/supabase.ts` でクライアント初期化
- **Playwright** — E2E テスト。テストは `e2e/` に配置
- **TanStack Table** — テーブルレンダリング（導入予定）
- **pnpm** — パッケージマネージャー

## プロジェクト概要

Notional は Notion の table view に似た個人向けデータベースアプリ。想定データモデル: `tables / columns / rows / cells`。

## 規約

- インポートエイリアス: `@/*` → `src/*`
- UI コンポーネント: `src/components/ui/`
- ユーティリティ: `src/lib/utils.ts`（shadcn の `cn` ヘルパー）
- Tailwind v4 は `@import "tailwindcss"` を使用（`tailwind.config.js` 不要）。CSS 変数は `globals.css` の `@theme inline` で定義
- `buttonVariants` は `src/lib/button-variants.ts` に定義（Server Component から使用可能）
- Supabase の読み取りは `supabase`（anon key）、書き込み等の管理操作は `supabaseAdmin`（service role key）を使用
