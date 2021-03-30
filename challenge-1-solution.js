'use strict'





function (array){
    rot=[];
    for(let i=0 ; len = array.length ;  i++ ){
        root=Math.sqrt(array[i]);
      rot.push(root);
    }
    return rot;
}