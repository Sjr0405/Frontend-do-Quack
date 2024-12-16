export interface User {
  name: string;
  email: string;
  surname: string;
  username: string;
  phone: string;
  bornDate: string;
  imagePath: string;
  password?: string;
  id?: number;
  fullName?: string;
  registerOn?: string;
  isActive?: boolean;
}
