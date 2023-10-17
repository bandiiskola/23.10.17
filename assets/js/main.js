setInterval(() => {
    let x=parseInt(document.getElementById("higanyszal").value)
    if(x>-45)x--;
    document.getElementById("higanyszal").value = x;    
}, 200);