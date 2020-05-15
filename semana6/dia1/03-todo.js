let inputTarea = document.getElementById("inputTarea");
let btnAgregar = document.getElementById("btnAgregar");
let listaTareas = document.getElementById("listaTareas");
let tareas = [];
const dibujarTareas=()=>{
    listaTareas.innerText="";
    tareas.forEach(t=>{
        let li = document.createElement("li");
        li.setAttribute("class","main__item");
        let span = document.createElement("span");
        span.setAttribute("class","main__tarea");
        span.innerText = t.tarea;
        let button = document.createElement("button");
        button.setAttribute("class","main__eliminar");
        button.innerText = "Eliminar";
        li.appendChild(span);
        li.appendChild(button);
        listaTareas.appendChild(li);
    })
    inputTarea.focus();
}
btnAgregar.onclick=()=>{
    let objTarea = {
        tarea: inputTarea.value
    }
    tareas.push(objTarea);
    dibujarTareas();
}
inputTarea.onkeyup=(e)=>{
    //forzar el click en el button
    btnAgregar.click();
}