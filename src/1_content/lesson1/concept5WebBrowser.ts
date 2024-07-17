import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 5;
const name: string = 'Web Browser';

export const concept5WebBrowser: ConceptContent = {
    heading: `${ContentEnum.CHAPTER} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson1/lesson1concept5.jpg'),
    number,
    name,
    definition: 'A Web Browser is software used to access and view content on the World Wide Web.',
    buzzwords: [
        'Foundation of Web Pages',
        'Standardized and Universally Supported',
        'Easy to Learn and Use'
    ],
    explanations: [
        'Web browsers support local development by rendering and previewing web pages and applications stored on a developer\'s computer.',
        'They provide features such as tabbed browsing, bookmarking, and extensions, enhancing user experience and enabling interaction with web content.',
        'Developers use web browsers to test and debug websites and web applications, ensuring compatibility and functionality across different platforms and devices.'
    ],
    references: [],
}