

interface Image{
    url:string
}

export interface Car {
    id: string;
    model: string;
    make: string;
    year: number;
    image:Image;
}