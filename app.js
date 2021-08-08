let list = document.querySelector('#task-list');
let btn = document.querySelector('#btn');
let input = document.querySelector('#task-input');


btn.addEventListener("keyup", (e) => {
  if (e.keycode === 13) {
    btn.click();
  }
})

//Agrega tareas a la lista

btn.addEventListener("click", () => {
  if (input.value !== "") {
    const task = input.value;
  list.innerHTML += `<li><button id="remove-btn"><i class="fas fa-trash"></i></button>${task}<input type="checkbox" class="input-checkbox"></li>`
  }

 // Eliminar tareas de la lista 

  let removeBtn = document.querySelectorAll('#remove-btn');
  removeBtn.forEach(boton => {
    boton.addEventListener("click", () => {boton.parentNode.remove()})
  });
})




