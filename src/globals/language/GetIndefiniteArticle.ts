import {IndefiniteArticleEnum} from "@/globals/language/IndefiniteArticleEnum";
import {VocalsEnum} from "@/globals/language/VocalsEnum";

export function getIndefiniteArticle(conceptName: string): IndefiniteArticleEnum {
    const firstLetter: string = conceptName[0];
    switch (firstLetter.toLowerCase()){
        case VocalsEnum.A: {
            return IndefiniteArticleEnum.AN;
        }
        case VocalsEnum.E: {
            return IndefiniteArticleEnum.AN;
        }
        case VocalsEnum.I: {
            return IndefiniteArticleEnum.AN;
        }
        case VocalsEnum.O: {
            return IndefiniteArticleEnum.AN;
        }
        case VocalsEnum.U: {
            return IndefiniteArticleEnum.AN;
        }
        default: {
            return IndefiniteArticleEnum.A;
        }
    }
}