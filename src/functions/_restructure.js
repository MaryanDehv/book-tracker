// export function restructure(states){
//     function rearrage({from , to}){
//         let arr = []
    
//         for(let i =  0 ; i < gridLayout.length ; i++){
//           if(i != from && i != to){
//             arr.push(gridLayout[i])
//           } else {
//             arr.push(false)
//           }
//         }
    
//         arr[from] = gridLayout[to];
//         arr[to] = gridLayout[from];
      
//        setGridLayout([...arr])
//        setTimeout(() => {
//         setSelection([])
//        } , 200) 
//       }
    
//       function touch(el , i){
//         if(selection.length == 0){
//           setSelection([i])
//         } else if(selection.length < 2 && selection.length > 0){
//           setSelection([...selection , i]);
//         }
//       }
// }
