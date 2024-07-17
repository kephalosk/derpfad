import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 15;
const name: string = 'Terminal';

export const concept8InternetProvider: ConceptContent = {
    heading: `${ContentEnum.CHAPTER} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson2/lesson2concept15.jpg'),
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
        },
        {
            buzzword: '',
            explanation: '',
        }
    ],
    sidenotes: [],
    references: [],
}