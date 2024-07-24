import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 31;
const name: string = 'Loadbalancer';

export const concept31Loadbalancer: ConceptContent = {
    heading: `${ContentEnum.CONCEPT} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson3/lesson3concept31.jpg'),
    number,
    name,
    definition:  [
        'Distributes incoming network traffic across multiple pods or services',
    ],
    reason: [
        {
            buzzword: 'High Availability',
            explanation: 'Ensures uninterrupted service by routing traffic only to healthy pods',
        },
        {
            buzzword: 'Scalability',
            explanation: 'Supports automatic scaling by distributing traffic as the number of pods increases or decreases',
        }
    ],
    sidenotes: [],
    references: [],
}