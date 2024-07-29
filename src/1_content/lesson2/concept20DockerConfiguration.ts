import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 20;
const name: string = 'Docker Configuration';

export const concept20DockerConfiguration: ConceptContent = {
    heading: `${ContentEnum.CONCEPT} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson2/lesson2concept20.jpg'),
    number,
    name,
    notes: [
        'Settings and parameters used to customize Docker\'s behavior and environment',
        'Automation: Automates the creation and management of Docker containers and images through scripts and configuration files',
        'Typically specified in configuration files like Dockerfile',
    ],
    references: [],
}