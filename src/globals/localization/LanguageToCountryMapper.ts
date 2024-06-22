import {LanguageToCountryMap} from "@/globals/localization/LanguageToCountryMap";

export function getCountryFromLanguage(language: string): string | null {
    return LanguageToCountryMap[language];
}