import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 25;
const name: string = 'Cloud Service Provider';

export const concept25CloudServiceProvider: ConceptContent = {
    heading: `${ContentEnum.CONCEPT} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson3/lesson3concept25.jpg'),
    number,
    name,
    definition:  [
        'Company offering cloud computing services like storage, processing, and networking.',
    ],
    reason: [
        {
            buzzword: 'IaaS (Infrastructure as a Service)',
            explanation: 'Provides virtualized computing resources',
        },
        {
            buzzword: 'PaaS (Platform as a Service)',
            explanation: 'Offers hardware and software tools',
        },
        {
            buzzword: 'SaaS (Software as a Service)',
            explanation: 'Delivers software applications',
        }
    ],
    sidenotes: [],
    references: [],
}