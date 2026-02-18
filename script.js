const btn = document.getElementById('btn-calc');
const description = document.getElementById("description")
btn.addEventListener('click', function() {
    
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value/100

    if (weight > 0 && height > 0) {
    
        const bmi = weight / (height * height);
        
        document.getElementById('bmi-value').innerText = bmi.toFixed(2);
        
        if(bmi <= 18.5){
           description.innerText = "Status: Underweight"
        }
           else if(bmi > 18.5 && bmi < 24.99 ){
            description.innerText = "Status:Normal"
           }
           else if(bmi> 24.99 && bmi < 30){
            description.innerText = "Status: Overweight"
           }
           else {
            description.innerText = "Status: Obese"
           }
        
    } 
 
    else {
        alert ("Please fill in all fields!")
    }
})
