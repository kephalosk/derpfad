import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 28;
const name: string = 'Worker Node';

export const concept28WorkerNode: ConceptContent = {
    heading: `${ContentEnum.CONCEPT} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson3/lesson3concept28.jpg'),
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