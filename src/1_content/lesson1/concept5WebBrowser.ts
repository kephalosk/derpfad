import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 5;
const name: string = 'Web Browser';

export const concept5WebBrowser: ConceptContent = {
    heading: `${ContentEnum.CHAPTER} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson1/lesson1concept5.jpg'),
    number,
    name,
    definition: [
        'Software to access and view content on the World Wide Web',
        'Software to access and view locally stored content',
    ],
    reason: [
        {
            buzzword: 'Local Development',
            explanation: 'Render and preview websites and web applications',
        },
        {
            buzzword: 'Compatibility Testing',
            explanation: 'Test and debug websites and web applications',
        }
    ],
    sidenotes: [
        'Most web browsers provide developer tools to debug websites and web applications'
    ],
    references: [],
}