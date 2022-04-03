import { UserType } from "../types/user";
import instance from "./instance";

export const singup = (user: UserType) => {
    const url = '/signup';
    return instance.post(url, user);
}
export const singin = (user: UserType) => {
    const url ='/signin';
    return instance.post(url, user);
}