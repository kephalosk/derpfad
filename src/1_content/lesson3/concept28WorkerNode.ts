import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 28;
const name: string = 'Worker Node';

export const concept28WorkerNode: ConceptContent = {
    heading: `${ContentEnum.CONCEPT} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson3/lesson3concept28.jpg'),
    number,
    name,
    notes: [
        'A machine (physical or virtual) in a Kubernetes cluster that runs containerized applications.',
        'Isolation: Ensures workloads are isolated from each other',
    ],
    references: [],
}