import React from 'react';
import '../slider-container.scss';

const Profile = ({ initial = '', user = {} }) => {
	const renderInput = (val, title) => {
		return (
			<>
				<label className='slider-container__profile-container-details-label'>
					{title}
				</label>{' '}
				<input
					className='slider-container__profile-container-details-input'
					disabled={true}
					value={val}
				/>
			</>
		);
	};

	let address = `${user.address?.street}, ${user.address?.suite}, ${user.address?.city}, ${user.address.zipcode}`;
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
				<div className='slider-container__profile-container-details'>
					{renderInput(user.email, 'Email')}
					{renderInput(address, 'Address')}
					{renderInput(user.phone, 'Phone')}
					{renderInput(user.website, 'Website')}
					{renderInput(user.company?.name, 'Company')}
				</div>
			</div>
		</>
	);
};

export default Profile;
