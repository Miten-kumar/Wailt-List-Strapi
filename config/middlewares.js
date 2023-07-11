// module.exports = [
//   'strapi::errors',
//   'strapi::security',
//   {
//     name: 'strapi::security',
//     config: {
//       contentSecurityPolicy: {
//         useDefaults: true,
//         directives: {
//           'connect-src': ["'self'", 'https:'],
//           'img-src': [
//             "'self'",
//             'data:',
//             'blob:',
//             'dl.airtable.com',
//             `https://${process.env.AWS_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com`,
//           ],
//           'media-src': [
//             "'self'",
//             'data:',
//             'blob:',
//             'dl.airtable.com',
//             `https://${process.env.AWS_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com`,
//           ],
//           upgradeInsecureRequests: null,
//         },
//       },
//     },
//   },
//   'strapi::poweredBy',
//   {
//     name: 'strapi::cors',
//     config: {
//       header: '*',
//       origin: '*',
//       methods: '*'
//     }
//   },
//   'strapi::logger',
//   'strapi::query',
//   'strapi::body',
//   'strapi::session',
//   'strapi::favicon',
//   'strapi::public',
// ];


module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];