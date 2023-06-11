
// data sorting
export function sortData(statusType , source){
  // use location -> app.js
  const data = [];
  statusType.forEach(index => {
    data.push(source.books[index])
  })
  return data;
}