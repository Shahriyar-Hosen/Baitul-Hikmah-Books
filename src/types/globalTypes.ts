export interface IProduct {
  _id: number;
  name: string;
  image: string;
  price: number;
  status: boolean;
  rating: number;
  quantity?: number;
}
