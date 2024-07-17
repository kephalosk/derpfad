import {ReferenceDetails} from "@/globals/Types/ReferenceDetails";

export interface ConceptContent {
    heading: string,
    image: string,
    number: number,
    name: string,
    definition: string,
    buzzwords: string[],
    explanations: string[],
    references: ReferenceDetails[],
}