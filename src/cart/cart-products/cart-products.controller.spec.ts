import { Test, TestingModule } from '@nestjs/testing';
import { CartProductsController } from './cart-products.controller';
import { DatabaseModule } from '../../db/database.module';
import { cartProductsProviders } from './cart-products.providers';
import { CartProductsService } from './cart-products.service';

describe('CartProducts Controller', () => {
  let controller: CartProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      providers: [
        ...cartProductsProviders,
        CartProductsService,
      ],
      controllers: [CartProductsController],
    }).compile();

    controller = module.get<CartProductsController>(CartProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
