import React from "react";
import styled from "styled-components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: "top",
//     },
//     title: {
//       display: true,
//     },
//   },
// };

export const Chart = ({ label, df, margin = 0 }) => {
  const data = {
    labels: label,
    datasets: df,
  };

  return (
    <Container margin={margin}>
      <Line data={data} />
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  margin-right: ${(props) => props.margin};
  display: flex;
  align-items: center;
  justify-content: center;
`;
