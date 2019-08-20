import { Injectable, Inject } from "@nestjs/common";
import { Cart } from "./cart.entity";
import { Repository, UpdateResult } from "typeorm";
import { relative } from "path";

@Injectable()
export class CartService {
    constructor(
        @Inject('CART_REPOSITORY')
        private readonly cartRepository: Repository<Cart>,
    ) { }

    async findAll(): Promise<Cart[]> {
        return await this.cartRepository.find({ relations: ['user', 'product'] });
    }

    async find(id): Promise<Cart> {
        return await this.cartRepository.findOne(id, {
                relations: ['user', 'cartItems'],
            }
        );
    }

    async create(cart: Cart): Promise<Cart> {
        return await this.cartRepository.save(cart);
    }

    async update(cart: Cart): Promise<UpdateResult> {
        return await this.cartRepository.update(cart.id, cart);
    }
 }
