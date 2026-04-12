async function getSuggestion() {
    const response =  await fetch('https://apis.scrimba.com/bored/api/activity')
    const data = await response.json()
    console.log(data)
}
getSuggestion() 

// What would the rejected state of the promise "We'll let you know within a week," look like?
Promise.reject("We'll let you know within a week,")