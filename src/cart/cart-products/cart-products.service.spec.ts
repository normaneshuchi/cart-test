import { Test, TestingModule } from '@nestjs/testing';
import { CartProductsService } from './cart-products.service';
import { DatabaseModule } from '../../db/database.module';
import { cartProductsProviders } from './cart-products.providers';
import { CartProductsController } from './cart-products.controller';

describe('CartProductsService', () => {
  let service: CartProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      providers: [
        ...cartProductsProviders,
        CartProductsService,
      ],
      controllers: [CartProductsController],
    }).compile();

    service = module.get<CartProductsService>(CartProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  }, 30000);
});
