import {IndefiniteArticle} from "@/globals/language/IndefiniteArticleEnum";
import {Vocals} from "@/globals/language/VocalsEnum";

export function getIndefiniteArticle(conceptName: string): IndefiniteArticle {
    const firstLetter: string = conceptName[0];
    switch (firstLetter.toLowerCase()){
        case Vocals.A: {
            return IndefiniteArticle.AN;
        }
        case Vocals.E: {
            return IndefiniteArticle.AN;
        }
        case Vocals.I: {
            return IndefiniteArticle.AN;
        }
        case Vocals.O: {
            return IndefiniteArticle.AN;
        }
        case Vocals.U: {
            return IndefiniteArticle.AN;
        }
        default: {
            return IndefiniteArticle.A;
        }
    }
}