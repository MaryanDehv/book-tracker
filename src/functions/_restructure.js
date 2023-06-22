export function restructure(states){
    const {gridLayout , selection} = states;
    function rearrage({from , to}){
        let arr = []

        for(let i =  0 ; i < gridLayout.variable.length ; i++){
            if(i != from && i != to){
            arr.push(gridLayout.variable[i])
            } else {
            arr.push(false)
            }
        }

        arr[from] = gridLayout.variable[to];
        arr[to] = gridLayout.variable[from];
        
        gridLayout.set([...arr])
        setTimeout(() => {
        selection.set([])
        } , 200) 
    }

    function touch(el , i){
        const target = el.target;
        if(selection.variable.length == 0){
            selection.set([i])
        } else if(selection.variable.length < 2 && selection.variable.length > 0){
            selection.set([...selection.variable , i]);
        }
    }

    return{
        touch,
        rearrage
    }
}