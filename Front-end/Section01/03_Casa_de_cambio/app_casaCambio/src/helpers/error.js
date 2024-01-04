import Swal from 'sweetalert2';

const inputError = (input) => {
	if (!input) {
    Swal.fire({
			title: 'Error!',
			text: 'Digite alguma moeda (Ex.: USD, BRL, AFN)!',
			icon: 'error',
			confirmButtonText: 'Cool',
		});
  }
};

const coinError = (data, coin) => {
  if (data.base_code !== coin) {
    Swal.fire({
			title: 'Error!',
			text: 'Moeda inexistente!',
			icon: 'error',
			confirmButtonText: 'Cool',
		});
  }
};

export { inputError, coinError };