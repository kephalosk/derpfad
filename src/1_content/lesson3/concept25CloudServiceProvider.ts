import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 25;
const name: string = 'Cloud Service Provider';

export const concept25CloudServiceProvider: ConceptContent = {
    heading: `${ContentEnum.CONCEPT} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson3/lesson3concept25.jpg'),
    number,
    name,
    definition:  [
        '',
    ],
    reason: [
        {
            buzzword: '',
            explanation: '',
        },
        {
            buzzword: '',
            explanation: '',
        }
    ],
    sidenotes: [],
    references: [],
}