let id = 0;

document.getElementById('add-name-button').addEventListener('click', () => { //this gives funtion for input interaction
    let table = document.getElementById('name')
    let row = table.insertRow(1); //this will display user input
    row.setAttribute('id', `item-${id}`); 
    row.insertCell(0).innerHTML = document.getElementById('picture-select').value; //displays user form selection in the row column
    row.insertCell(1).innerHTML = document.getElementById('add-name').value; //display user input in the row column
    let actions = row.insertCell(2); //display delete button function within the row column
    actions.appendChild(createDeleteButton(id++)); //allows user input for the delete button 
    document.getElementById('add-name').value = '';
});

function createDeleteButton(id) { //gives function to delete from user input
    let btn = document.createElement('button');
    btn.className = 'btn btn-outline-danger';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => { //will delete when clicked 
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}