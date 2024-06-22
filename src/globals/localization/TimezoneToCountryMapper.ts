import {TimezoneToCountryMap} from "@/globals/localization/TimezoneToCountryMap";

export function getCountryFromTimezone(timezone: string): string | null {
    return TimezoneToCountryMap[timezone];
}