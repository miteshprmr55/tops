function lgn() {
    var pnmbr = document.getElementById("mnmbr").value
    var pass = document.getElementById("epwd").value

    if (pnmbr == 'mitesh' && pass == 'mitesh') {
        alert('You are Logged in successfully')
        window.location = 'wellcome.html';
        return false;
    }

    else {

        alert('Your email and Password are Incorrect try again')
        window.location = 'index.html';
        return false;
    }
}

function closeWin() {
    
    if(confirm('Yes Or No')==true)
    {
        window.location='index.html'
    }
    else
    {
        window.location='wellcome.html'
    }
   
}

// ========== loader start ==========

var MyLoader;
function MainFunction()
{
    MyLoader=setTimeout("Test()",800);
}

function Test()

{
    document.getElementById("loadimg").style="display:none !important";
    document.getElementById("load").style="display:block !important";
}

// =========== loader end ========== 
