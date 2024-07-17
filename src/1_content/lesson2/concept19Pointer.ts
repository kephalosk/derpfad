import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 19;
const name: string = 'Pointer';

export const concept8InternetProvider: ConceptContent = {
    heading: `${ContentEnum.CHAPTER} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson2/lesson2concept19.jpg'),
    number,
    name,
    definition:  [
        '',
    ],
    reason: [
        {
            buzzword: '',
            explanation: '',
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
        'In macOS and Linux a pointer is called Alias for a relativ target',
        'In macOS and Linux a pointer is called symlink for a hard target',
        'In Windows a pointer is called Shortcut',
    ],
    references: [],
}