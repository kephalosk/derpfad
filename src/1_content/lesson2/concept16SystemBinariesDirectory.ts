import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 16;
const name: string = 'System Binaries Directory';

export const concept16SystemBinariesDirectory: ConceptContent = {
    heading: `${ContentEnum.CONCEPT} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson2/lesson2concept16.jpg'),
    number,
    name,
    definition:  [
        'Directory containing essential system executable files',
    ],
    reason: [
        {
            buzzword: 'Consistency',
            explanation: 'Ensures that core utilities are available in standard locations for system scripts and commands',
        },
        {
            buzzword: '',
            explanation: '',
        },
        {
            buzzword: '',
            explanation: '',
        }
    ],
    sidenotes: [
        'In Windows system binaries are stored in the folder system32'
    ],
    references: [],
}