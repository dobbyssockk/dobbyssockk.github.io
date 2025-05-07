import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ImageWithSkeleton = ({ src, alt, className = '' }) => {
    const [loaded, setLoaded] = useState(false);
  
    return (
      <>
        {!loaded && (
          <Skeleton style={{ width: '100%', height: '100%' }} />
        )}
        <img
          src={src}
          alt={alt}
          className={className}
          style={{
            width: '100%',
            height: '100%',
            display: loaded ? 'block' : 'none',
          }}
          onLoad={() => setLoaded(true)}
        />
      </>
    );
  };
  

export default ImageWithSkeleton;
