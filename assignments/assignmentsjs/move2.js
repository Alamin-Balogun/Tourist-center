function swapText()
{
    var firstTextBox = document.getElementById('firstTextBox');
    var secondTextBox = document.getElementById('secondTextBox');

    var temp = firstTextBox.value;

    firstTextBox.value = secondTextBox.value;
    secondTextBox.value = temp;
}