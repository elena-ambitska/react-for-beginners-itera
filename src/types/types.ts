
export interface IBio{
    city: string,
    year: number,
    stack: string[]
}

export interface ContentProps {
    showContent:boolean;
    name: string,
    bio: IBio,
    contact: string,
}
export interface BtnProps {
    text:string;
    onclick:()=>void
}