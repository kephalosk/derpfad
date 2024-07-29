import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 14;
const name: string = 'Shell';

export const concept14Shell: ConceptContent = {
    heading: `${ContentEnum.CONCEPT} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson2/lesson2concept14.jpg'),
    number,
    name,
    notes: [
        'Command-line interface for interacting with the operating system',
        'Functionality: Executes commands and scripts',
        'Control: Offers detailed control over system operations and processes',
    ],
    references: [],
}