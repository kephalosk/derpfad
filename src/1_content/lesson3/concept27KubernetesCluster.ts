import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 27;
const name: string = 'Kubernetes Cluster';

export const concept27KubernetesCluster: ConceptContent = {
    heading: `${ContentEnum.CONCEPT} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson3/lesson3concept27.jpg'),
    number,
    name,
    notes: [
        'A set of nodes that run containerized applications managed by Kubernetes.',
        'Scalability: Automatically scales applications up or down based on demand',
        'High Availability: Ensures application uptime with self-healing and load balancing',
        'Resource Efficiency: Optimizes resource use across nodes',
    ],
    references: [],
}