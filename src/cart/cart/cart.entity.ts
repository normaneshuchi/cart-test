import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToOne, JoinColumn, OneToMany, ManyToMany } from 'typeorm';
import { ApiModelProperty, ApiImplicitBody } from '@nestjs/swagger';
import { User } from '../../user/user/user.entity';
import { CartProduct } from '../cart-products/cart-product.entity';
import { Product } from '../../product/product/product.entity';

@Entity()
export class Cart {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiModelProperty()
    @Column('integer')
    subtotal: number;

    @ApiModelProperty()
    @Column('integer')
    discount: number;

    @ApiModelProperty()
    @Column('integer')
    total: number;

    @ApiModelProperty()
    @Column('integer')
    shipping: number;

    @ManyToMany(type => CartProduct, cartProduct => cartProduct.cart)
    cartItems: CartProduct[];

    @OneToOne(type => User)
    @JoinColumn()
    user: User;

}
