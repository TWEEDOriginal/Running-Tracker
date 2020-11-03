let entries = [];
const entriesWrapper = document.querySelector('#entries');

function addNewEntry(newEntry) {
    entriesWrapper.removeChild(entriesWrapper.firstElementChild);
    const listItem = document.createElement('li');
    const listValue = document.createTextNode(newEntry);
    listItem.appendChild(listValue);

    entriesWrapper.appendChild(listItem);
}

function  reducer(previous, currentValue) {
    return previous + currentValue

}

function calcTotal(){
    const totalValue = entries.reduce(reducer).toFixed(1);
    document.getElementById('total').innerText = totalValue;
    document.getElementById('progressTotal').innerText = totalValue;
    const completedPercent = totalValue/ (25/100);
    const progressCircle = document.querySelector('#progressCirle');
    if( completedPercent > 100) completedPercent===100;
    progressCircle.style.background = `conic-gradient(#70db70 ${completedPercent}%, #2d3740 ${completedPercent}% 100%)`;

}
function calcAverage() {
    const average = (entries.reduce(reducer) / entries.length).toFixed(1);
    document.getElementById('average').innerText = average;
}

function weeklyHigh(){
    const high = (Math.max(...entries)).toFixed(1);
    document.getElementById("high").innerText= high;
}

function weekCheck(){
    if (entries.length > 7 ){
        entries.shift();
    }
    calcTotal();
    calcAverage();
    weeklyHigh();

}
function handleSubmit(event) {
    event.preventDefault()
    const entry = Number(document.querySelector("#entry").value);
    if(!entry) return;
    document.querySelector("form").reset();
    entries.push(entry);
    addNewEntry(entry);
    weekCheck();
}

const form = document
   .querySelector('form')
   .addEventListener('submit', handleSubmit);