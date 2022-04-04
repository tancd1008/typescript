import { CateType } from "../types/categories";
import instance from "./instance";

export const listCate = () => {
    const url = '/category';
    return instance.get(url);
}
export const removeCate = (id: number) => {
    const url = `/category/${id}`;
    return instance.delete(url);
}
export const addCate = (category:CateType) => {
    const url = `/category`;
    return instance.post(url, category);
}
export const updateCate = (category: CateType) => {
    const url = `/category/${category._id}`;
    return instance.put(url, category);
}
export const readCate = (id: string | undefined) => {
    const url = `/category/${id}`;
    return instance.get(url);
}