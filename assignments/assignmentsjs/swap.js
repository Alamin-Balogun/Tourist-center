function moveContent()
{
    var sourceTextBox = document.getElementById('sourceTextBox');
    var destinationTextBox = document.getElementById('destinationTextBox');

    destinationTextBox.value = sourceTextBox.value;
    sourceTextBox.value = '';   
}