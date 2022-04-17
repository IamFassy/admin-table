import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../actionDispatchers/userDataAction';
import { generateInitial } from '../utils';
import Post from './post/Post';
import Profile from './profile/Profile';
import './slider-container.scss';

const getDataSlice = (state) => state.userData;

const SliderContainer = (props) => {
	const { type } = props;
	const dispatch = useDispatch();
	const dataSlice = useSelector(getDataSlice);
	const posts = dataSlice.posts;
	const user = dataSlice.selectedUser;

	useEffect(() => {
		if (user.id) {
			dispatch(getPosts({ id: user.id }));
		}
	}, [user.id]);
	let initial = user.name ? generateInitial(user.name) : '';

	return (
		<div className='slider-container'>
			<header className='slider-container__header'>
				<h3 className='slider-container__header-heading'>
					{type?.toLocaleUpperCase()}
				</h3>
				<button
					onClick={props.closeSlider}
					className='slider-container__header-btn'
				>
					X
				</button>
			</header>
			{type === 'post' ? (
				<Post user={user} posts={posts} initial={initial} />
			) : (
				<Profile user={user} posts={posts} initial={initial} />
			)}
		</div>
	);
};

export default SliderContainer;
