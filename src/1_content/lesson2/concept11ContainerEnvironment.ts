import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 11;
const name: string = 'Container Environment';

export const concept11ContainerEnvironment: ConceptContent = {
    heading: `${ContentEnum.CONCEPT} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson2/lesson2concept11.jpg'),
    number,
    name,
    definition:  [
        'Virtualized environment for running applications',
    ],
    reason: [
        {
            buzzword: 'Isolation',
            explanation: 'Isolates applications and their dependencies from the host system',
        },
        {
            buzzword: 'Portability',
            explanation: 'Allows consistent deployment across different environments (e.g., development, testing, production)',
        },
        {
            buzzword: 'Efficiency',
            explanation: 'Uses system resources more efficiently compared to traditional virtualization',
        }
    ],
    sidenotes: [],
    references: [],
}