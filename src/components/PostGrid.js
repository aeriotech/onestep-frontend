import React, {useState, useEffect} from 'react';
import {
	Grid
} from "@material-ui/core";

import { PostCard } from "./Cards";

export default function PostGrid(props) {

	const { postsData } = props;

	const [posts, setPosts] = useState([]);

	useEffect(() => setPosts(postsData), [postsData]);

	return (
		<>
			<Grid container spacing={2} className="os-ox-hide">
				<Grid item xs={12} >
					<Grid
						container
						justify="center"
						spacing={2}
					>
						{
							posts.map(post =>
								<Grid
									item
									key={post.id}
								>
									<PostCard key={post.id} postData={post}/>
								</Grid>
							)
						}
					</Grid>
				</Grid>
			</Grid>
		</>
	);
}