export function toggle(parent){
  parent.set(!parent.variable)
}

export function check(index , state){
  state.variable[index].checked = !state.variable[index].checked;
  state.set([...state.variable])
}


export function resetChecked(arr , state){
  arr.forEach((item) => {
    if(item.checked) item.checked = false;
  })


  state.set(arr)
}

export function setModal(modal , modalType , component , title , icon , _){
  toggle(modal);
  modalType.set({component , title , icon , _})
}