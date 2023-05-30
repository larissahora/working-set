function workingSet(pageReferences, workingSetSize) {
  let workingSet = new Set()
  let pageFaults = 0

  for (let i = 0; i < pageReferences.length; i++) {
    let currentPage = pageReferences[i]

    if (!workingSet.has(currentPage)) {
      pageFaults++

      if (workingSet.size < workingSetSize) {
        workingSet.add(currentPage)
      } else {
        const getWorkingSetValues = workingSet.values()
        const getWorkingSetFirstValue = getWorkingSetValues.next()
        const firstValue = getWorkingSetFirstValue.value

        workingSet.delete(firstValue)
        workingSet.add(currentPage)
      }
    }

    console.log(
      `Referência de página: ${currentPage}\tConjunto de trabalho: ${Array.from(
        workingSet
      ).join(' ')}`
    )
  }

  console.log(`Total de falahas de página: ${pageFaults}`)
}

let pageReferences = [1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5]
let workingSetSize = 3

workingSet(pageReferences, workingSetSize)
