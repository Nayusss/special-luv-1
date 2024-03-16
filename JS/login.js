function logining()
{
    let user=document.getElementById("username").value;
    let pass=document.getElementById("password").value;
    
    if(user=="Stefano" && pass=="091223")
    {
        window.location="index.html";
    }

    else
    {
        alert("Datos incorrectos");
    }
}