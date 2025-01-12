import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './api/schema.graphql',
  documents: ['api/graphql/**/*.ts'],
  generates: {
    './api/gql/': {
      preset: 'client',
      plugins: [
        "typescript",
      ],
    },
  },
};

export default config;