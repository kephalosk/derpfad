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
        '',
    ],
    reason: [
        {
            buzzword: '',
            explanation: '',
        },
        {
            buzzword: '',
            explanation: '',
        }
    ],
    sidenotes: [],
    references: [],
}