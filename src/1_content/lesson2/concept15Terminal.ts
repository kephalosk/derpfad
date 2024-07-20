import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 15;
const name: string = 'Terminal';

export const concept15Terminal: ConceptContent = {
    heading: `${ContentEnum.CONCEPT} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson2/lesson2concept15.jpg'),
    number,
    name,
    definition:  [
        'Interface for interacting with the operating system through a command-line shell',
    ],
    reason: [
        {
            buzzword: 'Visibility',
            explanation: 'Displays text-based input and output between the user and the system',
        },
        {
            buzzword: 'Customization',
            explanation: 'Supports customization of appearance and behavior',
        }
    ],
    sidenotes: [],
    references: [],
}