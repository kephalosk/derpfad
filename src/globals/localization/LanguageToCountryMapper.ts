import {LanguageToCountryMap} from "@/globals/localization/LanguageToCountryMap";
import {CountryCodesEnum} from "@/globals/localization/CountryCodesEnum";

export function getCountryFromLanguage(language: string): string {
    return LanguageToCountryMap[language.toLowerCase()] || CountryCodesEnum.USA;
}