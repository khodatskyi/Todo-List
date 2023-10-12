

export const lala = (word) => console.log(word)


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