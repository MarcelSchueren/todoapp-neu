
export function fetchTodos() {

    const url = '/api/todo';
    return fetch(url)
        .then(r => {
            if (r.ok) {
                return r.json()
            } else {
                throw new Error("Error!!!")
            }
        })
        .catch(error => console.log(error))
}