import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 2;
const name: string = 'Operating System';

export const concept2OperatingSystem: ConceptContent = {
    heading: `${ContentEnum.CHAPTER} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson1/lesson1concept2.jpg'),
    number,
    name,
    definition: [
        'Manages a computer\'s hardware',
        'Provides common services for computer programs',
    ],
    reason: [
        {
            buzzword: 'User Interface',
            explanation: 'Enables users to interact with the computer',
        },
        {
            buzzword: 'Resource Management',
            explanation: 'Allocates hardware resources (CPU, memory, storage) to applications',
        }
    ],
    sidenotes: [],
    references: [],
}