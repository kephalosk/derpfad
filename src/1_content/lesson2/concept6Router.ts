import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 6;
const name: string = 'Router';

export const concept6Router: ConceptContent = {
    heading: `${ContentEnum.CONCEPT} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson2/lesson2concept6.jpg'),
    number,
    name,
    definition:  [
        'Network device',
        'Directs data packets'
    ],
    reason: [
        {
            buzzword: 'Network Communication',
            explanation: 'Enables communication between different networks',
        },
        {
            buzzword: 'Internet Access',
            explanation: 'Provides internet connectivity to multiple devices',
        }
    ],
    sidenotes: [],
    references: [],
}