const display = document.getElementById("display");
let button = document.getElementById("result")

button.onclick = LuckyNumber

function LuckyNumber(){
    

        Lucky = Math.floor((Math.random() * 10));
        let number = document.getElementById("inp").value
            if (number == Lucky){
                console.log("Bạn đã dự đoán đúng")
                console.log(Lucky)
                display.innerHTML = "Bạn đã dự đoán Đúng, số may mắn là : "+ Lucky 
            }else{
                console.log("Chúc bạn may mắn lần sau")
                console.log(Lucky)
                display.innerHTML = "Bạn đã dự đoán Sai, số may mắn là : "+ Lucky
                
            }
        
        return Lucky;
    }
    


