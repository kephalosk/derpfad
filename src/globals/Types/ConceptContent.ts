import {ReferenceDetails} from "@/globals/Types/ReferenceDetails";
import {ConceptReason} from "@/globals/Types/ConceptReason";

export interface ConceptContent {
    heading: string,
    image: string,
    number: number,
    name: string,
    notes: string[],
    references: ReferenceDetails[],
}