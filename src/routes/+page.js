export const load = async ({ fetch }) => {
    const response = await fetch(`/api/texts`)
    const posts = await response.json()

    return {
        posts
    }
}