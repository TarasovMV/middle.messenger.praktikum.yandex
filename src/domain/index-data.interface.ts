import {Block} from './block.class';

export interface Page {
    title: string;
    link: string;
    component: typeof Block;
}

export interface IndexData {
    pages: Page[];
}