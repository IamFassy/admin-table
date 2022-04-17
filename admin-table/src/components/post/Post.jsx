import React from 'react';
import '../slider-container.scss';

const Post = ({ posts = [], user = {}, initial = '' }) => {
	const postContainer = (post) => {
		return (
			<>
				<h3>{post.title}</h3>
				<p>{post.body}</p>
			</>
		);
	};

	return (
		<>
			<div className='slider-container__name-container'>
				<div className='slider-container__name-container-initials'>
					{initial}
				</div>
				<h4>{user.name}</h4>
			</div>
			<div className='slider-container__post-container'>
				{posts.map((post) => {
					return (
						<div
							className='slider-container__post-container-content'
							key={post.id}
						>
							{postContainer(post)}
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Post;
