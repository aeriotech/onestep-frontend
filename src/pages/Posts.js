import React, { useState, useEffect } from 'react';

// reactstrap components
import {
	Container,
	Row,
} from 'reactstrap';
import PostGrid from "../components/PostGrid";
import {getPosts} from "../api/api.onestep";

export default function Posts() {

	const [posts, setPosts] = useState([]);

	useEffect(() => {
		async function fetchPosts() {
			let temp = [];

			const res = await getPosts();

			try {
				const fetchedPosts = res.data;

				fetchedPosts.forEach(post => {
					temp.push({
						id: post.id,
						title: post.title,
						content: post.content,
						slug: post.slug,
						published_at: post.published_at,
						image: post.image.url,
						tags: post.tags
					})
				})

				setPosts(temp);

			} catch (error) {
				console.log(error);
			}
		}

		fetchPosts().then(r => console.log(r));
	}, [])

	return (
		<>
			<div className="os-bg-sec os-mh os-ox-hide">
				<div className="position-relative">
					<section className="d-flex align-items-center justify-content-center section-sm justify-content-center text-center">
						<h1 className="text-white"> Objave </h1>
					</section>
					<section className="section-sm">
						{
							posts ?
								<PostGrid postsData={posts} />
								:
								<h1 className="text-white"> Objav trenutno še ni </h1>
						}
					</section>
				</div>
			</div>
		</>
	);
}