import { Link } from "react-router-dom";
import Card from "../../components/card/card";
import { TCard } from "../../components/card/type";
import styles from './productsPage.module.scss';
import { ChangeEvent, useState } from "react";

const ProductsPage = () => {
  const [show, setShow] = useState('all');
  const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setShow(e.target.value)
  };

  const allProducts: TCard[] = [
    {
      id: '1',
      image: 'https://steamuserimages-a.akamaihd.net/ugc/1806529912255160538/5F20B565707FF4F5E5F6E0E5E4C47A297B08161D/?imw=512&amp;imh=341&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true',
      title: 'Котgxgvxhmnchmchmchgmchgmchm'
    },
    {
      id: '2',
      image: 'https://image.winudf.com/v2/image/bW9iaS5hbmRyb2FwcC5wcm9zcGVyaXR5YXBwcy5jNTExMV9zY3JlZW5fN18xNTI0MDQxMDUwXzAyMQ/screen-7.jpg?fakeurl=1&type=.jpg',
      title: 'Жмот'
    },
    {
      id: '3',
      image: 'https://image.winudf.com/v2/image/bW9iaS5hbmRyb2FwcC5wcm9zcGVyaXR5YXBwcy5jNTExMV9zY3JlZW5fN18xNTI0MDQxMDUwXzAyMQ/screen-7.jpg?fakeurl=1&type=.jpg',
      title: 'Жмот'
    },
    {
      id: '4',
      image: 'https://image.winudf.com/v2/image/bW9iaS5hbmRyb2FwcC5wcm9zcGVyaXR5YXBwcy5jNTExMV9zY3JlZW5fN18xNTI0MDQxMDUwXzAyMQ/screen-7.jpg?fakeurl=1&type=.jpg',
      title: 'Жмот'
    },
    {
      id: '5',
      image: 'https://image.winudf.com/v2/image/bW9iaS5hbmRyb2FwcC5wcm9zcGVyaXR5YXBwcy5jNTExMV9zY3JlZW5fN18xNTI0MDQxMDUwXzAyMQ/screen-7.jpg?fakeurl=1&type=.jpg',
      title: 'Жмот'
    },
    {
      id: '6',
      image: 'https://image.winudf.com/v2/image/bW9iaS5hbmRyb2FwcC5wcm9zcGVyaXR5YXBwcy5jNTExMV9zY3JlZW5fN18xNTI0MDQxMDUwXzAyMQ/screen-7.jpg?fakeurl=1&type=.jpg',
      title: 'Жмот'
    },
    {
      id: '7',
      image: 'https://image.winudf.com/v2/image/bW9iaS5hbmRyb2FwcC5wcm9zcGVyaXR5YXBwcy5jNTExMV9zY3JlZW5fN18xNTI0MDQxMDUwXzAyMQ/screen-7.jpg?fakeurl=1&type=.jpg',
      title: 'Жмот'
    },
    {
      id: '8',
      image: 'https://image.winudf.com/v2/image/bW9iaS5hbmRyb2FwcC5wcm9zcGVyaXR5YXBwcy5jNTExMV9zY3JlZW5fN18xNTI0MDQxMDUwXzAyMQ/screen-7.jpg?fakeurl=1&type=.jpg',
      title: 'Жмот'
    },
    {
      id: '9',
      image: 'https://image.winudf.com/v2/image/bW9iaS5hbmRyb2FwcC5wcm9zcGVyaXR5YXBwcy5jNTExMV9zY3JlZW5fN18xNTI0MDQxMDUwXzAyMQ/screen-7.jpg?fakeurl=1&type=.jpg',
      title: 'Жмот'
    },
    {
      id: '10',
      image: 'https://image.winudf.com/v2/image/bW9iaS5hbmRyb2FwcC5wcm9zcGVyaXR5YXBwcy5jNTExMV9zY3JlZW5fN18xNTI0MDQxMDUwXzAyMQ/screen-7.jpg?fakeurl=1&type=.jpg',
      title: 'Жмот'
    },
    {
      id: '11',
      image: 'https://image.winudf.com/v2/image/bW9iaS5hbmRyb2FwcC5wcm9zcGVyaXR5YXBwcy5jNTExMV9zY3JlZW5fN18xNTI0MDQxMDUwXzAyMQ/screen-7.jpg?fakeurl=1&type=.jpg',
      title: 'Жмот'
    }
  ];

  return (
    <section>
      <div className={styles.panel}>
        <div>
          <span>Показать:</span>
          <label>
            <input
              type="radio"
              value='all'
              checked={show === 'all'}
              onChange={onValueChange}
            />
            все новости
          </label>
          <label>
            <input
              type="radio"
              value='like'
              checked={show === 'like'}
              onChange={onValueChange}
            />
            понравившиеся новости
          </label>
        </div>
        <Link to='/create- product'>Создаить новость</Link>
      </div>
      <ul className={styles.cards}>
        {allProducts && allProducts.map((card) => (
          <Card key={card.id} image={card.image} title={card.title}></Card>
        ))}
      </ul>
    </section>
  )
};

export default ProductsPage;