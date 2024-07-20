import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 10;
const name: string = 'Server';

export const concept10Server: ConceptContent = {
    heading: `${ContentEnum.CONCEPT} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson2/lesson2concept10.jpg'),
    number,
    name,
    definition:  [
        'Computer system or device',
    ],
    reason: [
        {
            buzzword: 'Functionality',
            explanation: 'Provides services or resources to other computers (clients)',
        },
        {
            buzzword: 'Resource Management',
            explanation: 'Centralizes management of resources (e.g., files, applications)',
        },
    ],
    sidenotes: [],
    references: [],
}