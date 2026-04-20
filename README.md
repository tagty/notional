# Notional

Notion の table view に似た個人向けデータベースアプリ。

## スタック

- Next.js 16 (App Router) / TypeScript
- Tailwind CSS v4 / shadcn/ui
- Supabase
- Playwright (E2E テスト)
- TanStack Table（導入予定）
- pnpm

## 開発

```bash
pnpm install
pnpm dev
```

http://localhost:3000 で起動します。

## テスト

```bash
pnpm test:e2e   # E2Eテスト（事前に pnpm dev が必要）
```

## 環境変数

`.env.local` を作成して以下を設定:

```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
```
