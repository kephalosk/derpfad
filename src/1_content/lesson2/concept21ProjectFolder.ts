import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 21;
const name: string = 'Project Folder';

export const concept21ProjectFolder: ConceptContent = {
    heading: `${ContentEnum.CONCEPT} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson2/lesson2concept21.jpg'),
    number,
    name,
    notes: [
        'Directory used to organize files and resources for a specific project',
        'Organization: Keeps all project-related files and resources in a structured and accessible manner',
        'Deployment: Simplifies deployment by consolidating project files into a single directory structure',
    ],
    references: [],
}