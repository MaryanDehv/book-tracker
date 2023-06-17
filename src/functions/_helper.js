
// data sorting
export function sortData(statusType , source){
  // use location -> app.js
  const data = [];
  statusType.forEach(index => {
    data.push(source.books[index])
  })
  return data;
}

export function toggle(parent){
  parent.set(!parent.variable)
}


export function check(index , state){
  state.variable[index].checked = !state.variable[index].checked;
  state.set([...state.variable])
}