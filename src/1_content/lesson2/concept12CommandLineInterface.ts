import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 12;
const name: string = 'Command Line Interface';

export const concept12CommandLineInterface: ConceptContent = {
    heading: `${ContentEnum.CONCEPT} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson2/lesson2concept12.jpg'),
    number,
    name,
    notes: [
        'Text-based interface for interacting with a computer',
        'Efficiency: Enables quick and direct execution of commands',
        'Customization: Allows customization and complex configuration',
    ],
    references: [],
}