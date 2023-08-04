var addBtn = document.querySelector('#add-item');
addBtn.addEventListener('click', handleAddItemClick);
let x = 2;
const getBody = document.querySelector('tbody');


function handleAddItemClick(e){
    e.preventDefault();
const createTr = document.createElement('tr');

const createTh = document.createElement('th');
createTh.setAttribute('scope','row');


createTh.innerHTML = x;

const createTd1 = document.createElement('td');
const createTd2 = document.createElement('td');
const createTd3 = document.createElement('td');
const createSel = document.createElement('select');
createSel.setAttribute("id", "my-select");
createSel.setAttribute("class", "form-control");
const createOp = document.createElement('option');
createOp.text = "Thukpa";
const createOp1 = document.createElement('option');
createOp1.text = "Alu Chap";
const createOp2 = document.createElement('option');
createOp2.text = "Pyaji";
const createOp3 = document.createElement('option');
createOp3.text = "Chips";
const createOp4 = document.createElement('option');
createOp4.text = "Mama";
createSel.add(createOp)
createSel.add(createOp1)
createSel.add(createOp2)
createSel.add(createOp3)
createSel.add(createOp4)
createTd1.appendChild(createSel)

const createNum = document.createElement('input');
createNum.setAttribute('type', 'number');
createNum.setAttribute('min', '1');

createTd2.appendChild(createNum)

const createBtn = document.createElement('button');
createBtn.setAttribute('class','btn');
createBtn.setAttribute('class','btn-danger btn');
createBtn.setAttribute('id','remove-item');
createBtn.innerHTML = "Remove"
console.log(createBtn);
createTd3.appendChild(createBtn);
createTr.appendChild(createTh);
createTr.appendChild(createTd1);
createTr.appendChild(createTd2);
createTr.appendChild(createTd3);

    console.log(createTr);
    ++x;
    console.log(x);
    getBody.appendChild(createTr);
}

const getTable = document.querySelector('table');
getTable.addEventListener('click',listenClick);

function listenClick(e) {
  if(e.target.classList.contains('btn-danger')){
    console.log(e.target.parentElement.parentElement);
   getBody.removeChild(e.target.parentElement.parentElement);
   x--;
  }

}