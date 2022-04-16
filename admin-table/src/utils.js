export const generateInitial = (str) => {
	let strArr = str.split(' ');
	return (
		strArr[0][0]?.toLocaleUpperCase() + strArr[1][0]?.toLocaleUpperCase()
	);
};
