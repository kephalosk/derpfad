import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 2;
const name: string = 'Operating System';

export const concept2OperatingSystem: ConceptContent = {
    heading: `${ContentEnum.CHAPTER} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson1/lesson1concept2.jpg'),
    number,
    name,
    definition: 'An operating system is software that manages a computer\'s hardware and provides common services for computer programs.',
    buzzwords: [
        'Resource Management',
        'User Interface',
        'Security and Stability'
    ],
    explanations: [
        'An Operating System efficiently manages and allocates hardware resources such as CPU, memory, and storage to various applications.',
        'It provides a user interface, enabling users to interact with the computer through graphical or command-line interfaces.',
        'These programs help in outlining website content, facilitating the planning and organization of information before implementation.'
    ],
    references: [],
}