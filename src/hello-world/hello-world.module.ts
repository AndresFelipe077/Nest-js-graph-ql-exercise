import { Module } from '@nestjs/common';
import { HelloWorldResolver } from './hello-world.resolver';
import { Float, Int, Query } from '@nestjs/graphql';

@Module({
  providers: [HelloWorldResolver]
})
export class HelloWorldModule {

  @Query(() => String, { name:'hello', description:'Function of Hello World' })
  helloWorld(): string {
    return 'Hola mundo';
  }

  @Query(() => Float, { name:'randomNumber' })
  getRandomNumber(): number {
    return Math.random() * 100;
  }

  @Query(() => Int, { name:'randomNumberTo', description:'Function number random to number of function' })
  getRandomFromZeroTo(): number {
    return Math.floor(Math.random() * 10);
  }


}
