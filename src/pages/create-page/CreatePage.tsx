import styles from './createPage.module.scss'
import { TCard } from '../../utils/types'
import { useDispatch } from '../../services/store'
import { addItem } from '../../services/disneySlice'
import { useNavigate } from 'react-router-dom'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { validationSchema } from '../../utils/validation'

const CreatePage = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	return (
		<main className={styles.main}>
			<section className={styles.container}>
				<h2>Создайте нового персонажа</h2>
				<Formik
					initialValues={{
						name: '',
						films: '',
						imageUrl: '',
					}}
					validationSchema={validationSchema}
					onSubmit={(values, { resetForm }) => {
						const newCard: TCard = {
							_id: Date.now(),
							films: values.films.split(', '),
							shortFilms: [],
							tvShows: [],
							videoGames: [],
							parkAttractions: [],
							allies: [],
							enemies: [],
							sourceUrl: '',
							name: values.name,
							imageUrl: values.imageUrl,
							createdAt: '',
							updatedAt: '',
							url: '',
						}
						dispatch(addItem(newCard))
						resetForm()
						navigate('/products')
					}}
				>
					{({ errors, touched }) => (
						<Form className={styles.form}>
							<div>
								<label htmlFor='name' className={styles.label}>
									Имя персонажа:
								</label>
								<Field
									type='text'
									name='name'
									id='name'
									className={
										errors.name && touched.name
											? `${styles.input} ${styles.errorInput}`
											: styles.input
									}
								/>
								<ErrorMessage
									name='name'
									component='span'
									className={styles.error}
								/>
							</div>

							<div>
								<label htmlFor='films'>Фильмы с его участием:</label>
								<Field
									type='text'
									name='films'
									id='films'
									className={
										errors.films && touched.films
											? `${styles.input} ${styles.errorInput}`
											: styles.input
									}
								/>
								<ErrorMessage
									name='films'
									component='span'
									className={styles.error}
								/>
							</div>

							<div>
								<label htmlFor='imageUrl'>Ссылка на изображение:</label>
								<Field
									type='url'
									name='imageUrl'
									id='imageUrl'
									placeholder='https://example.com/image.jpg'
									className={
										errors.imageUrl && touched.imageUrl
											? `${styles.input} ${styles.errorInput}`
											: styles.input
									}
								/>
								<ErrorMessage
									name='imageUrl'
									component='span'
									className={styles.error}
								/>
							</div>

							<button className={styles.button} type='submit'>
								Создать персонажа
							</button>
						</Form>
					)}
				</Formik>
			</section>
		</main>
	)
}

export default CreatePage
