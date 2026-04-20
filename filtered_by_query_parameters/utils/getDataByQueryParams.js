export function getDataByQueryParams(data, queryObj) {
  let filteredData = data

  if (queryObj.country) {
    filteredData = filteredData.filter(item =>
      item.country.toLowerCase() === queryObj.country.toLowerCase()
    )
  }

  if (queryObj.continent) {
    filteredData = filteredData.filter(item =>
      item.continent.toLowerCase() === queryObj.continent.toLowerCase()
    )
  }

  if (queryObj.is_open_to_public) {
    filteredData = filteredData.filter(item =>
      item.is_open_to_public.toString() === queryObj.is_open_to_public
    )
  }

  return filteredData
}