let a = "606"
count =0; 
for(let i=0; i<a.length; i++){ 
    for(let j=i+1; j<a.length+1; j++){ 
        let temp = a.slice(i,j); 
        let lastDigit = parseInt(temp[temp.length -1]); 
        if(lastDigit % 2 !== 0) continue; 
        if(temp.length === 1 || (temp.length > 1 && temp.charAt(0) !== '0')){
            if(parseInt(temp) % 6 ==0 ){ count++;}
        }
         
    }
}
console.log(count)