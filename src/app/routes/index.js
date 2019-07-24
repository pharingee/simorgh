import Article from '../containers/Article';
import FrontPage from '../containers/FrontPage';
import getArticleInitialData from './getInitialData/article';
import getFrontpageInitialData from './getInitialData/frontpage';
import { articleRegexPath, mediaRadioRegexArray } from './regex';

const routes = [
  {
    path: articleRegexPath,
    exact: true,
    component: Article,
    getInitialData: getArticleInitialData,
    pageType: 'article',
  },
  {
    path: mediaRadioRegexArray,
    exact: true,
    component: FrontPage,
    getInitialData: getFrontpageInitialData,
    pageType: 'frontPage',
  },
];

export default routes;
