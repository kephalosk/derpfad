import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 18;
const name: string = 'Custom Binaries Directory';

export const concept18CustomBinariesDirectory: ConceptContent = {
    heading: `${ContentEnum.CONCEPT} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson2/lesson2concept18.jpg'),
    number,
    name,
    definition:  [
        'Directory for storing user-installed executable files',
    ],
    reason: [
        {
            buzzword: 'Separation',
            explanation: 'Keeps user-installed binaries separate from system files to avoid conflicts',
        },
        {
            buzzword: 'Organization',
            explanation: 'Provides a structured location for managing personal or third-party executables',
        },
    ],
    sidenotes: [
        'In Windows there is no special location for custom binaries by default.'
    ],
    references: [],
}