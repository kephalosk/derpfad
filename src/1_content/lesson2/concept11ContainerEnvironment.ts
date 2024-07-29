import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 11;
const name: string = 'Container Environment';

export const concept11ContainerEnvironment: ConceptContent = {
    heading: `${ContentEnum.CONCEPT} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson2/lesson2concept11.jpg'),
    number,
    name,
    notes: [
        'Virtualized environment for running applications',
        'Isolation: Isolates applications and their dependencies from the host system',
        'Portability: Allows consistent deployment across different environments (e.g., development, testing, production)',
        'Efficiency: Uses system resources more efficiently compared to traditional virtualization',
    ],
    references: [],
}