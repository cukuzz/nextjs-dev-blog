const debug = process.env.NODE_ENV !== 'production';
const name = 'small-magic-project-deployment';

export const prefix = !debug ? `/${name}` : '';
