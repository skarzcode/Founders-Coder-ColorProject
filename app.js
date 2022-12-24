const url = "https://www.thecolorapi.com/id?hex=0047AB&rgb=0,71,171&hsl=215,100%,34%&cmyk=100,58,0,33&format=html"
const container = document.querySelectorAll(".color");
const colorHex = document.querySelectorAll(".colorHex");
const colorName = document.querySelectorAll(".colorName");
const copyIcon = document.querySelectorAll(".copy");
const lockIcon = document.querySelectorAll(".lockIcon");
const colorSelector = document.querySelectorAll(".colorSelector");
const downloadBtn = document.querySelector(".download");
const mobilebtn = document.querySelector(".mobile");

let res;
let colorArray = [
    {
    hex:undefined,
    name:undefined
    },
    {
    hex:undefined,
    name:undefined
     },
     {
    hex:undefined,
    name:undefined
    },
    {
    hex:undefined,
    name:undefined
    },
    {
    hex:undefined,
    name:undefined
    },
   
]

function pickRandomNumber() {
    // Generate a random number between 0 and the length of the array
    const randomIndex = Math.floor(Math.random() * 29978);
    // Return the element at the randomly chosen index
    return randomIndex;
  }

  



function reqData() {
    fetch('https://api.color.pizza/v1/?values=')
        .then(res => res.json())
        .then(data => {
            res = data;
            console.log(res.colors[1])


let currentColor = JSON.parse( localStorage.getItem('Color') );
if (currentColor) {
    for(let i = 0; i < currentColor.length; i++){
        container[i].style.backgroundColor = currentColor[i].hex;
        colorHex[i].innerHTML = currentColor[i].hex;
        colorName[i].innerHTML = currentColor[i].name;
        colorSelector[i].value = currentColor[i].hex;
        // colorArray[i].hex = currentColor[i].hex;
        // colorArray[i].name = currentColor[i].name;
        console.log(colorArray[i]);
    }
    } else {
        for(let i = 0; i < container.length; i++){
            if(container[i].getAttribute('id') !== null){
                // container[i].style.backgroundColor = container[i].id;
                // colorHex[i].innerHTML = container[i].id;
            } else{
                let currIndex = pickRandomNumber();
            container[i].style.backgroundColor = res.colors[currIndex].hex;
            colorHex[i].innerHTML = res.colors[currIndex].hex;
            colorName[i].innerHTML = res.colors[currIndex].name;
            colorSelector[i].value = res.colors[currIndex].hex
            colorArray[i].hex = res.colors[currIndex].hex;
            colorArray[i].name = res.colors[currIndex].name
            console.log(colorArray[i])
            }
            let arrayString = JSON.stringify(colorArray);
            localStorage.setItem('Color', arrayString);
        }
    };
                colorSelector.forEach(current => {
                    current.addEventListener("input", function(){
                        container[current.id].style.backgroundColor = current.value;
                        colorHex[current.id].innerHTML = current.value
                        colorName[current.id].innerHTML = "";
                        for(let i = 0; i < container.length; i++){
                            colorArray[i].hex = colorHex[i].innerHTML;
                            colorArray[i].name = colorName[i].innerHTML;
                        }
                        let arrayString = JSON.stringify(colorArray);
                        localStorage.setItem('Color', arrayString); 
                    });
                })

                mobilebtn.addEventListener("click", function(){
                    for(let i = 0; i < container.length; i++){
                        if(container[i].getAttribute('id') !== null){
                            // container[i].style.backgroundColor = container[i].id;
                            colorArray[i].hex = colorHex[i].innerHTML;
                        colorArray[i].name = colorName[i].innerHTML;
                        console.log(colorArray[i])
                        } else{
                            let currIndex = pickRandomNumber();
                        container[i].style.backgroundColor = res.colors[currIndex].hex;
                        colorHex[i].innerHTML = res.colors[currIndex].hex;
                        colorName[i].innerHTML = res.colors[currIndex].name;
                        colorSelector[i].value = res.colors[currIndex].hex;
                        colorArray[i].hex = colorHex[i].innerHTML;
                        colorArray[i].name = colorName[i].innerHTML;
                        console.log(colorArray[i])
                        }
                    }

                    let arrayString = JSON.stringify(colorArray);
                localStorage.setItem('Color', arrayString); 
                })

            document.body.onkeyup = function(e) {
                if (e.key == " " ||
                    e.code == "Space" ||      
                    e.keyCode == 32      
                ) {
                    for(let i = 0; i < container.length; i++){
                        if(container[i].getAttribute('id') !== null){
                            // container[i].style.backgroundColor = container[i].id;
                            colorArray[i].hex = colorHex[i].innerHTML;
                        colorArray[i].name = colorName[i].innerHTML;
                        console.log(colorArray[i])
                        } else{
                            let currIndex = pickRandomNumber();
                        container[i].style.backgroundColor = res.colors[currIndex].hex;
                        colorHex[i].innerHTML = res.colors[currIndex].hex;
                        colorName[i].innerHTML = res.colors[currIndex].name;
                        colorSelector[i].value = res.colors[currIndex].hex;
                        colorArray[i].hex = colorHex[i].innerHTML;
                        colorArray[i].name = colorName[i].innerHTML;
                        console.log(colorArray[i])
                        }
                    }
                }
                
                let arrayString = JSON.stringify(colorArray);
                localStorage.setItem('Color', arrayString); 
              
              }

              function downloadArray(array, filename) {
                var data = JSON.stringify(array);
                var a = document.createElement("a");
                a.href = "data:text/json;charset=utf-8," + encodeURIComponent(data);
                a.download = filename;
                a.click();
              }

              downloadBtn.addEventListener("click", function(){
                let currentColor = JSON.parse( localStorage.getItem('Color') );
                downloadArray(currentColor, "myArray.json");
                console.log("working");
              })
          

              copyIcon.forEach(current => {
                current.addEventListener("click", function(){
                    copyHex(current);
                })
              })
              
              lockIcon.forEach(current => {
                current.addEventListener("click", function(){
                    current.classList.toggle("locked");
                    if(current.classList.contains('locked')){
                        current.src = "assets/lock.png"; 
                        container[current.id].id = true;

                    } else{
                        current.src = "assets/padlock-unlock.png"; 
                        container[current.id].removeAttribute('id');
                    }
                    
                })
              })


            // container[0].style.backgroundColor = res.colors[pickRandomNumber()].hex;

        })
        .catch((error) => {
            console.error(error);
        })
};

function copyHex(current){
if(current.id == 0){
    navigator.clipboard.writeText(colorHex[0].innerHTML);
    alert("Copied the text: " + colorHex[0].innerHTML);
} else if(current.id == 1){
    navigator.clipboard.writeText(colorHex[1].innerHTML);
    alert("Copied the text: " + colorHex[1].innerHTML);
} else if(current.id == 2){
    navigator.clipboard.writeText(colorHex[2].innerHTML);
    alert("Copied the text: " + colorHex[2].innerHTML);
}else if(current.id == 3){
    navigator.clipboard.writeText(colorHex[3].innerHTML);
    alert("Copied the text: " + colorHex[3].innerHTML);
}else if(current.id == 4){
    navigator.clipboard.writeText(colorHex[4].innerHTML);
    alert("Copied the text: " + colorHex[4].innerHTML);
}
}





reqData();






