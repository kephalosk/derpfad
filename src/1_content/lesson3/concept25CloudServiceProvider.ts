import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 25;
const name: string = 'Cloud Service Provider';

export const concept25CloudServiceProvider: ConceptContent = {
    heading: `${ContentEnum.CONCEPT} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson3/lesson3concept25.jpg'),
    number,
    name,
    notes: [
        'Company offering cloud computing services like storage, processing, and networking.',
        'IaaS (Infrastructure as a Service): Provides virtualized computing resources',
        'PaaS (Platform as a Service): Offers hardware and software tools',
        'SaaS (Software as a Service): Delivers software applications',
    ],
    references: [],
}