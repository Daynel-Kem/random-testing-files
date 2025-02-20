import { db } from "../database";

export const deletePostRoute = {
    method: 'DELETE',
    path: '/api/posts/{id}',
    handler: async (req, res) => {
        const {id} = req.params;
        await db.query(
            'DELETE FROM posts WHERE id=?',
            [id],
        )
        return res.response('Post deleted').code(200);
    }
}