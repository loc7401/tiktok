import { forwardRef, useState } from 'react';
import images from '~/assets/icons/images';
import classNames from 'classnames';
import styles from './Image.module.scss';

const Image = forwardRef(
    ({ src, alt, className, fallback: customFallback = images.noImage, ...Props }, ref) => {
        const [fallback, setFallback] = useState('');
        const handleError = () => {
            setFallback(customFallback);
        };

        return (
            <img
                ref={ref}
                className={classNames(styles.wrapper, className)}
                {...Props}
                alt={alt}
                src={fallback || src}
                onError={handleError}
            ></img>
        );
    },
);
export default Image;