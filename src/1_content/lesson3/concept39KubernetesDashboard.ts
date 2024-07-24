import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 39;
const name: string = 'Kubernetes Dashboard';

export const concept39KubernetesDashboard: ConceptContent = {
    heading: `${ContentEnum.CONCEPT} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson3/lesson3concept39.jpg'),
    number,
    name,
    definition:  [
        'A web-based user interface for managing Kubernetes clusters',
    ],
    reason: [
        {
            buzzword: 'Monitoring',
            explanation: 'Displays real-time metrics and status of cluster components',
        },
        {
            buzzword: 'Visualization',
            explanation: 'Provides a graphical view of cluster resources like pods, services, and deployments',
        }
    ],
    sidenotes: [],
    references: [],
}