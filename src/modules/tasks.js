
export function createObjectTask(title, description, time, priority, project) {
    return {
        title,
        description,
        time,
        priority,
        checkbox: false,
        project,
    }
}




