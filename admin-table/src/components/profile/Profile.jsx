import React from 'react';
import '../slider-container.scss';

const Profile = ({ initial = '', user = {} }) => {
	return (
		<>
			<div className='slider-container__profile-container'>
				<div className='slider-container__profile-container-name'>
					<div className='slider-container__profile-container-name-initials'>
						{initial}
					</div>
					<p className='slider-container__profile-container-name-title'>
						{user.name}
					</p>
					<p className='slider-container__profile-container-name-username'>
						{user.username}
					</p>
				</div>
			</div>
		</>
	);
};

export default Profile;
