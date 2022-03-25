import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCarsList } from "../../store/selectors";
import { onFavorite } from "../../store/cars/actions";
import { Compact, Extended } from "./elements";
import { ItemListProps } from "./interface";
import {BackButton} from "../../theme";

const ItemList = ({
  image,
  model,
  make,
  year,
  id,
  isDetails,
  onBack,
}: ItemListProps) => {

  const dispatch = useDispatch();
  const { favorites } = useSelector(getCarsList);

  const onFavoritePress = () => {
    dispatch(onFavorite(id));
  };

  return (
    <>
      {!isDetails ? (
        <Compact
          id={id}
          model={model}
          make={make}
          year={year}
          image={image}
          isFavorite={favorites.includes(id)}
          onFavoritePress={onFavoritePress}
        />
      ) : (
        <>
          <Extended
            id={id}
            model={model}
            make={make}
            year={year}
            image={image}
            isFavorite={favorites.includes(id)}
            onFavoritePress={onFavoritePress}
          />
          <BackButton onBack={onBack} />
        </>
      )}
    </>
  );
};

export default ItemList;
