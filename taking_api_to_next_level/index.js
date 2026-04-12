/*
Base URL: https://apis.scrimba.com/jsonplaceholder
Endpoint: /posts
Challenge:
1. Make a fetch request to get all of the available posts.
⚠️ Remember to handle all errors!
*/
 
async function getPosts() {
    try {
        const response = await fetch("https://apis.scrimba.com/jsonplaceholder/posts")

        // handle HTTP errors (404, 500, etc.)
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`)
        }

        const data = await response.json()
        console.log(data)

    } catch (error) {
        console.log("Error:", error)
    } finally {
        console.log("Request completed.")
    }
}

getPosts()