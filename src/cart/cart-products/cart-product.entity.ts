import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { type } from 'os';
import { Product } from '../../product/product/product.entity';
import { Cart } from '../cart/cart.entity';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class CartProduct {
    @PrimaryGeneratedColumn()
    id: number;

    
    @ManyToOne(type => Product, product => product.cartItems)
    @ApiModelProperty()
    @Column({select: true})
    product: Product;

    @ManyToOne(type => Cart, cart => cart.cartItems)
    @ApiModelProperty()
    @Column({select: true})
    cart: Product;
}
