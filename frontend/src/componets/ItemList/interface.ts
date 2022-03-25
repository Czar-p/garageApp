import { Car } from "../../interfaces";

export interface ItemListProps extends Car {
    isDetails?: boolean;
    onBack?: () => void;
  }