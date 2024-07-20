import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 7;
const name: string = 'Wide Area Network';

export const concept7WideAreaNetwork: ConceptContent = {
    heading: `${ContentEnum.CONCEPT} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson2/lesson2concept7.jpg'),
    number,
    name,
    definition:  [
        'Telecommunications network',
        'Covers large geographical areas'
    ],
    reason: [
        {
            buzzword: 'Geographical Reach',
            explanation: 'Connects remote locations over large distances',
        },
        {
            buzzword: 'Internet Access',
            explanation: 'Provides internet connectivity to regional and remote areas',
        }
    ],
    sidenotes: [],
    references: [],
}