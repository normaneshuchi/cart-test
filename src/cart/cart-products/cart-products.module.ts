import { Module } from '@nestjs/common';
import { CartProductsService } from './cart-products.service';
import { CartProductsController } from './cart-products.controller';
import { DatabaseModule } from '../../db/database.module';
import { cartProductsProviders } from './cart-products.providers';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...cartProductsProviders,
    CartProductsService,
  ],
  controllers: [CartProductsController],
})
export class CartProductsModule {}
