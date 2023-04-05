import { FileHandler } from './FileHandler';

export interface UserInfo{
  username: string,
  email: number,
  phone: string,
  sex: string,
  role: string,
  profileImage: FileHandler[],
}
