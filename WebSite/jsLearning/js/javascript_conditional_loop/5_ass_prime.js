for(let i=1; i<=50; i++){
    if(i===1){
        continue
    }
    else{
        let notPrime=false
        for(let j=2; j<=i; j++){
           if(i%j===0 && j!=i){
               notPrime=true
           }
        }
        if(notPrime===false){
            console.log(i)
        }
    }

}