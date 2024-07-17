import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 3;
const name: string = 'Word Processing Program';

export const concept3WordProcessingProgram: ConceptContent = {
    heading: `${ContentEnum.CHAPTER} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson1/lesson1concept3.jpg'),
    number,
    name,
    definition: 'A Word Processing Program is software that allows users to create, edit, format, and print text documents.',
    buzzwords: [
        'Code Structuring',
        'Documentation',
        'Content Planning'
    ],
    explanations: [
        'Word processing programs aid developers in organizing code snippets and files.',
        'They assist in creating and maintaining project documentation.',
        'These programs help in outlining website content, facilitating the planning and organization of information before implementation.'
    ],
    references: [],
}