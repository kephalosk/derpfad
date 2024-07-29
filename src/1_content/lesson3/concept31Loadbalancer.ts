import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 31;
const name: string = 'Loadbalancer';

export const concept31Loadbalancer: ConceptContent = {
    heading: `${ContentEnum.CONCEPT} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson3/lesson3concept31.jpg'),
    number,
    name,
    notes: [
        'Distributes incoming network traffic across multiple pods or services',
        'High Availability: Ensures uninterrupted service by routing traffic only to healthy pods',
        'Scalability: Supports automatic scaling by distributing traffic as the number of pods increases or decreases',
    ],
    references: [],
}