let ul = document.getElementById('list'),
    removeAll = document.getElementById('removeAll')
    add = document.getElementById('add')

add.onclick = function() {
    addLi(ul)
}

function addLi(targetUi){
    //logic to create list element and remove button in list
    let inputText = document.getElementById('text').value,
        li = document.createElement('li'),
        textNode = document.createTextNode(inputText + " "),
        removeButton = document.createElement('button');
    // clears box upon running function(hitting add button)
    document.getElementById('text').value = "";
    //ensures users put something in box
    if(inputText.length === 0){
        alert ('there is no text in the input')
        return false
    }

    removeButton.className = 'removeMe'
    removeButton.innerHTML = ' DONE!'
    removeButton.setAttribute("onclick", "removeMe(this)")

    li.appendChild(textNode)
    li.appendChild(removeButton)

    targetUi.appendChild(li)
}

function removeMe(item){
    let parent = item.parentElement
    parent.parentElement.removeChild(parent)
}

removeAll.onclick = function() {
    ul.innerHTML = "";
}