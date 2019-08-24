import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, ManyToMany } from 'typeorm';
import { type } from 'os';
import { Product } from '../../product/product/product.entity';
import { Cart } from '../cart/cart.entity';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class CartProduct {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToMany(type => Product, product => product.cartItems)
    @ApiModelProperty()
    product: Product;

    @ManyToMany(type => Cart, cart => cart.cartItems)
    @ApiModelProperty()
    cart: Cart;

    @Column('double')
    quantity: number;

    @CreateDateColumn({type: 'timestamp'})
    createdAt: Date;
}
