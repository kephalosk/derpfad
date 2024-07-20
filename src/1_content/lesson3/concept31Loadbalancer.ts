import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 31;
const name: string = 'Loadbalancer';

export const concept31Loadbalancer: ConceptContent = {
    heading: `${ContentEnum.CONCEPT} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson3/lesson3concept31.jpg'),
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