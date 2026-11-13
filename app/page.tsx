import { ApartmentCard } from "@/components/apartment-card";
import { Button } from "@/components/ui/button";
import { apartments } from "@/lib/apartments";
export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-12">
      <p className="text-caption font-semibold text-primary">
        АРЕНДА ДЛЯ СЕМЕЙ С ДЕТЬМИ · САНКТ-ПЕТЕРБУРГ
      </p>
      <h1 className="mt-5 text-display font-semibold">Двор</h1>
      <p className="mt-5 max-w-2xl text-body text-secondary">
        Помогаем семье с ребёнком найти квартиру в новом городе: сразу видно,
        сколько идти до сада, школы и поликлиники.
      </p>
      <section
        className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        aria-label="Квартиры"
      >
        {apartments.map((apartment) => (
          <ApartmentCard key={apartment.id} apartment={apartment} />
        ))}
      </section>
      <p className="mt-4 text-caption text-secondary">
        Это примеры: настоящие объявления появятся, когда подключим базу.
      </p>
      <div className="mt-10">
        <Button asChild>
          <a href="/api/health">Проверить серверный маршрут</a>
        </Button>
      </div>
    </main>
  );
}
