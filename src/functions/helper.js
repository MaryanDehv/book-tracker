export function sortData(statusType , source){
    const data = [];
    statusType.forEach(index => {
      data.push(source.books[index])
    })
    return data;
  }
