import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 13;
const name: string = 'Container Registry';

export const concept13ContainerRegistry: ConceptContent = {
    heading: `${ContentEnum.CONCEPT} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson2/lesson2concept13.jpg'),
    number,
    name,
    notes: [
        'Repository for storing container images',
        'Storage: Centralizes storage of container images for easy management',
        'Version Control: Supports versioning and tagging of images for tracking and rollback',
        'Distribution: Provides a reliable mechanism for distributing container images to multiple environments',
        'Integration: Works with container orchestration tools (e.g., Kubernetes) for streamlined deployments',
    ],
    references: [],
}