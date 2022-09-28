import { Post } from './post.model';

export interface Users{
    id?: number | null
    userName?: string | null
    password?: string | null
    rePassword?: string | null
    cpf?: number | null
    phone?: number | null
    balance?: number | null
    url?: string | null,
    post?:[Post]
}