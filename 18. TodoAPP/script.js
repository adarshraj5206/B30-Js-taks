function addTodo() {
  const input = document.querySelector("#inputTask");
  const text = input.value;

  if (text) {
      const unorderedList = document.querySelector('#todoList');
      const listItem = document.createElement('li');

    
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.onclick = function() {
          span.classList.toggle('completed');
      };

      const span = document.createElement('span');
      span.textContent = text;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.onclick = function() {
          this.parentElement.remove();
      };

     
      listItem.appendChild(checkbox);
      listItem.appendChild(span);
      listItem.appendChild(deleteButton);

    
      unorderedList.appendChild(listItem);
      input.value = '';
  }
}

const addBtn = document.querySelector('#addTask');
addBtn.addEventListener('click', addTodo);