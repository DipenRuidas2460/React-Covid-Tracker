const salary=15
const property=70
const aadharCard=true
if(salary>10){
    if(property>50){
        if(aadharCard===true){
            console.log("Loan approved ")
        } else{
            console.log("You have no aadharcard")
        }
    } else{
        console.log("Your property is low.")
    }
} else{
    console.log("Your salary is low!")
}