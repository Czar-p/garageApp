import { Car } from "../../../../interfaces";

export interface ItemListElementProps extends Car {
    isFavorite: boolean;
    onFavoritePress: () => void;
  }