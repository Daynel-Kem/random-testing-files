import { db } from "../database"

export const getAllPostsRoute = {
    method: 'GET',
    path: '/api/posts',
    handler: async (req, res) => {
        const { results } = await db.query(
            'SELECT * FROM posts'
        );
        return results;
    }
}