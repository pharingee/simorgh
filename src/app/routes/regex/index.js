import services from '../../lib/config/services/loadableConfig';
import { servicesWithRadio, servicesWithTv } from '../config';

const serviceRegex = `${Object.keys(services).join('|')}`;
const anyLengthAlphaNumeric = '[a-z0-9]+';
const idRegex = 'c[a-zA-Z0-9]{10}o';
const ampRegex = '.amp';

const buildMediaRoutes = servicesWithMedia =>
  Object.keys(servicesWithMedia)
    .map(service => {
      return servicesWithMedia[service]
        .map(sid => {
          return `/:service(${service})/${sid}}/:pid(${anyLengthAlphaNumeric})`;
        })
        .join('|');
    })
    .join('|');

export const articleRegexPath = `/:service(${serviceRegex})/articles/:id(${idRegex}):amp(${ampRegex})?`;

export const articleDataRegexPath = `${articleRegexPath}.json`;

export const articleSwRegexPath = `/:service(${serviceRegex})/articles/sw.js`;

export const articleManifestRegexPath = `/:service(${serviceRegex})/articles/manifest.json`;

export const frontpageRegexPath = `/:service(${serviceRegex}):amp(${ampRegex})?`;

export const frontpageDataRegexPath = `${frontpageRegexPath}.json`;

export const frontpageManifestRegexPath = `/:service(${serviceRegex})/manifest.json`;

export const frontpageSwRegexPath = `/:service(${serviceRegex})/sw.js`;

export const mediaRadioRegex = `(${buildMediaRoutes(servicesWithRadio)})`;

export const mediaTvRegex = `(${buildMediaRoutes(servicesWithTv)})`;

console.log('mediaRadioRegex', mediaRadioRegex);

console.log('mediaTvRegex', mediaTvRegex);
