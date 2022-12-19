import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';
import * as process from 'process';

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory
  .generate({
    typePaths: ['./src/**/*.graphql', './src/modules/**/*.graphql'],
    path: join(process.cwd(), 'src/graphql.ts'),
    outputAs: 'class',
  })
  .then((r) => r);
