export interface MagazinesModels {
    articleId: number;
    articleName: string;
    pageNumber: number;
    products: ProductModels[];
    thumbnailUrl: string;
}
export interface ProductModels {
    brand: string;
    id: number;
    name: string;
    price: number;
    productTypeId: number;
    productTypeName: string;
    thumbnailUrl: string;
}
