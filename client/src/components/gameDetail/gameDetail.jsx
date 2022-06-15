import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { getById } from "../../redux/actions";

export default function GameDetail() {
  const gameDetail = useSelector((state) => state.game);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getById(id));
  }, [dispatch]);

  console.log(gameDetail);

  return (
    <>
      <div>
        <h1>{gameDetail.Name}</h1>
      </div>
    </>
  );
}
