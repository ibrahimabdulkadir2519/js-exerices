const pharagh = document.querySelector('.pharagh');

function AddItem() {
 const NewItem = document.createElement('h1')
 NewItem.textContent = "Hello World";

 pharagh.append(NewItem)
                                                                  
}

function RomoveChild(){
   
 if(pharagh.lastChild){
   pharagh.removeChild(pharagh.lastChild)
 }
}