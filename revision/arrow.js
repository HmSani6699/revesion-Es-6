function getNum() {
    const getInput = document.getElementById('getInput');
    const getInputValue = getInput.value;
    const getNumber = parseInt(getInputValue);
    getInput.value = ' ';
    return getNumber;
}


document.getElementById('getFull').addEventListener('click', function () {
    const getArrow = (num) => num / 5;
    document.getElementById('value').innerText = getArrow(getNum());
})