import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 29;
const name: string = 'Master Node';

export const concept29MasterNode: ConceptContent = {
    heading: `${ContentEnum.CONCEPT} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson3/lesson3concept29.jpg'),
    number,
    name,
    notes: [
        'Central control unit of a Kubernetes cluster',
        'Cluster Management: Centralizes control and configuration of the entire cluster',
        'Scheduling: Determines how and where to run workloads based on available resources',
    ],
    references: [],
}