import { Coments } from './coments.model';
export interface Post{
    id?: number | null
    title?: string | null
    content?: string | null
    data?: string | null
    likes?: string | null
    coments?: [Coments]
}