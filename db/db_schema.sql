
-- Drop table

-- DROP TABLE public.products;

CREATE TABLE public.products (
	id int4 NOT NULL,
	"name" text NOT NULL,
	price int4 NOT NULL,
	sale_price int4 NULL,
	created_at timestamptz NULL,
	updated_at timestamptz NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT products_pkey PRIMARY KEY (id)
);

-- Drop table

-- DROP TABLE public.users;

CREATE TABLE public.users (
	id int2 NOT NULL,
	firstname text NOT NULL,
	lastname text NOT NULL,
	email text NOT NULL,
	"password" text NOT NULL,
	CONSTRAINT users_pkey PRIMARY KEY (id),
	CONSTRAINT users_un UNIQUE (email)
);

-- Drop table

-- DROP TABLE public.cart;

CREATE TABLE public.cart (
	id int4 NOT NULL,
	subtotal int4 NOT NULL,
	discount int4 NULL,
	total int4 NOT NULL,
	user_id int4 NOT NULL,
	created_at timestamptz NULL DEFAULT CURRENT_TIMESTAMP,
	updated_at timestamptz NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT id PRIMARY KEY (id),
	CONSTRAINT user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Drop table

-- DROP TABLE public.cart_products;

CREATE TABLE public.cart_products (
	id int4 NOT NULL,
	product_id int4 NOT NULL,
	cart_id int4 NOT NULL,
	CONSTRAINT cart_products_pkey PRIMARY KEY (id),
	CONSTRAINT cart_id_fkey FOREIGN KEY (cart_id) REFERENCES cart(id) MATCH FULL,
	CONSTRAINT product_id_fkey FOREIGN KEY (product_id) REFERENCES products(id) MATCH FULL
);
