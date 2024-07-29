import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 33;
const name: string = 'Command Line Interface kubectl';

export const concept33CommandLineInterfaceKubectl: ConceptContent = {
    heading: `${ContentEnum.CONCEPT} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson3/lesson3concept33.jpg'),
    number,
    name,
    notes: [
        'Command-line tool for interacting with Kubernetes clusters',
        'Configuration: Allows users to view and edit cluster resources and configurations',
        'Monitoring: Provides commands to check the status of pods, services, and other resources',
    ],
    references: [],
}