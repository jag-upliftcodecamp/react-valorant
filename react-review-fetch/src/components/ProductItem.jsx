import style from './ProductItem.module.css';

function ProductItem({ title, price, images, description }) {
  const defaultImage = 'https://placehold.co/1800.png';
  let image = images;

  // state: check if the images[0] is valid or not
  const onImageError = (e) => {
    image = defaultImage;
  };

  return (
    <div>
      <div className={style.imageContainer}>
        <img
          onError={onImageError}
          src={image}
          alt="product-item"
          className={style.productItemImage}
        />
      </div>
      <div>
        <h2>{title}</h2>
        <p>{price}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProductItem;
