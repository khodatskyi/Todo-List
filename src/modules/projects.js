
export const todayProject = (array) => {
    const todayArray = []
    // Узнаем сегодняшнюю дату
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0'); // День
    let mm = String(today.getMonth() + 1).padStart(2, '0'); // Месяц (начиная с 0)
    let yyyy = today.getFullYear(); // Год
    let currentDate = yyyy + '-' + mm + '-' + dd; // Формат YYYY-MM-DD

    array.forEach(obj => {
        if(currentDate === obj.time) {
            todayArray.push(obj)
        }
    });
    return todayArray
}

// Создать новый проект
export const addNewProject = function(array) {
    const projectContainer = document.getElementById('projects-container-a');
    const existingProjects = Array.from(projectContainer.querySelectorAll('a'));

    array.forEach((obj) => {
        let projectExists = false;
        // Проверяем, существует ли проект с таким же названием
        projectContainer.querySelectorAll('a').forEach((element) => {
            if (element.textContent === obj.project) {
                console.log('У нас уже есть проект с таким названием!');
                projectExists = true;
            }
        });

        if (!projectExists) {
            // Создаем новый проект, только если совпадения не найдено
            const pInfo = document.createElement('a');
            pInfo.textContent = obj.project;
            projectContainer.appendChild(pInfo);
            // Вот тут добавляем эту задачу в этот проект, чтоб его было видно на странице
            console.log('Создаем новый проект: ' + obj.project);
        }
    });

    existingProjects.forEach((element) => {
        if (!array.some((obj) => obj.project === element.textContent)) {
            console.log('У нас уже нет такого проекта, его нужно удалить');
            console.log(element);
            element.remove();
        }
    });
};