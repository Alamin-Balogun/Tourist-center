function moveText()
{
    var firstTextBox = document.getElementById('firstTextBox');
    var secondTextBox = document.getElementById('secondTextBox');

    if (firstTextBox.value !=='')
    {
        secondTextBox.value = firstTextBox.value;
        firstTextBox.value = '';
    }

    else if (secondTextBox.value !== '')
    {
        firstTextBox.value = secondTextBox.value;
        secondTextBox.value = '';
    }
}    