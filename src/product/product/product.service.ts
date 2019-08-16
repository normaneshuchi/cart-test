import { Injectable, Inject } from '@nestjs/common';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
    constructor(
        @Inject('PRODUCT_REPOSITORY')
        private readonly productRepository: Repository<Product>
    ) {}

    async findAll(): Promise<Product[]> {
        return await this.productRepository.find();
    }

    async find(id): Promise<Product> {
        return await this.productRepository.findOneOrFail(id);
    }

    async create(product: Product): Promise<Product> {
        return await this.productRepository.save(product);
    }
    async delete(id): Promise<DeleteResult> {
        return await this.productRepository.delete(id);
    }
    async update(product: Product): Promise<UpdateResult> {
        return await this.productRepository.update(product.id, product);
    }
}
