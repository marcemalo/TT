export type Products = {
    id:                 number;
    title:              string;
    description:        string;
    category:           string;
    price:              number;
    discountPercentage: number;
    rating:             number;
    stock:              number;
    tags:               string[];
    brand:              string;
    sku:                string;
    weight:             number;
    dimensions:         Dimensions;
    images:             string[]
}

export type Dimensions = {
    width:  number;
    height: number;
    depth:  number;
}
