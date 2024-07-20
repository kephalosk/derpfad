import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 13;
const name: string = 'Container Registry';

export const concept13ContainerRegistry: ConceptContent = {
    heading: `${ContentEnum.CONCEPT} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson2/lesson2concept13.jpg'),
    number,
    name,
    definition:  [
        'Repository for storing container images',
    ],
    reason: [
        {
            buzzword: 'Storage',
            explanation: 'Centralizes storage of container images for easy management',
        },
        {
            buzzword: 'Version Control',
            explanation: 'Supports versioning and tagging of images for tracking and rollback',
        },
        {
            buzzword: 'Distribution',
            explanation: 'Provides a reliable mechanism for distributing container images to multiple environments',
        },
        {
            buzzword: 'Integration',
            explanation: 'Works with container orchestration tools (e.g., Kubernetes) for streamlined deployments',
        }
    ],
    sidenotes: [],
    references: [],
}