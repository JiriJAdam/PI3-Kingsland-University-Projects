//List of items
function addItem() {
    let textInput = document.getElementById('newItemText').value; //text from input box
    let newListItem = document.createElement("li"); //new <li> tag
    let newTextNode = document.createTextNode(textInput); //create new text node containing text from input box
    newListItem.appendChild(newTextNode); //append newTextNode to new <li> tag
    document.getElementById("items").appendChild(newListItem); //append newListItem tag to items list
    document.getElementById('newItemText').value = ''; //clear the input box
}

