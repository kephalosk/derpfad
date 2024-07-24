import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 33;
const name: string = 'Command Line Interface kubectl';

export const concept33CommandLineInterfaceKubectl: ConceptContent = {
    heading: `${ContentEnum.CONCEPT} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson3/lesson3concept33.jpg'),
    number,
    name,
    definition:  [
        'Command-line tool for interacting with Kubernetes clusters',
    ],
    reason: [
        {
            buzzword: 'Configuration',
            explanation: 'Allows users to view and edit cluster resources and configurations',
        },
        {
            buzzword: 'Monitoring',
            explanation: 'Provides commands to check the status of pods, services, and other resources',
        }
    ],
    sidenotes: [],
    references: [],
}