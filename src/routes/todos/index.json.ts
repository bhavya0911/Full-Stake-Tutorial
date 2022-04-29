import type { RequestHandler } from "@sveltejs/kit";

//TODO: Persist in database
let todos: Todo[] = [];

export const get: RequestHandler = () => {
    return {
       status: 200,
       body: "Hello from the API."
    }
}

export const post: RequestHandler = async ({ request }) => {
    const formData = await request.formData();

    todos.push({
        created_at: new Date(),
        text: formData.get('text') as string,
        done: false
    });

    return {
        status: 200,
        body: formData.get('text') as string
    } 
}