import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Charts from "./charts";
import Maps from "./maps";
import { getGraphData, getContryData } from "../../../store/actions";
import styles from "../css/index.module.css";
import Header from "../../layout/header/components";
import Loading from "../../loading/components/Loading";

/**
 * A React component that displays charts and maps based on fetched data.
 *
 * @returns {JSX.Element} - The rendered component JSX
 */
const ChartAndMap = () => {
  // Access graph and country data from Redux store
  const graphData = useSelector((state) => state.graph);
  const contryData = useSelector((state) => state.contry);

  // Initialize Redux dispatch function
  const dispatch = useDispatch();

  // Fetch graph and country data on component mount
  useEffect(() => {
    dispatch(getGraphData());
    dispatch(getContryData());
  }, [dispatch]);

  // Display loading spinner if data is being fetched
  if (!graphData || !contryData) {
    return <Loading />;
  }

  // Render charts and maps when data is available
  return (
    <>
      <Header currentPage={"Charts And Maps"} />
      <div className={styles.container}>
        <Charts {...graphData} />
        <Maps {...contryData} />
      </div>
    </>
  );
};

export default ChartAndMap;
