import { FileHandler } from './FileHandler';
export interface User{
  id: number,
  username: string,
  email: number,
  profileImage: FileHandler[],
  phone: string,
  userCode: string,
  sex: string,
  role: string
}
