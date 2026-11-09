import { corporateImages } from '../data/corporateImages.js';

export function CorporateImage({ name, className = '', eager = false }) {
  const image = corporateImages[name];
  const [failed, setFailed] = React.useState(false);
  React.useEffect(() => setFailed(false), [image.src]);
  const loaded = image.src && !failed;
  return (
    <div className={`corporate-image corporate-image--${image.variant} ${className}`}>
      {loaded ? <img src={image.src} alt={image.alt} width="960" height="720"
        loading={eager ? 'eager' : 'lazy'} style={{ objectPosition: image.position }} onError={() => setFailed(true)} /> : (
        <div className="corporate-image__placeholder" role="img" aria-label={`${image.label}の画像スペース`}>
          <div className="corporate-image__art" aria-hidden="true"><i /><i /><i /><i /></div>
          <span className="corporate-image__label">{image.label}</span>
        </div>
      )}
    </div>
  );
}

export function CorporateArrow({ external = false }) {
  return <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d={external ? 'M6 18 18 6M6 6h12v12' : 'M4 12h15M13 6l6 6-6 6'} /></svg>;
}
