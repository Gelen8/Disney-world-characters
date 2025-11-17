import { useState } from "react";
import styles from './createPage.module.scss';

const CreatePage = () => {
  const [form, setForm] = useState({
    name: '',
    films: '',
    imageUrl: ''
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validate = () => {
    const newErrors: {[key: string]: string} = {};

    if (!form.name) newErrors.name = 'Название обязательно';
    if (!form.films) newErrors.films = 'Описание обязательно';
    if (form.imageUrl && !/^https?:\/\//.test(form.imageUrl)) newErrors.imageUrl = 'Некорректный URL изображения';


    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
    setErrors((prev) => ({ ...prev, [name]: '' }));
  }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(validate()) {
      console.log('форма');
      setForm({ name: '', films: '', imageUrl: '' });
      setErrors({});
    }
    
  };

  return (
    <main>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Создайте нового персонажа</h2>
        <div className={styles.field}>
          <label htmlFor="name" className={styles.label}>Имя персонажа:</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className={errors.name ? styles.errorInput : styles.input}
          />
          {errors.name && <span className={styles.error}>{errors.name}</span>}
        </div>

        <div className={styles.field}>
          <label htmlFor="films">Фильмы с его участием:</label>
          <input
            type="text"
            name="films"
            value={form.films}
            onChange={handleChange}
            className={errors.films ? styles.errorInput : styles.input}
          />
          {errors.films && <span className={styles.error}>{errors.films}</span>}
        </div>

        <div className={styles.field}>
          <label htmlFor="imageUrl">Ссылка на изображение:</label>
          <input
            className={styles.input}
            type="url"
            name="imageUrl"
            value={form.imageUrl}
            onChange={handleChange}
          />
          {errors.imageUrl && <span className={styles.error}>{errors.imageUrl}</span>}
        </div>

        <button className={styles.button} type="submit">Создать персонажа</button>
      </form>
    </main>
  )
};

export default CreatePage;