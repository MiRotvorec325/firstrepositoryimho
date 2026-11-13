import { expect, test } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { createElement } from "react";
import { ApartmentCard } from "@/components/apartment-card";
import { apartments } from "@/lib/apartments";
test("карточка квартиры показывает район, цену и минуты до сада, школы и поликлиники", () => {
  const html = renderToStaticMarkup(
    createElement(ApartmentCard, {
      apartment: {
        id: "test",
        district: "Тестовый район",
        metro: "Тестовая",
        rooms: 2,
        pricePerMonth: 45000,
        minutesToKindergarten: 5,
        minutesToSchool: 8,
        minutesToClinic: 12,
      },
    }),
  );
  expect(html).toContain("Тестовый район");
  expect(html).toContain("45 000 ₽ в месяц");
  expect(html).toContain("Сад — 5 мин пешком");
  expect(html).toContain("Школа — 8 мин пешком");
  expect(html).toContain("Поликлиника — 12 мин пешком");
});
test("на главной три примера квартир", () => {
  expect(apartments).toHaveLength(3);
});
