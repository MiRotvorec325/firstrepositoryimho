// Примеры квартир для главной страницы. Районы настоящие, цены и минуты примерные.
// На паре 5 данные будут браться из базы.
export interface Apartment {
  id: string;
  district: string;
  metro: string;
  rooms: number;
  pricePerMonth: number;
  minutesToKindergarten: number;
  minutesToSchool: number;
  minutesToClinic: number;
}

export const apartments: Apartment[] = [
  {
    id: "primorsky-2",
    district: "Приморский район",
    metro: "Старая Деревня",
    rooms: 2,
    pricePerMonth: 45000,
    minutesToKindergarten: 5,
    minutesToSchool: 8,
    minutesToClinic: 12,
  },
  {
    id: "moskovsky-3",
    district: "Московский район",
    metro: "Электросила",
    rooms: 3,
    pricePerMonth: 62000,
    minutesToKindergarten: 7,
    minutesToSchool: 4,
    minutesToClinic: 9,
  },
  {
    id: "nevsky-1",
    district: "Невский район",
    metro: "Ломоносовская",
    rooms: 1,
    pricePerMonth: 35000,
    minutesToKindergarten: 10,
    minutesToSchool: 12,
    minutesToClinic: 6,
  },
];
