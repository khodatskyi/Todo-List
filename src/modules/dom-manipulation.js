

export const buttonNewTask = document.getElementById('add_new_todo')
// const newTaskContainer = document.getElementsByClassName('main-right')

buttonNewTask.addEventListener('click', () => createTaskWindow())



function createTaskWindow() {
    // По нажатию на кнопку создаем форму для деталей задачи
    const addNewTask = document.createElement('div')
    addNewTask.id = 'window-add-new-task'

    const taskForm = document.createElement('form') // Создаем форму
    const taskField = document.createElement('fieldset') // Создаем филдсет для название и описания
    taskField.id = 'task-field'

    const taskNameLabel = document.createElement('label') // Название задачи
    taskNameLabel.textContent = 'Название'
    taskNameLabel.setAttribute('for', 'task-name')    
    const taskName = document.createElement('input')
    taskName.id = 'task-name'

    const taskDescriptionLabel = document.createElement('label') // Описание задачи
    taskDescriptionLabel.textContent = 'Описание задачи'
    taskDescriptionLabel.setAttribute('for', 'task-description')    
    const taskDescription = document.createElement('textarea')
    taskName.id = 'task-description'

    const taskChooseField = document.createElement('fieldset') // Создаем филдсет для приоритета и даты
    taskChooseField.id = 'taskChooseField'

    const taskPriorityLabel = document.createElement('label') // Выбор приоритетов
    taskPriorityLabel.textContent = 'Выбери приоритет задачи'
    const taskPrioritySelectLabel = document.createElement('select')
    const taskPriorityOptionLabel = document.createElement('option')
    taskPriorityOptionLabel.setAttribute('value', 'option1')
    taskPriorityOptionLabel.textContent = 'Low'
    const taskPriorityOptionLabel2 = document.createElement('option')
    taskPriorityOptionLabel2.setAttribute('value', 'option2')
    taskPriorityOptionLabel2.textContent = 'Medium'
    const taskPriorityOptionLabel3 = document.createElement('option')
    taskPriorityOptionLabel3.setAttribute('value', 'option3')
    taskPriorityOptionLabel3.textContent = 'High'

    const taskDateLabel = document.createElement('label') // Выбор даты
    taskDateLabel.textContent = 'Выберите дату'
    taskDateLabel.setAttribute('for', 'datePicker')
    const taskDateInput = document.createElement('input')
    taskDateInput.setAttribute('type', 'date')
    taskDateInput.setAttribute('name', 'date')
    taskDateInput.id = 'datePicker'

    const buttonAddNewTask = document.createElement('button') // Кнопка для создания задачи
    buttonAddNewTask.textContent = 'Создать задачу'
    buttonAddNewTask.id = 'buttonAddNewTask'
    buttonAddNewTask.setAttribute('type', 'button')

    document.body.appendChild(addNewTask); // Добавляем контейнер к ХТМЛ
    addNewTask.appendChild(taskForm); // Добавляем форму в контейнер
    taskForm.appendChild(taskField); // Добавляем в филдсет название и описание
    taskField.appendChild(taskNameLabel);
    taskField.appendChild(taskName);
    taskField.appendChild(taskDescriptionLabel);
    taskField.appendChild(taskDescription);

    taskForm.appendChild(taskChooseField); // Добавляем филдсет2 в форму
    taskChooseField.appendChild(taskPriorityLabel); // Добавляем Приоритет в филдсет
    taskChooseField.appendChild(taskPrioritySelectLabel);
    taskPrioritySelectLabel.appendChild(taskPriorityOptionLabel);
    taskPrioritySelectLabel.appendChild(taskPriorityOptionLabel2);
    taskPrioritySelectLabel.appendChild(taskPriorityOptionLabel3);

    taskChooseField.appendChild(taskDateLabel); // Добавляем дату в филдсет
    taskChooseField.appendChild(taskDateInput);

    taskForm.appendChild(buttonAddNewTask); // Добавялем кнопку для создания задачи

}




