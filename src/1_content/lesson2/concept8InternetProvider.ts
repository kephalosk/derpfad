import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 8;
const name: string = 'Internet Provider';

export const concept8InternetProvider: ConceptContent = {
    heading: `${ContentEnum.CONCEPT} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson2/lesson2concept8.jpg'),
    number,
    name,
    notes: [
        'A company providing internet access',
        'Services: Offers various internet services (e.g., broadband, fiber, DSL)',
        'Infrastructure: Owns or leases network infrastructure',
    ],
    references: [],
}