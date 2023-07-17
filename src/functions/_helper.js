import bookData from "../data/data";

export function check(state , action){
  const {name , update} = action.payload;
  const index =  state[update].findIndex(status => status.name == name)
  state[update][index].checked = !state[update][index].checked;
}

export function dataObject(data){
  return bookData[data];
}