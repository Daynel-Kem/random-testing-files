import { db } from "../database";

export const addViewToPostRoute = {
    method: 'POST',
    path: '/api/posts/{id}/add-view',
    handler: async (req, res) => {
        const id = req.params.id;
        await db.query(
            'UPDATE posts SET views=views+1 WHERE id=?',
            [id]
        )
        const {results} = await db.query(
            'SELECT * FROM posts WHERE id=?',
            [id],
        );
        const updatedPost = results[0];
        return updatedPost;
    }
}