import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 29;
const name: string = 'Master Node';

export const concept29MasterNode: ConceptContent = {
    heading: `${ContentEnum.CONCEPT} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson3/lesson3concept29.jpg'),
    number,
    name,
    definition:  [
        'Central control unit of a Kubernetes cluster',
    ],
    reason: [
        {
            buzzword: 'Cluster Management',
            explanation: 'Centralizes control and configuration of the entire cluster',
        },
        {
            buzzword: 'Scheduling',
            explanation: 'Determines how and where to run workloads based on available resources',
        }
    ],
    sidenotes: [],
    references: [],
}