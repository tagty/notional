import { test, expect } from "@playwright/test";

test("新規ページ作成", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "新規ページ" }).click();

  // 詳細ページに遷移する
  await expect(page).toHaveURL(/\/pages\/.+/);

  // ページ名が表示される
  await expect(page.getByRole("heading", { name: "New page" })).toBeVisible();

  // サイドバーに新しいページが表示される
  await expect(page.getByRole("link", { name: "New page" }).first()).toBeVisible();
});
