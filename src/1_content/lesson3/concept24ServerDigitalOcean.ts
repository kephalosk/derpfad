import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 24;
const name: string = 'Server digitalocean.com';

export const concept24ServerDigitalOcean: ConceptContent = {
    heading: `${ContentEnum.CONCEPT} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson3/lesson3concept24.jpg'),
    number,
    name,
    definition:  [
        'A cloud infrastructure provider',
    ],
    reason: [
        {
            buzzword: 'Service',
            explanation: 'Offering scalable compute platform with easy-to-use management tools',
        },
    ],
    sidenotes: [],
    references: [],
}