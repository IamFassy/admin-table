import React, { useEffect, useState } from 'react';
import CustomIframe from './components/CustomIframe';
import './app.scss';
import SliderContainer from './components/SliderContainer';
import { useDispatch } from 'react-redux';
import { setUser } from './actionDispatchers/userDataAction';

function App() {
	const [sliderOpen, setSliderOpen] = useState({
		show: false,
		type: '',
	});
	const dispatch = useDispatch();
	useEffect(() => {
		const handler = (event) => {
			if (typeof event.data === 'string') {
				let data = JSON.parse(event.data);
				if (data.data) {
					dispatch(setUser(data.data));
				}
				if (data.type === 'profile' || data.type === 'post') {
					let obj = { ...sliderOpen };
					obj.show = true;
					obj.type = data.type;
					setSliderOpen(obj);
				}
			}
		};

		window.addEventListener('message', handler);

		return () => window.removeEventListener('message', handler);
	}, []);

	const handleClose = () => {
		let obj = { ...sliderOpen };
		obj.show = false;
		obj.type = '';
		setSliderOpen(obj);
	};

	const handleType = (type) => {
		let dummySlider = { ...sliderOpen };
		dummySlider.type = type;
		setSliderOpen(dummySlider);
	};

	const renderSliderBtn = (title, type) => {
		return (
			<button
				className={`app__slider-container-btn ${
					type === sliderOpen.type || sliderOpen.type === ''
						? ''
						: 'app__slider-container-btn-normal'
				}`}
				onClick={() => handleType(type)}
			>
				{title}
			</button>
		);
	};

	return (
		<div className='app'>
			<div className='app__table-container'>
				<h3>Table</h3>
				<CustomIframe />
			</div>
			{sliderOpen.show ? (
				<SliderContainer
					type={sliderOpen.type}
					closeSlider={() => handleClose()}
				/>
			) : null}
			<div className='app__slider-container'>
				{renderSliderBtn('Profile', 'profile')}
				<br />
				{renderSliderBtn('Post', 'post')}
			</div>
		</div>
	);
}

export default App;
