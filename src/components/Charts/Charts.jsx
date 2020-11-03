import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import { useMediaQuery } from "react-responsive";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = (theme) => ({
	...theme.spreadIt,
});
const Charts = ({ data: { confirmed, recovered, deaths }, country }) => {
	const [dailyData, setDailyData] = useState({});

	useEffect(() => {
		const fetchMyAPI = async () => {
			const initialDailyData = await fetchDailyData();

			setDailyData(initialDailyData);
		};

		fetchMyAPI();
	}, []);

	const barChart = confirmed ? (
		<Bar
			data={{
				labels: ["Infected", "Recovered", "Deaths"],
				datasets: [
					{
						label: "People",
						backgroundColor: [
							"rgba(0, 0, 255, 0.5)",
							"rgba(0, 255, 0, 0.5)",
							"rgba(255, 0, 0, 0.5)",
						],
						data: [confirmed.value, recovered.value, deaths.value],
					},
				],
			}}
			options={{
				legend: { display: false },
				title: { display: true, text: `Current state in ${country}` },
			}}
		/>
	) : null;

	const lineChart = dailyData[0] ? (
		<Line
			data={{
				labels: dailyData.map(({ date }) => date),
				datasets: [
					{
						data: dailyData.map((data) => data.confirmed),
						label: "Infected",
						borderColor: "#3333ff",
						fill: true,
					},
					{
						data: dailyData.map((data) => data.deaths),
						label: "Deaths",
						borderColor: "red",
						backgroundColor: "rgba(255, 0, 0, 0.5)",
						fill: true,
					},
				],
			}}
		/>
	) : null;
	return useMediaQuery({ query: "(min-width: 68	0px)" }) ? (
		<div style={{ width: "65%", margin: "0 auto" }}>
			{country ? barChart : lineChart}
		</div>
	) : (
		<div style={{ width: "100%", margin: "0 auto" }}>
			{country ? barChart : lineChart}
		</div>
	);
};

Charts.propTypes = {
	classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Charts);
