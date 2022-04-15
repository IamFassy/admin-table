import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import App from '../App';
import TableComponent from '../components/TableComponent';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path='/' element={<App />} />
				<Route exact path='/table' element={<TableComponent />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
