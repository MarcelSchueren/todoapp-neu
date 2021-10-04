import {useEffect, useState} from "react";

export function fetchTodos() {

    const url = '/api/todo';
    return fetch(url)
        .then(r => {
            if (r.ok) {
                return r.json()
            } else {
                throw ("Error!!!")
            }
        })

        .catch(error => console.log(error))


    // .then(data => )
    // .catch(error => console.log(error))
    // .finally(e => e.forEach(todos.push(e)));
    //RETURN

    //const resp2 = response.map(response.)
    //const resp2 = response.then((a) => a.forEach(a => todos.push(a)));



    // {characters.map((character)=>{
    //     return <CharacterCard {...character}/>
    // })}

    //return resp2;


    //
    // const data = { username: 'example' };
    //
    // fetch('https://example.com/profile', {
    //     method: 'POST', // or 'PUT'
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    // })
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log('Success:', data);
    //     })
    //     .catch((error) => {
    //         console.error('Error:', error);
    //     });
}