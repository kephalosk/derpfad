import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 37;
const name: string = 'Pointer doctl';

export const concept37PointerDoctl: ConceptContent = {
    heading: `${ContentEnum.CONCEPT} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson3/lesson3concept37.jpg'),
    number,
    name,
    definition:  [
        'Globally integration in the PATH',
    ],
    reason: [],
    sidenotes: [],
    references: [],
}