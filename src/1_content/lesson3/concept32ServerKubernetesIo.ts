import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 32;
const name: string = 'Server kubernetes.io';

export const concept32ServerKubernetes: ConceptContent = {
    heading: `${ContentEnum.CONCEPT} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson3/lesson3concept32.jpg'),
    number,
    name,
    definition:  [
        'The official website for Kubernetes, providing documentation, resources, and community information.',
    ],
    reason: [
        {
            buzzword: 'Documentation',
            explanation: 'Comprehensive guides, tutorials, and references for using and managing Kubernetes',
        },
        {
            buzzword: 'Downloads',
            explanation: 'Links to download Kubernetes software and tools',
        }
    ],
    sidenotes: [],
    references: [],
}