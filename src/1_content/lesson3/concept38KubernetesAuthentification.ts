import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 38;
const name: string = 'Kubernetes Authentification';

export const concept38KubernetesAuthentification: ConceptContent = {
    heading: `${ContentEnum.CONCEPT} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson3/lesson3concept38.jpg'),
    number,
    name,
    notes: [
        'Used for secure communication between clients and the Kubernetes API server.',
    ],
    references: [],
}