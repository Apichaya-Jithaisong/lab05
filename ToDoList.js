var InputTest = document.querySelector("input[type = 'text']");
var ul = document.querySelector("ul");

InputTest.addEventListener("keypress", function(event)  {
    if(event.which === 13)  {
        var li = document.createElement('li');
        var icon = document.createElement('icon');
        var WhatToDo = this.value;
        this.value=" ";
        icon.classList.add("fas", "fa-trash-alt");
        ul.appendChild(li).append(icon," ",WhatToDo);
        icon.addEventListener('click' ,function()  { icon.parentElement.remove(); }  );
    }
});

ul.addEventListener('click', function(onClick) {
    onClick.target.classList.toggle('completed');
  }, false);

