import { FileHandler } from './../../Model/FileHandler';
export interface RegisterRequestPayload{
  username: string,
  password: string,
  email: string,
  phone:string,
  sex:string,
  profileImage:FileHandler[],
}
