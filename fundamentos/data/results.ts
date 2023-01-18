import {faker} from "@faker-js/faker";

export interface Result {
    driver: string;
    team: string;
    points: number;
}

export const results: Result[] = Array(Number(20)).fill('').map(() => ({
    driver: faker.name.firstName(),
    team: faker.helpers.arrayElement(["Mercedes", "Ferrari", "Red Bull", "McLaren", "Renault"]),
    points: faker.helpers.arrayElement([25, 18, 15, 12, 10, 8, 6, 4, 2, 1])
}));