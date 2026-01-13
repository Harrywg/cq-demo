import CardData from "./card_data.json";
import type { Card } from "./types";

const duplicateArray = <T>(arr: T[], times: number): T[] => {
    const result: T[] = [];
    for (let i = 0; i < times; i++) result.push(...arr);
    return result;
}

export const getCards = (amount: number): Card[] => {
    if (amount > CardData.length) {
        const repeatTimes = Math.ceil(amount / CardData.length);
        return duplicateArray<Card>(CardData, repeatTimes);
    } else {
        return CardData.slice(0, amount);
    }
}