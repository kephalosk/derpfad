import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 2;
const name: string = 'Operating System';

export const concept2OperatingSystem: ConceptContent = {
    heading: `${ContentEnum.CONCEPT} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson1/lesson1concept2.jpg'),
    number,
    name,
    notes: [
        'Manages a computer\'s hardware',
        'Provides common services for computer programs',
        'User Interface: Enables users to interact with the computer',
        'Resource Management: Allocates hardware resources (CPU, memory, storage) to applications'
    ],
    references: [],
}