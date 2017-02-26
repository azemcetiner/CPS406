document.getElementById('main').innerHTML="hello world";

function validateForm()
{
    var x = document.forms["myForm"]["fname"].value;
    if (x == "")
    {
        alert("Name must be filled out");
        return false;
    }
}
