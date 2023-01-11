export function paginate(items, pageNumber, sizeOnPage) {
  return [...items].splice((pageNumber - 1) * sizeOnPage, sizeOnPage) // 0 1 2 3 4
}
