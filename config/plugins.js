module.exports = ({ env }) => ({
  // upload: {
  //   config: {
  //     provider: 'aws-s3',
  //     providerOptions: {
  //       s3Options: {
  //         accessKeyId: env('AWS_ACCESS_KEY_ID'),
  //         secretAccessKey: env('AWS_ACCESS_SECRET'),
  //         region: env('AWS_REGION'),
  //         params: {
  //           Bucket: env('AWS_BUCKET'),
  //         },
  //       }
  //     },
  //     actionOptions: {
  //       upload: {},
  //       uploadStream: {},
  //       delete: {},
  //     },
  //   },
  // },
  graphql: {
    enabled: true,
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: true,
      defaultLimit: 10,
      maxLimit: 20,
      apolloServer: {
        tracing: true,
      },
      introspection: true
    },
  },
});