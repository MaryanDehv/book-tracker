import bookData from "../data/data";

export function toggle(parent){
  parent.set(!parent.variable)
}

export function check(name , currentStates , _){
  const index =  currentStates.variable.findIndex(state => state.name == name)
  currentStates.variable[index].checked = !currentStates.variable[index].checked;
  currentStates.set([...currentStates.variable])
  // if(_){
  //   if(["genre", "status", "author"].find(category => state.variable[index].name == category) && state.variable[index].checked) resetChecked(_[state.variable[index].name].variable , _[state.variable[index].name])
  // }
}

export function resetChecked(arr , state){
  arr.forEach((item) => {
    if(item.checked) item.checked = false;
  })
  state.set(arr)
}

export function getCategories(exclude){

}

export function setModal(modalType , component , title , icon , _){
  modalType.set({component , title , icon , _})
}

export function closeModal(modalType){
  modalType.set(false)
}

export function dataObject(data){
  return bookData[data];
}