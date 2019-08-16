import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { CartProduct } from '../../cart/cart-products/cart-product.entity';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiModelProperty()
    @Column('text')
    name: string;

    @ApiModelProperty()
    @Column('integer')
    price: number;

    @ApiModelProperty()
    @Column('integer')
    salePrice: number;

    @ApiModelProperty()
    @OneToMany(type => CartProduct, cartProduct => cartProduct.product)
    cartItems: CartProduct[];

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;


}
