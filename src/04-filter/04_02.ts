import {CityType, GovernanceBuildingsType, HousesType} from "../02-objects/02_02";

export function demolishHousesOnTheStreet(city: CityType, street: string) {
    city.houses = city.houses.filter(h => h.address.street.title !== street)
}

export const getHousesOnTheStreet = (houses: Array<HousesType>, street: string) => {
    return houses.filter(h => h.address.street.title === street);
}

export const getBuildingsWithStaffCountGreaterThen = (governmentBuildings: Array<GovernanceBuildingsType>, number: number) => {
    return governmentBuildings.filter(b => b.staffCount > number);
}