const size = {
    mobileS: '320px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
};

export const deviceWidths = {
    mobileS: 320,
    mobileL: 425,
    tablet: 768,
    laptop: 1024,
    laptopL: 1440,
    desktop: 2560,
};

export const device = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
};
