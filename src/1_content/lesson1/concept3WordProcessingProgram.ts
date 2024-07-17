import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 3;
const name: string = 'Word Processing Program';

export const concept3WordProcessingProgram: ConceptContent = {
    heading: `${ContentEnum.CHAPTER} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson1/lesson1concept3.jpg'),
    number,
    name,
    definition: [
        'Allows users to create, edit, format, and print text documents.',
    ],
    reason: [
        {
            buzzword: 'Code Structuring',
            explanation: 'Organizing code snippets and files',
        }
    ],
    sidenotes: [],
    references: [],
}