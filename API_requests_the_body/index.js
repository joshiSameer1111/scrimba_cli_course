try {
    const response = await fetch('https://apis.scrimba.com/jsonplaceholder/posts', {method: 'POST'})
    if (!response.ok) {
        throw new Error('There was a problem with the API')
    }
    const data = await response.json()
    console.log(data)
} catch(err) {
    console.log(err)
}  

/*
Challenge:
1. Using the code snippet in the slide, add a body 
   property to the object we are passing with the 
   fetch request. I want you to create a new post 
   with the title “Holiday Nightmares” and the body 
   “When I was kidnapped in Scotland…” 
   
   In the console, you should see and object with an 
   ID, for example: {id: 101}
*/

try {
    const response = await fetch(
            'https://apis.scrimba.com/jsonplaceholder/posts',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Added header to specify the content type of the request body
            },
                body: JSON.stringify({
                title: "Holiday Nightmares",
                body: "When I was kidnapped in Scotland…",
                id: 10
            })
        }
    )

    if (!response.ok) {
        throw new Error('There was a problem with the API')
    }

    const data = await response.json()
    console.log(data)

} catch (err) {
    console.log(err)
}
