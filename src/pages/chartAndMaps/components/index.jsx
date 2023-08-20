import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Charts from "./charts";
import Maps from "./maps";
import { getGraphData, getContryData } from "../../../store/actions";
import styles from "../css/index.module.css";
import Header from "../../layout/header/components";
import Loading from "../../loading/components/Loading";
const ChartAndMap = () => {
  const graphData = useSelector((state) => state.graph);
  const contryData = useSelector((state) => state.contry);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGraphData());
    dispatch(getContryData());
  }, [dispatch]);
  if (graphData || contryData) {
    return (
      <>
        <Header currentPage={"Charts And Maps"} />
        <div className={styles.container}>
          <Charts {...graphData} />
          <Maps {...contryData} />
        </div>
      </>
    );
  } else {
    return <Loading />;
  }
};

export default ChartAndMap;
