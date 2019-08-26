import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { CartService } from './cart.service';
import { Cart } from './cart.entity';
import { async } from 'rxjs/internal/scheduler/async';
import { ApiImplicitBody } from '@nestjs/swagger';

@Controller('cart')
export class CartController {
    constructor(private cartService: CartService) {}

    // get all carts
    @Get()
    index() {
        return this.cartService.findAll();
    }
    // get cart by id
    @Get(':id')
    async getCart(@Param('id') id) {
        return await this.cartService.find(id);
    }
    // create new cart
    @Post('create')
    async createCart(@Body() cart: Cart) {
        return await this.cartService.create(cart);
    }
    // update cart
    @Put(':id/update')
    async updateCart(@Param('id') id, @Body() cart: Cart ): Promise<any> {
        cart.id = Number(id);
        return await this.cartService.update(cart);
    }
}
