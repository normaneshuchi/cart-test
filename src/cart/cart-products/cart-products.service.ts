import { Injectable, Inject } from '@nestjs/common';
import { CartProduct } from './cart-product.entity';
import { Repository, DeleteResult } from 'typeorm';

@Injectable()
export class CartProductsService {
    constructor(
        @Inject('CART_PRODUCT_REPOSITORY')
        private readonly cartProductRepository: Repository<CartProduct>
    ) {}

    async findAll(): Promise<CartProduct[]> {
        return await this.cartProductRepository.find();
    }

    async create(cartProduct: CartProduct): Promise<CartProduct> {
        return await this.cartProductRepository.save(cartProduct);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.cartProductRepository.delete(id);
    }
}
