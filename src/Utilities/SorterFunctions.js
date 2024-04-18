function sortArrByAttrAlphabetically(arr, attri) {
    const sortedArray = arr.sort((a,b) => {
      let nameA = a[attri].toLowerCase();
      let nameB = b[attri].toLowerCase();
      if (nameA < nameB)
       return -1;
      if (nameA > nameB)
       return 1;
      return 0;
    })
    return sortedArray;
}

function sortArrByAttrNumericAsc(arr, attri) {
  const sortedArray = arr.sort((a,b) => {
    let nameA = a[attri]
    let nameB = b[attri]
    return nameA - nameB;
  })
  return sortedArray;
}

function sortArrByAttrNumericDesc(arr, attri) {
  const sortedArray = arr.sort((a,b) => {
    let nameA = a[attri]
    let nameB = b[attri]
    return nameB - nameA;
  })
  return sortedArray;
}

function sortArrByDateNewestFirst(arr, attri) {
  const sortedArray = arr.sort((a,b) => {
    return new Date(b[attri]) - new Date(a[attri])
  })
  return sortedArray
}

function sortArrByDateOldestFirst(arr, attri) {
  const sortedArray = arr.sort((a,b) => {
    return new Date(a[attri]) - new Date(b[attri])
  })
  return sortedArray
}

export {
    sortArrByAttrAlphabetically,
    sortArrByAttrNumericAsc,
    sortArrByAttrNumericDesc,
    sortArrByDateNewestFirst,
    sortArrByDateOldestFirst
}