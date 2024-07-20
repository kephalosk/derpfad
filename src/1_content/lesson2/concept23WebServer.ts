import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 23;
const name: string = 'Web Server';

export const concept23WebServer: ConceptContent = {
    heading: `${ContentEnum.CONCEPT} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson2/lesson2concept23.jpg'),
    number,
    name,
    definition:  [
        'Software that delivers web content to users',
    ],
    reason: [
        {
            buzzword: 'Content Delivery',
            explanation: 'Serves websites and applications',
        },
        {
            buzzword: 'Accessibility',
            explanation: 'Makes websites and web applications accessible from anywhere via a web browser',
        }
    ],
    sidenotes: [],
    references: [],
}