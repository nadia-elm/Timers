

function countDoun(num){
    const id = setInterval(function(){
        num--
        console.log(num)
        if(num == 0){
            clearInterval(id)
            console.log('DONE')
        }

    }, 1000);
    
}

// countDoun(30)

   






 function randomGame(){
  let count = 0;
  let x ;
  let timer = setInterval(function(){
    x = Math.random();
    console.log(x)
    count++
    if(x > .75){
        clearInterval(timer)
      console.log(`it took ${count} tries to  find a number greater than .75`);
    }

  }, 1000)
   
}



 

