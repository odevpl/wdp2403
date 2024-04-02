import React from 'react';
import clsx from 'clsx';
import styles from './ProductPage.module.scss';
import ProductCard from '../ProductCard/ProductCard';
import NewFurniture from '../../features/NewFurniture/NewFurniture';
import { useSelector } from 'react-redux';
import { getAllCategories } from '../../../redux/categoriesRedux';
import { getAllProducts } from '../../../redux/productsRedux';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingBasket,
  faExchangeAlt,
  faPlus,
  faMinus,
  faExpand,
  faChevronLeft,
  faChevronRight,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import {
  faStar as farStar,
  faHeart,
  faEnvelope,
} from '@fortawesome/free-regular-svg-icons';
import {
  faFacebookF,
  faGooglePlusG,
  faTwitter,
  faPinterestP,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
// import PropTypes from 'prop-types';

const ProductPage = () => {
  const allCategories = useSelector(getAllCategories);
  const allProducts = useSelector(getAllProducts);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.product}>
          <div className={styles.photo}>
            <div className={styles.bigPhoto}>
              <div className={styles.resize}>
                <FontAwesomeIcon
                  className={styles.resizeIcon}
                  icon={faExpand}
                ></FontAwesomeIcon>
              </div>
            </div>
            <div className={styles.listPhoto}>
              <div className={clsx(styles.arrow, styles.arrowLeft)}>
                <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
              </div>
              <div className={styles.smallPhoto}></div>
              <div className={styles.smallPhoto}></div>
              <div className={styles.smallPhoto}></div>
              <div className={styles.smallPhoto}></div>
              <div className={clsx(styles.arrow, styles.arrowRight)}>
                <FontAwesomeIcon
                  className={styles.right}
                  icon={faChevronRight}
                ></FontAwesomeIcon>
              </div>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.header}>
              <h2 className={styles.title}>Sunbany Magic Bear Chair</h2>
              <div className={clsx(styles.changeProductArrow, styles.changeArrowLeft)}>
                <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
              </div>
              <div className={clsx(styles.changeProductArrow, styles.changeArrowRight)}>
                <FontAwesomeIcon
                  className={styles.right}
                  icon={faChevronRight}
                ></FontAwesomeIcon>
              </div>
            </div>
            <div className={clsx(styles.reviews, styles.line)}>
              <div className={styles.stars}>
                {[1, 2, 3, 4, 5].map(i => (
                  <a key={i} href='#'>
                    {i <= 2 ? (
                      <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                    ) : (
                      <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
                    )}
                  </a>
                ))}
              </div>
              <div className={styles.counterReviews}>
                <p>(0 reviews)</p>
              </div>
              <div className={styles.addReviews}>
                <p>Add Your Review</p>
              </div>
            </div>
            <div className={clsx(styles.price, styles.line)}>
              <div className={styles.standardPrice}>
                <h2>
                  <del>$350.00</del>
                </h2>
              </div>
              <div className={styles.specialPrice}>
                <h2>$250.00</h2>
              </div>
            </div>
            <div className={styles.buttons}>
              <Button variant='small' className={styles.addToCart}>
                <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
              </Button>
              <Button variant='outline' className={styles.icon}>
                <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
              </Button>
              <Button variant='outline' className={styles.icon}>
                <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
              </Button>
              <Button variant='outline' className={styles.icon}>
                <FontAwesomeIcon icon={faEnvelope}>Send message</FontAwesomeIcon>
              </Button>
            </div>
            <div className={styles.quantity}>
              <p>Quantity: </p>
              <div className={styles.items}>
                <p>2</p>
              </div>
              <Button variant='outline' className={styles.icon}>
                <FontAwesomeIcon icon={faMinus}>Send message</FontAwesomeIcon>
              </Button>
              <Button variant='outline' className={styles.icon}>
                <FontAwesomeIcon icon={faPlus}>Add item</FontAwesomeIcon>
              </Button>
            </div>
            <div className={clsx(styles.line, styles.marginTop)}></div>
            <div className={styles.overview}>
              <h3 className={styles.sectionTitle}>Quick Overview</h3>
              <p className={clsx(styles.text, styles.description)}>
                Nam tristique ligula, vet viverra elelifend nec. Nulka sed purus augue,
                eu euis tellus. Nam mattis eros tis sagittis Vestibulum suscript cursus
                biben.
              </p>
            </div>
            <div className={clsx(styles.line, styles.marginTop)}></div>
            <div className={styles.productDetails}>
              <div className={styles.availability}>
                <h3 className={styles.sectionTitle}>Availability:</h3>
                <p className={styles.description}>In stock</p>
              </div>
              <div className={styles.categoryProduct}>
                <h3 className={styles.sectionTitle}>Category:</h3>
                <p className={styles.description}>Furniture</p>
              </div>
            </div>
            <div className={clsx(styles.line, styles.marginTop)}></div>
            <div className={styles.socialMedia}>
              <div className={clsx(styles.socialMediaIcon, styles.hoverFacebook)}>
                <FontAwesomeIcon
                  className={clsx(styles.brandIcon, styles.facebook, styles.hoverIcon)}
                  icon={faFacebookF}
                >
                  facebook
                </FontAwesomeIcon>
                <p className={styles.hoverBrand}>Share</p>
              </div>
              <div className={styles.socialMediaIcon}>
                <FontAwesomeIcon
                  className={clsx(styles.brandIcon, styles.googlePlus)}
                  icon={faGooglePlusG}
                >
                  google plus
                </FontAwesomeIcon>
                <p>Google+</p>
              </div>
              <div className={styles.socialMediaIcon}>
                <FontAwesomeIcon
                  className={clsx(styles.brandIcon, styles.twitter)}
                  icon={faTwitter}
                >
                  twitter
                </FontAwesomeIcon>
                <p>Tweet</p>
              </div>
              <div className={styles.socialMediaIcon}>
                <FontAwesomeIcon
                  className={clsx(styles.brandIcon, styles.pinterest)}
                  icon={faPinterestP}
                >
                  pinterest
                </FontAwesomeIcon>
                <p>Pinterest</p>
              </div>
              <div className={styles.socialMediaIcon}>
                <FontAwesomeIcon
                  className={clsx(styles.brandIcon, styles.linkedin)}
                  icon={faLinkedinIn}
                >
                  linkedin
                </FontAwesomeIcon>
                <p>Linkedin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductCard />
      <NewFurniture categories={allCategories} products={allProducts} />
    </div>
  );
};



// ProductPage.propTypes = {};
export default ProductPage;
