import { test, expect } from "@playwright/test";
test("главная «Двора» показывает квартиры, а запрос к серверу доступен без ключей", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page).toHaveTitle("Dvor");
  await expect(page.getByRole("heading", { name: "Двор", level: 1 })).toBeVisible();
  await expect(
    page.getByRole("region", { name: "Квартиры" }).getByRole("article"),
  ).toHaveCount(3);
  await page.getByRole("link", { name: "Проверить серверный маршрут" }).click();
  await expect(page.locator("body")).toContainText('"ok":true');
});
