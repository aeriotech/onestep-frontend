import React, {useEffect, useState} from 'react';

// reactstrap components
import {
	Container,
	Row
} from 'reactstrap';
import {getPost} from "../api/api.onestep";
import { API_URL as url } from '../api/config.json';

export default function Post(props) {

	const id = props.match.params.id;

	const [post, setPost] = useState({});

	useEffect(() => {
		async function fetchPost() {
			const res = await getPost(id);

			try {
				const fetchedPost = res.data;

				setPost({
					title: fetchedPost.title,
					content: fetchedPost.content,
					slug: fetchedPost.slug,
					published_at: fetchedPost.published_at,
					image: fetchedPost.image.url,
					tags: fetchedPost.tags
				})
			} catch (error) {
				console.log(error);
			}
		}

		fetchPost().then(r => console.log(r));
	}, [id])

	useEffect(() => {
		console.log('Post: ', post)
	}, [post]);


	return (
		<>
			<div className="os-bg-sec">
				<div className="position-relative">
					<section className="section section-lg">
						<Container>
							<Row className="justify-content-center text-center mb-lg">
								<h1 className="text-white"> { post.title } </h1>
							</Row>
							<Row className="justify-content-center text-center mb-lg">
								<img
									alt="post-media"
									className="os-post-image"
									src={url + post.image}
								/>
							</Row>
							<Row className="justify-content-center text-center mb-lg">
								<p className="text-white os-post-content"> {post.content} </p>
							</Row>
						</Container>
					</section>
				</div>
			</div>
		</>
	);
}