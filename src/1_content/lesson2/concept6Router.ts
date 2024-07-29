import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 6;
const name: string = 'Router';

export const concept6Router: ConceptContent = {
    heading: `${ContentEnum.CONCEPT} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson2/lesson2concept6.jpg'),
    number,
    name,
    notes: [
        'Network device',
        'Directs data packets',
        'Network Communication: Enables communication between different networks',
        'Internet Access: Provides internet connectivity to multiple devices',
    ],
    references: [],
}