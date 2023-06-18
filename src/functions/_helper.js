export function toggle(parent){
  parent.set(!parent.variable)
}

export function check(index , state){
  state.variable[index].checked = !state.variable[index].checked;
  state.set([...state.variable])
}