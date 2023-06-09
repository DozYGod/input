let form = document.querySelector('form')
let container = document.querySelector('.container')
let todos = []

form.onsubmit = (event) => {
    event.preventDefault()

    let todo = {
        id: Math.random(),
        isDone: false,
        time: new Date().getHours() + ":" + new Date().getMinutes()
    }

    let fm = new FormData(event.target)

    fm.forEach((value, key) => {
        todo[key] = value
    })

    todos.push(todo)
    reload(todos)
}

function reload(arr) {
    container.innerHTML = ""

    for (let item of arr) {
        let box = document.createElement('div')
        let p = document.createElement('p')
        let span = document.createElement('span')
        let button = document.createElement('button')
        let editBtn = document.createElement('button');

        editBtn.innerHTML = 'Редактировать'; 

        box.classList.add('box')
        p.classList.add('text')
        editBtn.classList.add('edit')
        span.classList.add('op')
        button.innerHTML = "x"
        span.innerHTML = item.time
        p.innerHTML = item.task

        container.append(box)
        box.append(p, span, button,editBtn)

        p.addEventListener('click', function() {
            p.classList.toggle('strike'); 
          });
        
        editBtn.addEventListener('click', () => {
            showModal(box);
        });

        button.onclick = () => {
            todos = todos.filter(el => el.id !== item.id)
            box.classList.add('delete-anim')
            setTimeout(() => {
                box.remove()
            }, 500);
            
        }
    }
}


function showModal(box) {
    let modal = document.createElement('div');
    modal.classList.add('modal');
  
    let content = document.createElement('div');
    content.classList.add('modal-content');
  
    let title = document.createElement('h2');
    title.textContent = 'Редактирование';
  
    let text = document.createElement('p');
    text.textContent = box.querySelector('.text').textContent; 
  
    let closeBtn = document.createElement('button');
    closeBtn.textContent = 'Закрыть';
    closeBtn.addEventListener('click', () => { 
      document.body.removeChild(modal);
    });
  
    content.append(title, text, closeBtn);
    modal.appendChild(content);
    document.body.appendChild(modal);
  }

