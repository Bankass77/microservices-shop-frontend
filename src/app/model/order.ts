export interface Order {
  id?: number;
  orderNumber?: string;
  skuCode: string;
  price: number;
  quantity: number;
  userdetails: UserDetails

}

export interface UserDetails {
  email: string;
  firstName: string;
  lastName: string;
}
