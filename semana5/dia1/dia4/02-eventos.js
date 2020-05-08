cuerpo = document.getElementById("Body")

cuerpo.onmousemove = (e) =>{
    let punto = document.createElement("div");
    punto.style.position = "absolute";
    punto.style.height = "10px";
    punto.style.width = "10px";
    punto.style.borderRadius = "5px";
    punto.style.backgroundColor = "green";
    punto.style.left = e.offsetX + "px";
    punto.style.top = e.offsetY + "px";
    cuerpo.appendChild(punto);
}