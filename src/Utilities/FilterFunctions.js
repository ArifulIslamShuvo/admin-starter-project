export function makeIntersectionArray(arrToFilter, arrToFilterField, checkingArr, checkingArrField) {

    const factorArr = checkingArr?.map(item => item[checkingArrField])

    const intersectionArray = arrToFilter?.filter(item => factorArr?.includes(item[arrToFilterField]))

    return intersectionArray

}

export function findSingleItemProperty(arr, filterProperty, itemToFind, returnProperty) {
    const foundItem = arr?.find(item => item[filterProperty].toString() === itemToFind)
    const itemProperty = foundItem[returnProperty]
    return itemProperty;
}