import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../actionDispatchers/userDataAction';
import './table-component.scss';

const getUserData = (state) => state.userData;

const headerTitle = [
	{
		title: 'Name',
		id: 1,
		width: '10%',
	},
	{
		title: 'User Name',
		id: 2,
		width: '10%',
	},
	{
		title: 'Email',
		id: 3,
		width: '20%',
	},
	{
		title: 'Phone',
		id: 4,
		width: '10%',
	},
	{
		title: 'Website',
		id: 5,
		width: '10%',
	},
];

const TableComponent = () => {
	const dispatch = useDispatch();
	const getUserSlice = useSelector(getUserData);
	const users = getUserSlice.users;

	useEffect(() => {
		dispatch(getUsers());
	}, []);

	const renderHeader = (header) => {
		return <span>{header.title}</span>;
	};

	const renderRow = (data) => {
		return <span>{data}</span>;
	};

	const openProfile = (user) => {
		window.parent.postMessage(
			`{"type":"profile","data":${JSON.stringify(user)}}`,
			'*'
		);
	};

	const openPost = (user) => {
		window.parent.postMessage(
			`{"type":"post","data":${JSON.stringify(user)}}`,
			'*'
		);
	};

	const LinkButton = (title, func, user) => {
		return (
			<button
				onClick={() => {
					func(user);
				}}
				className='table-component__btn-link'
			>
				{title}
			</button>
		);
	};

	return (
		<table className='table-component'>
			<thead className='table-component__row'>
				<tr>
					{headerTitle.map((cur) => {
						return (
							<th
								className='table-component__row-table-head'
								style={{
									width: cur.width,
								}}
								key={cur.id}
							>
								{renderHeader(cur)}
							</th>
						);
					})}
				</tr>
			</thead>
			<tbody>
				{users.length > 0 ? (
					users.map((user) => {
						return (
							<tr key={user.id}>
								<td className='table-component__row-table-data width15'>
									{renderRow(user.name)}
								</td>
								<td className='table-component__row-table-data width10'>
									{renderRow(user.username)}
								</td>
								<td className='table-component__row-table-data width20'>
									{renderRow(user.email)}
								</td>
								<td className='table-component__row-table-data width15'>
									{renderRow(user.phone)}
								</td>
								<td className='table-component__row-table-data width10'>
									{renderRow(user.website)}
								</td>
								<td className='table-component__row-table-data width20'>
									{LinkButton(
										'View Profile',
										openProfile,
										user
									)}
									{LinkButton('View Post', openPost, user)}
								</td>
							</tr>
						);
					})
				) : (
					<tr>
						<td style={{ paddingLeft: 10, display: 'flex' }}>
							Loading...
						</td>
					</tr>
				)}
			</tbody>
		</table>
	);
};

export default TableComponent;
