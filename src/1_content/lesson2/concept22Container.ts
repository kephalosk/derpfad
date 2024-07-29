import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 22;
const name: string = 'Container';

export const concept22Container: ConceptContent = {
    heading: `${ContentEnum.CONCEPT} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson2/lesson2concept22.jpg'),
    number,
    name,
    notes: [
        'A lightweight, portable, and self-sufficient unit that packages an application and its dependencies',
        'Isolation: Runs applications in isolated environments, sharing the host operating system\'s kernel',
        'Management: Ideal for microservices, cloud-native applications, and continuous integration/continuous deployment (CI/CD) pipelines',
    ],
    references: [],
}