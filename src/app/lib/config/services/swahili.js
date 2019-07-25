import { C_POSTBOX } from '@bbc/psammead-styles/colours';
import { latin } from '@bbc/gel-foundations/scripts';
import { news as brandSVG } from '@bbc/psammead-assets/svgs';

const service = {
  lang: `sw-KE`,
  articleAuthor: `https://www.facebook.com/pages/BBC-Swahili/160894643929209?v=wall`,
  articleTimestampPrefix: 'Updated',
  atiAnalyticsAppName: 'news-swahili',
  brandName: 'BBC News Swahili',
  product: 'BBC News Swahili',
  defaultImage: 'https://news.files.bbci.co.uk/ws/img/logos/og/swahili.png',
  defaultImageAltText: 'BBC News Swahili',
  dir: `ltr`,
  externalLinkText: ', external',
  imageCaptionOffscreenText: 'Image caption, ',
  videoCaptionOffscreenText: 'Video caption, ',
  audioCaptionOffscreenText: 'Audio caption',
  defaultCaptionOffscreenText: 'Caption, ',
  imageCopyrightOffscreenText: 'Image source, ',
  locale: `sw-KE`,
  datetimeLocale: `sw-KE`.toLowerCase(),
  service: 'swahili',
  serviceName: 'News Swahili',
  themeColor: `${C_POSTBOX}`,
  twitterCreator: '@bbcswahili',
  twitterSite: '@bbcswahili',
  noBylinesPolicy: 'https://www.bbc.com/news/help-41670342#authorexpertise',
  publishingPrinciples: 'https://www.bbc.com/news/help-41670342',
  script: latin,
  manifestPath: '/articles/manifest.json',
  swPath: '/articles/sw.js',
  translations: {
    error: {
      404: {
        statusCode: '404',
        title: '404: Ukurasa haupatikani kwa sasa',
        message:
          'Kwa sababu huenda anwani uliyoandika siyo sawa. Tafadhali angalia tena',
        solutions: [
          'Double checking the url',
          'Hitting the refresh button in your browser',
          'Searching for this page using the BBC search bar',
        ],
        callToActionFirst: 'Alternatively, please visit the ',
        callToActionLinkText: 'Ukurasa wa BBC',
        callToActionLast: '',
        callToActionLinkUrl: 'https://www.bbc.com/swahili',
      },
      500: {
        statusCode: '500',
        title: '500-Kosa',
        message: 'Pametokea kosa, fungua upya ukurasa',
        solutions: [
          'Hitting the refresh button in your browser',
          'Coming back again later',
        ],
        callToActionFirst: 'Alternatively, please visit the ',
        callToActionLinkText: 'Ukurasa wa BBC',
        callToActionLast: '',
        callToActionLinkUrl: 'https://www.bbc.com/swahili',
      },
    },
    consentBanner: {
      privacy: {
        title: "We've updated our Privacy and Cookies Policy",
        description: {
          uk: {
            first:
              "We've made some important changes to our Privacy and Cookies Policy and we want you to know what this means for you and your data.",
            linkText: null,
            last: null,
            linkUrl: null,
          },
          international: {
            first:
              "We've made some important changes to our Privacy and Cookies Policy and we want you to know what this means for you and your data.",
            linkText: null,
            last: null,
            linkUrl: null,
          },
        },
        accept: 'OK',
        reject: "Find out what's changed",
        rejectUrl: 'https://www.bbc.co.uk/usingthebbc/your-data-matters',
      },
      cookie: {
        title: 'Let us know you agree to cookies',
        description: {
          uk: {
            first: 'We use ',
            linkText: 'cookies',
            last:
              ' to give you the best online experience. Please let us know if you agree to all of these cookies.',
            linkUrl:
              'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
          },
          international: {
            first: 'We and our partners use technologies, such as ',
            linkText: 'cookies',
            last:
              ', and collect browsing data to give you the best online experience and to personalise the content and advertising shown to you. Please let us know if you agree.',
            linkUrl:
              'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
          },
        },
        accept: 'Yes, I agree',
        reject: 'No, take me to settings',
        rejectUrl:
          'https://www.bbc.co.uk/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
      },
    },
    media: {
      audio: 'Sauti',
      photogallery: 'Picha',
      video: 'Video',
      bbc_swahili_radio: {
        title: 'BBC Swahili Radio',
        subtitle:
          'Habari za kimataifa, michezo na uchambuzi kutoka kwa idhaa ya dunia.',
      },
      bbc_swahili_tv: {
        title: 'Mitikasi Leo',
        subtitle:
          'Mitikasi Leo ina taarifa za biashara, uchambuzi na maoni ya wataalam wa 100bora kila siku.',
      },
    },
  },
  brandSVG,
  footer: {
    externalLink: {
      href: 'https://www.bbc.co.uk/help/web/links/',
      text: 'Read about our approach to external linking.',
    },
    links: [
      {
        href: 'https://www.bbc.com/news/help-41670342',
        text: 'Why you can trust the BBC',
      },
      {
        href: 'https://www.bbc.com/terms',
        text: 'Terms of Use',
      },
      {
        href: 'https://www.bbc.co.uk/aboutthebbc/',
        text: 'About the BBC',
      },
      {
        href: 'https://www.bbc.com/privacy/',
        text: 'Privacy Policy',
      },
      {
        href: 'https://www.bbc.com/usingthebbc/cookies/',
        text: 'Cookies',
      },
      {
        href: 'https://www.bbc.com/accessibility/',
        text: 'Accessibility Help',
      },
      {
        href: 'https://www.bbc.com/contact/',
        text: 'Contact the BBC',
      },
    ],
    copyrightText:
      'BBC haina haihusiki vyovyote na taarifa za mitandao ya kujitegemea',
  },
  fonts: [],
};

export default service;
