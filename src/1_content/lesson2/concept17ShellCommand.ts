import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 17;
const name: string = 'Shell Command';

export const concept17ShellCommand: ConceptContent = {
    heading: `${ContentEnum.CONCEPT} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson2/lesson2concept17.jpg'),
    number,
    name,
    definition:  [
        'Instruction entered into a shell to perform a specific task',
    ],
    reason: [
        {
            buzzword: 'System Control',
            explanation: 'Provides direct control over system functions and operations',
        },
        {
            buzzword: 'Efficiency',
            explanation: 'Allows quick execution of tasks without graphical interfaces',
        }
    ],
    sidenotes: [],
    references: [],
}