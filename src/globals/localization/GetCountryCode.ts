import {getCountryFromTimezone} from "@/globals/localization/TimezoneToCountryMapper";
import {getCountryFromLanguage} from "@/globals/localization/LanguageToCountryMapper";
import {CountryCodesEnum} from "@/globals/localization/CountryCodesEnum";

export function getCountryCode(): string {
    const timezone: string = Intl.DateTimeFormat().resolvedOptions().timeZone;
    let country = getCountryFromTimezone(timezone);

    if(!country){
        const language = navigator.language;
        country = getCountryFromLanguage(language) || CountryCodesEnum.USA;
    }

    return country;
}