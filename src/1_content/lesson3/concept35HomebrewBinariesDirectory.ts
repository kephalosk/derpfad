import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 35;
const name: string = 'Homebrew Binaries Directory';

export const concept35HomebrewBinariesDirectory: ConceptContent = {
    heading: `${ContentEnum.CONCEPT} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson3/lesson3concept35.jpg'),
    number,
    name,
    notes: [
        'A package manager for macOS and Linux that simplifies software installation.',
        'Centralized Location: Provides a single place where Homebrew installs executable files',
        'Management: Homebrew automatically manages and updates binaries in this directory, ensuring proper installation',
    ],
    references: [],
}