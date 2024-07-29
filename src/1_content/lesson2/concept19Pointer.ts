import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 19;
const name: string = 'Pointer';

export const concept19Pointer: ConceptContent = {
    heading: `${ContentEnum.CONCEPT} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson2/lesson2concept19.jpg'),
    number,
    name,
    notes: [
        'Reference to another memory location',
        'Memory Access: Provides a direct way to access and manipulate memory locations',
        'In macOS and Linux a pointer is called Alias for a relativ target',
        'In macOS and Linux a pointer is called symlink for a hard target',
        'In Windows a pointer is called Shortcut',
    ],
    references: [],
}