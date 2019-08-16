import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { CartService } from './cart.service';
import { Cart } from './cart.entity';
import { async } from 'rxjs/internal/scheduler/async';
import { ApiImplicitBody } from '@nestjs/swagger';

@Controller('cart')
export class CartController {
    constructor(private cartService: CartService) {}

    @Get()
    index() {
        return this.cartService.findAll();
    }

    @Get(':id')
    async getCart(@Param('id') id): Promise<Cart> {
        return await this.cartService.find(id);
    }

    @Post('create')
    async createCart(@Body() cart: Cart): Promise<Cart> {
        return await this.cartService.create(cart);
    }

    @Put(':id/update')
    async updateCart(@Param('id') id, @Body() cart: Cart ): Promise<any> {
        cart.id = Number(id);
        return await this.cartService.update(cart);
    }
}
