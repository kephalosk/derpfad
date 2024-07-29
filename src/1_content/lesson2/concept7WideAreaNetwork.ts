import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 7;
const name: string = 'Wide Area Network';

export const concept7WideAreaNetwork: ConceptContent = {
    heading: `${ContentEnum.CONCEPT} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson2/lesson2concept7.jpg'),
    number,
    name,
    notes: [
        'Telecommunications network',
        'Covers large geographical areas',
        'Geographical Reach: Connects remote locations over large distances',
        'Internet Access: Provides internet connectivity to regional and remote areas',
    ],
    references: [],
}