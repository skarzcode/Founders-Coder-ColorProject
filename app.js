const url = "https://www.thecolorapi.com/id?hex=0047AB&rgb=0,71,171&hsl=215,100%,34%&cmyk=100,58,0,33&format=html"
const container = document.querySelectorAll(".color");
let res;

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
            for(let i = 0; i < container.length; i++){
                if(container[i].getAttribute('id') !== null){
                    container[i].style.backgroundColor = container[i].id;
                } else{
                container[i].style.backgroundColor = res.colors[pickRandomNumber()].hex;
                }
            }
            document.body.onkeyup = function(e) {
                if (e.key == " " ||
                    e.code == "Space" ||      
                    e.keyCode == 32      
                ) {
                    for(let i = 0; i < container.length; i++){
                        if(container[i].getAttribute('id') !== null){
                            container[i].style.backgroundColor = container[i].id;
                        } else{
                        container[i].style.backgroundColor = res.colors[pickRandomNumber()].hex;
                        }
                    }
                }
              }

            // container[0].style.backgroundColor = res.colors[pickRandomNumber()].hex;

        })
        .catch((error) => {
            console.error(error);
        })
};



reqData();






