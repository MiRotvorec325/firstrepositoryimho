import type { Apartment } from "@/lib/apartments";

const priceFormat = new Intl.NumberFormat("ru-RU");

export function ApartmentCard({ apartment }: { apartment: Apartment }) {
  const nearby = [
    { label: "Сад", minutes: apartment.minutesToKindergarten },
    { label: "Школа", minutes: apartment.minutesToSchool },
    { label: "Поликлиника", minutes: apartment.minutesToClinic },
  ];
  return (
    <article className="rounded-card border border-line bg-surface p-6 shadow-card">
      <p className="text-caption text-secondary">м. {apartment.metro}</p>
      <h2 className="mt-1 text-title font-semibold">{apartment.district}</h2>
      <p className="mt-3 text-body">
        {apartment.rooms}-комн. ·{" "}
        <span className="font-semibold">
          {priceFormat.format(apartment.pricePerMonth)} ₽ в месяц
        </span>
      </p>
      <ul className="mt-4 grid gap-1 text-caption text-secondary" aria-label="Рядом пешком">
        {nearby.map((place) => (
          <li key={place.label}>
            {place.label} — {place.minutes} мин пешком
          </li>
        ))}
      </ul>
    </article>
  );
}
