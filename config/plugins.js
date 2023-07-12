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
  "netlify-deployments": {
    enabled: true,
    config: {
      accessToken: "7Uc3MudU2PBAZoIItKASJi_DEwxDwQ1f6VaHMhhTGOQ",
      sites: [
        {
          name: 'rococo-kashata-d6d511',
          id: "6718d728-f599-49f5-a2e7-aa1b9ef9358a",
          buildHook: "https://api.netlify.com/build_hooks/64ae3e73e16a4a0587101678",
          branch: 'main' // optional
        }
      ]
    },
  },
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