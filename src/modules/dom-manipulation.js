
import { createObjectTask } from './tasks'
import { todayProject, addNewProject } from './projects'

let newTaskArray = []
export const buttonNewTask = document.getElementById('add_new_todo')
const newTaskContainer = document.getElementsByClassName('main-right')
const newTaskContainerId = document.getElementById('container-tasks')
const allTasksButton = document.getElementById('all-tasks')
const todayTasksButton = document.getElementById('today-tasks')
const containerProjects = document.getElementById('projects-container-a');
// const buttonEditSaveTask = document.getElementById('buttonSaveTask');

buttonNewTask.addEventListener('click', () => createTaskWindow())

function createTaskWindow() {
    // По нажатию на кнопку создаем форму для деталей задачи
    const addNewTask = document.createElement('div')
    addNewTask.id = 'window-add-new-task'

    document.addEventListener('click', (event) => {
        if (!addNewTask.contains(event.target) && event.target !== buttonNewTask) {
            // Удалить форму, если клик был совершен вне формы и не на кнопке
            addNewTask.remove()
        }
    });

    const taskForm = document.createElement('form') // Создаем форму
    taskForm.id = 'form'
    const taskField = document.createElement('fieldset') // Создаем филдсет для название и описания
    taskField.id = 'task-field'

    const taskNameLabel = document.createElement('label') // Название задачи
    taskNameLabel.textContent = 'Название'
    const taskName = document.createElement('input')
    taskName.setAttribute('name', 'title')
    taskName.setAttribute('type', 'text')
    taskName.id = 'task_title'

    const taskDescriptionLabel = document.createElement('label') // Описание задачи
    taskDescriptionLabel.textContent = 'Описание задачи'
    const taskDescription = document.createElement('textarea')
    taskDescription.setAttribute('name', 'task_description')
    taskName.id = 'task-description'

    const taskChooseField = document.createElement('fieldset') // Создаем филдсет для приоритета и даты
    taskChooseField.id = 'taskChooseField'

    const taskPriorityLabel = document.createElement('label') // Выбор приоритетов
    taskPriorityLabel.textContent = 'Выбери приоритет задачи'
    const taskPrioritySelectLabel = document.createElement('select')
    taskPrioritySelectLabel.setAttribute('name', 'priority')
    const taskPriorityOptionLabel = document.createElement('option')
    taskPriorityOptionLabel.setAttribute('value', 'Low')
    taskPriorityOptionLabel.textContent = 'Low'
    const taskPriorityOptionLabelMedium = document.createElement('option')
    taskPriorityOptionLabelMedium.setAttribute('value', 'Medium')
    taskPriorityOptionLabelMedium.textContent = 'Medium'
    const taskPriorityOptionLabelHigh = document.createElement('option')
    taskPriorityOptionLabelHigh.setAttribute('value', 'High')
    taskPriorityOptionLabelHigh.textContent = 'High'

    const taskDateLabel = document.createElement('label') // Выбор даты
    taskDateLabel.textContent = 'Выберите дату'
    taskDateLabel.setAttribute('for', 'datePicker')
    const taskDateInput = document.createElement('input')
    taskDateInput.setAttribute('type', 'date')
    taskDateInput.setAttribute('name', 'datePicker')
    taskDateInput.id = 'datePicker'

    const projectNameLabel = document.createElement('label') // Название проекта
    projectNameLabel.textContent = 'Название проекта'
    const projectName = document.createElement('input')
    projectName.setAttribute('type', 'text')
    projectName.id = 'projectTitle'

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
    taskPrioritySelectLabel.appendChild(taskPriorityOptionLabelMedium);
    taskPrioritySelectLabel.appendChild(taskPriorityOptionLabelHigh);

    taskChooseField.appendChild(taskDateLabel); // Добавляем дату в филдсет
    taskChooseField.appendChild(taskDateInput);
    taskChooseField.appendChild(projectNameLabel); // Добавляем проект
    taskChooseField.appendChild(projectName);
    addNewTask.appendChild(buttonAddNewTask); // Добавялем кнопку для создания задачи
    // taskForm.appendChild(buttonAddNewTask); // Добавялем кнопку для создания задачи

    buttonAddNewTask.addEventListener('click', () => {
        const title = taskForm.elements.title.value;
        const description = taskForm.elements.task_description.value;
        const time = taskForm.elements.datePicker.value;
        const priority = taskForm.elements.priority.value;
        const project = taskForm.elements.projectTitle.value;

        const createNewObjectTask = createObjectTask(title, description, time, priority, project)
        newTaskArray.push(createNewObjectTask)
        console.log(createNewObjectTask)
        console.log(newTaskArray)
        console.log(newTaskArray.length)
        addNewTask.remove()

        const newTaskArrayJSON = JSON.stringify(newTaskArray);
        localStorage.setItem('myData', newTaskArrayJSON);

        addNewProject(newTaskArray)

        newTaskContainerId.innerHTML = ''
        displayTasks(newTaskArray, newTaskContainer)
    })
}

function displayTasks(array) {
    array.forEach(e => {
        const checkBox = document.createElement('input')
        checkBox.setAttribute('type', 'checkbox')
        checkBox.id = 'checkBoxTask'
        // Провеояем есть была ли поставлена галочка и если да, то выводим это на экран
        const newTask = document.createElement('div')
        newTask.id = 'new-task-container'
        const newTaskLeft = document.createElement('div')
        newTaskLeft.id = 'new-task-left'
        const newTaskRight = document.createElement('div')
        newTaskRight.id = 'new-task-right'

        if (e.checkbox === true) {
            checkBox.checked = true
            newTask.classList.remove('new-task')
            newTask.classList.add('new-task-checked')
        }

        newTask.classList.add('new-task')
        const newTaskTitle = document.createElement('p')
        newTaskTitle.textContent = e.title
        const newTaskDescription = document.createElement('p')
        newTaskDescription.textContent = e.description
        const newTaskDate = document.createElement('p')
        newTaskDate.textContent = e.time
        const newTaskPriority = document.createElement('p')
        newTaskPriority.textContent = e.priority

        const newTaskEdit = document.createElement('button')
        newTaskEdit.textContent = 'редактировать'
        newTaskEdit.id = 'newTaskEditButton'
        newTaskEdit.setAttribute('type', 'button')

        const newTaskDelete = document.createElement('button')
        newTaskDelete.textContent = 'удалить'
        newTaskDelete.id = 'newTaskDeleteButton'
        newTaskDelete.setAttribute('type', 'button')

        newTaskDelete.addEventListener('click', () => {
            const indexToRemove = newTaskArray.findIndex(task => task === e);
            if (indexToRemove !== -1) {
                newTaskArray.splice(indexToRemove, 1);
            }
            newTaskContainerId.innerHTML = ''
            displayTasks(newTaskArray, newTaskContainer)
            addNewProject(newTaskArray)

            const newTaskArrayJSON = JSON.stringify(newTaskArray);
            localStorage.setItem('myData', newTaskArrayJSON);

            console.log(`Мы удалили элемент - ${indexToRemove}`)
        })

        newTaskEdit.addEventListener('click', () => {
            let taskEditContainer = document.createElement('div')

            taskEditContainer.id = 'taskEditContainer'

            const taskNameLabel = document.createElement('label') // Название задачи
            taskNameLabel.textContent = 'Название'
            taskNameLabel.setAttribute('for', 'task-title')
            const taskName = document.createElement('input')
            taskName.value = e.title
            taskName.setAttribute('name', 'title')
            taskName.setAttribute('type', 'text')
            taskName.id = 'task-title'

            const taskDescriptionLabel = document.createElement('label') // Описание задачи
            taskDescriptionLabel.textContent = 'Описание задачи'
            const taskDescription = document.createElement('textarea')
            taskDescription.value = e.description
            taskDescription.setAttribute('name', 'task_description')
            taskName.id = 'task-description'

            const taskPriorityLabel = document.createElement('label') // Выбор приоритетов
            taskPriorityLabel.textContent = 'Выбери приоритет задачи'
            const taskPrioritySelectLabel = document.createElement('select')
            taskPrioritySelectLabel.id = 'taskPrioritySelectLabel'
            taskPrioritySelectLabel.setAttribute('name', 'priority')
            const taskPriorityOptionLabel = document.createElement('option')
            taskPriorityOptionLabel.setAttribute('value', 'Low')
            taskPriorityOptionLabel.textContent = 'Low'
            const taskPriorityOptionLabelMedium = document.createElement('option')
            taskPriorityOptionLabelMedium.setAttribute('value', 'Medium')
            taskPriorityOptionLabelMedium.textContent = 'Medium'
            const taskPriorityOptionLabelHigh = document.createElement('option')
            taskPriorityOptionLabelHigh.setAttribute('value', 'High')
            taskPriorityOptionLabelHigh.textContent = 'High'

            const taskDateLabel = document.createElement('label') // Выбор даты
            taskDateLabel.textContent = 'Выберите дату'
            taskDateLabel.setAttribute('for', 'datePicker')
            const taskDateInput = document.createElement('input')
            taskDateInput.value = e.time
            taskDateInput.setAttribute('type', 'date')
            taskDateInput.setAttribute('name', 'datePicker')
            taskDateInput.id = 'datePicker'

            const projectNameLabel = document.createElement('label') // Название проекта
            projectNameLabel.textContent = 'Название проекта'
            const projectName = document.createElement('input')
            projectName.setAttribute('type', 'text')
            projectName.value = e.project
            projectName.id = 'projectTitle'

            const buttonEditSaveTask = document.createElement('button') // Кнопка для создания задачи
            buttonEditSaveTask.textContent = 'Сохранить задачу'
            buttonEditSaveTask.id = 'buttonSaveTask'
            buttonEditSaveTask.setAttribute('type', 'button')

            const taskForm = document.createElement('form') // Создаем форму
            taskForm.id = 'form'

            const taskField = document.createElement('fieldset')
            taskField.id = 'fieldset-choose'

            const taskField2 = document.createElement('fieldset')
            taskField2.id = 'fieldset-choose'

            document.body.appendChild(taskEditContainer)
            taskEditContainer.appendChild(taskForm)
            taskForm.appendChild(taskField)
            taskField.appendChild(taskNameLabel)
            taskField.appendChild(taskName)
            taskField.appendChild(taskDescriptionLabel)
            taskField.appendChild(taskDescription)


            taskForm.appendChild(taskField2)

            taskField2.appendChild(taskPriorityLabel); // Добавляем Приоритет в филдсет
            taskField2.appendChild(taskPrioritySelectLabel);
            taskPrioritySelectLabel.appendChild(taskPriorityOptionLabel);
            taskPrioritySelectLabel.appendChild(taskPriorityOptionLabelMedium);
            taskPrioritySelectLabel.appendChild(taskPriorityOptionLabelHigh);

            taskField2.appendChild(taskDateLabel); // Добавляем дату в филдсет
            taskField2.appendChild(taskDateInput);
            taskField2.appendChild(projectNameLabel);
            taskField2.appendChild(projectName);
            taskEditContainer.appendChild(buttonEditSaveTask);



            console.log(newTaskArray)


            buttonEditSaveTask.addEventListener('click', () => {
                console.log('Мы нажали на сохранить задачу')
                e.title = taskName.value
                e.description = taskDescription.value
                e.priority = taskPrioritySelectLabel.value
                e.time = taskDateInput.value
                e.project = projectName.value

                newTaskContainerId.innerHTML = ''
                displayTasks(newTaskArray, newTaskContainer)

                const newTaskArrayJSON = JSON.stringify(newTaskArray);
                localStorage.setItem('myData', newTaskArrayJSON);

                addNewProject(newTaskArray)
                taskEditContainer.remove();
            })

            document.addEventListener('click', (event) => {
                if (!taskEditContainer.contains(event.target) && event.target !== newTaskEdit) {
                    taskEditContainer.remove();
                }
            })
        })

        newTaskContainerId.appendChild(newTask);
        newTask.appendChild(newTaskLeft);
        newTask.appendChild(newTaskRight);
        newTaskLeft.appendChild(checkBox);
        newTaskLeft.appendChild(newTaskTitle);
        newTaskLeft.appendChild(newTaskDescription);
        newTaskLeft.appendChild(newTaskDate);
        newTaskLeft.appendChild(newTaskPriority);
        newTaskRight.appendChild(newTaskEdit);
        newTaskRight.appendChild(newTaskDelete);

        checkBox.addEventListener('click', () => {
            console.log('Мы нажали на чекбокс')
            if (checkBox.checked) {
                e.checkbox = true
                newTask.classList.remove('new-task')
                newTask.classList.add('new-task-checked')
                console.log(e);
                console.log(newTaskArray);

                const newTaskArrayJSON = JSON.stringify(newTaskArray);
                localStorage.setItem('myData', newTaskArrayJSON);
            } else {
                e.checkbox = false
                console.log(e);
                console.log(newTaskArray);
                const newTaskArrayJSON = JSON.stringify(newTaskArray);
                localStorage.setItem('myData', newTaskArrayJSON);

                newTask.classList.remove('new-task-checked')
                newTask.classList.add('new-task')
            }
        })
    });
}


allTasksButton.addEventListener('click', () => {
    newTaskContainerId.innerHTML = ''
    displayTasks(newTaskArray)
})

todayTasksButton.addEventListener('click', () => {
    const todayTasksArray = todayProject(newTaskArray)
    newTaskContainerId.innerHTML = ''
    displayTasks(todayTasksArray)
})

containerProjects.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        event.preventDefault(); // Предотвращение стандартного действия ссылки (перехода по URL)

        // Ваши действия, которые вы хотите выполнить при нажатии на ссылку
        console.log(`ссылка "${event.target.textContent}" была нажата`);
        console.log(newTaskArray);

        const projectArray = []
        newTaskArray.forEach((obj) => {
            if (obj.project === event.target.textContent) {
                projectArray.push(obj)
            }
        })
        console.log(projectArray)
        newTaskContainerId.innerHTML = ''
        displayTasks(projectArray)
    }
})

// local storage

function loadTasks() {
    const newTaskArrayJSON = localStorage.getItem('myData');
    if (newTaskArrayJSON) {
        newTaskArray = JSON.parse(newTaskArrayJSON);
        displayTasks(newTaskArray)
        addNewProject(newTaskArray)
    }
}


document.addEventListener('DOMContentLoaded', loadTasks);

