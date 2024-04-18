type ProductList = {
name: string;
cover: string;
status?: string;
price: number;
priceSale?: number;
colors: string[];
};

export interface IProductList {
productList: ProductList[];
}
