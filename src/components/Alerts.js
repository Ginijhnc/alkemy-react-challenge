import Swal from 'sweetalert2';

export const dishLimitAlert = () => {
	Swal.fire({
		title: 'Too many dishes!',
		text: 'You already reached the maximum amount of dishes for your menu.',
		icon: 'error',
		confirmButtonText: 'Ok',
		background: '#e4d7f7',
	});
};

export const categoryLimitAlert = () => {
	Swal.fire({
		title: 'Too many dishes of the same category!',
		text: "You can't have more than two vegan or non-vegan dishes on your menu.",
		icon: 'error',
		confirmButtonText: 'Ok',
		background: '#e4d7f7',
	});
};

export const successDishAlert = () => {
	Swal.fire({
		position: 'top-end',
		icon: 'success',
		title: 'The dish has been added to your menu.',
		showConfirmButton: false,
		timerProgressBar: true,
		timer: 2000,
		background: '#e4d7f7',
		width: 500,
	});
};

export const successDishRemovalAlert = () => {
	Swal.fire({
		position: 'top-end',
		icon: 'success',
		title: 'The dish has been successfully deleted from your menu.',
		showConfirmButton: false,
		timerProgressBar: true,
		timer: 2000,
		background: '#e4d7f7',
		width: 500,
	});
};

export const dishAlreadyExistsAlert = () => {
	Swal.fire({
		title: "Can't add the same dish twice!",
		text: 'This dish is already on your menu.',
		icon: 'error',
		confirmButtonText: 'Ok',
		background: '#e4d7f7',
	});
};

export const loginSuccessAlert = () => {
	Swal.fire({
		position: 'top-end',
		icon: 'success',
		title: 'You have logged in correctly.',
		showConfirmButton: false,
		timerProgressBar: true,
		timer: 1500,
		background: '#e4d7f7',
		width: 500,
	});
};

export const loginErrorAlert = error => {
	Swal.fire({
		title: 'There was an error.',
		text: `${error}`,
		icon: 'error',
		confirmButtonText: 'Ok',
		background: '#e4d7f7',
	});
};
