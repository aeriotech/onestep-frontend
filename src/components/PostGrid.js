import React, {useState, useEffect} from 'react';

// reactstrap components
import {
	Container,
	Row,
	Col
} from 'reactstrap';
import { PostCard } from "./Cards";

export default function PostGrid(props) {

	const { postsData } = props;

	const [posts, setPosts] = useState([]);

	useEffect(() => setPosts(postsData), [postsData]);

	return (
		<>
			<Container className="os-post-grid">
				<Row>
					{
						posts.map(post =>
							/*<Col sm={12} md={4} key={post.id}>
								<PostCard postData={post}/>
							</Col>*/
							<Col key={post.id} className="m-2">
								<PostCard key={post.id} postData={post}/>
							</Col>
						)
					}
				</Row>
			</Container>
		</>
	);
}