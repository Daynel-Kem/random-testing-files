import { db } from "../database";
import { Boom } from "@hapi/boom";

export const getPostRoute = {
	method: "GET",
	path: "/api/posts/{id}",
	handler: async (req, res) => {
		const id = req.params.id;
		const { results } = await db.query(
			'SELECT * FROM posts WHERE id=?',
			[id],
		);
		const post = results[0];
		if (!post) {
            const Boom = require('@hapi/boom');
            throw Boom.notFound('Post not found with ID: ' + id); 
        }
		return post;
	},
};
