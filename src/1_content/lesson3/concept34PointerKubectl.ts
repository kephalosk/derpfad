import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 34;
const name: string = 'Pointer kubectl';

export const concept34PointerKubectl: ConceptContent = {
    heading: `${ContentEnum.CONCEPT} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson3/lesson3concept34.jpg'),
    number,
    name,
    definition:  [
        'Globally integration in the PATH',
    ],
    reason: [],
    sidenotes: [],
    references: [],
}