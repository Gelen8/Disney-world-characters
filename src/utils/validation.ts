import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
	name: Yup.string()
		.required('Поле обязательно')
		.matches(/^[a-zA-Za-яА-Я\s]+$/, 'Разрешены только буквы и пробелы'),
	films: Yup.string().required('Поле обязательно'),
	imageUrl: Yup.string()
		.required('Поле обязательно')
		.matches(/^https?:\/\//, 'Введите ссылку в формате: https://...'),
})
