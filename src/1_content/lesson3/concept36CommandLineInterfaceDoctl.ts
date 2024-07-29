import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 36;
const name: string = 'Command Line Interface doctl';

export const concept36CommandLineInterfaceDoctl: ConceptContent = {
    heading: `${ContentEnum.CONCEPT} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson3/lesson3concept36.jpg'),
    number,
    name,
    notes: [
        'Command-line tool for interacting with DigitalOcean\'s API',
        'Configuration: Allows users to configure and access their DigitalOcean account and projects',
        'Management: Used to manage DigitalOcean resources like Droplets, databases, and Kubernetes clusters',
    ],
    references: [],
}