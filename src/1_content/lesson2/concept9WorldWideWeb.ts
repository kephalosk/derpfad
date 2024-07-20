import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 9;
const name: string = 'World Wide Web';

export const concept9WorldWideWeb: ConceptContent = {
    heading: `${ContentEnum.CONCEPT} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson2/lesson2concept9.jpg'),
    number,
    name,
    definition:  [
        'System of interlinked hypertext documents',
        'Accessible via the internet',
        'Uses HTTP/HTTPS protocols',
    ],
    reason: [
        {
            buzzword: 'Standardization',
            explanation: 'Governed by the World Wide Web Consortium (W3C)',
        },
        {
            buzzword: 'Information Access',
            explanation: 'Provides global access to information and knowledge',
        }
    ],
    sidenotes: [
        'Invented by Tim Berners-Lee in 1989'
    ],
    references: [],
}