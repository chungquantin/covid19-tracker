import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import CountUp from "react-countup";
import cx from "classnames";
import dayjs from "dayjs";
//MUI stuffs
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
	...theme.spreadIt,
	cardItem: {
		margin: "20px 20px 0px 20px",
	},
	cardText: {
		margin: "10px 0px 5px 0px",
	},
	confirmed: {
		borderBottom: "10px solid #7f7fff",
	},
	cardHead: {
		margin: "0 auto",
		textAlign: "center",
	},
	recovered: {
		borderBottom: "10px solid #7fff7f",
	},
	deaths: {
		borderBottom: "10px solid #ff7f7f",
	},
});
export class Cards extends Component {
	render() {
		const {
			classes,
			data: { confirmed, recovered, deaths, lastUpdate },
		} = this.props;
		return confirmed ? (
			<Grid container spacing={3} justify="center" style={{ marginTop: 10 }}>
				<Grid
					item={true}
					xs={12}
					md={2}
					component={Card}
					className={cx(classes.cardItem, classes.confirmed)}
				>
					<CardContent className={classes.container}>
						<Typography
							className={classes.cardHead}
							color="textSecondary"
							gutterBottom
						>
							Infected
						</Typography>
						<Typography
							className={classes.cardText}
							variant="h5"
							component="h2"
						>
							<CountUp
								start={0}
								end={confirmed.value}
								duration={2.5}
								separator=","
							/>
						</Typography>
						<Typography
							className={classes.cardText}
							variant="body2"
							color="textSecondary"
						>
							{dayjs(lastUpdate).format("ddd MMMM DD YYYY")}
						</Typography>
						<Typography
							className={classes.cardHead}
							variant="body2"
							component="p"
						>
							Number of active cases of COVID-19
						</Typography>
					</CardContent>
				</Grid>
				<Grid
					item={true}
					xs={12}
					md={2}
					component={Card}
					className={cx(classes.cardItem, classes.recovered)}
				>
					<CardContent className={classes.container}>
						<Typography
							className={classes.cardHead}
							color="textSecondary"
							gutterBottom
						>
							Recovered
						</Typography>

						<Typography
							className={classes.cardText}
							variant="h5"
							component="h2"
						>
							<CountUp
								start={0}
								end={recovered.value}
								duration={2.5}
								separator=","
							/>
						</Typography>
						<Typography
							className={classes.cardText}
							variant="body2"
							color="textSecondary"
						>
							{dayjs(lastUpdate).format("ddd MMMM DD YYYY")}
						</Typography>
						<Typography
							className={classes.cardHead}
							variant="body2"
							component="p"
						>
							Number of recovered cases
						</Typography>
					</CardContent>
				</Grid>
				<Grid
					item={true}
					xs={12}
					md={2}
					component={Card}
					className={cx(classes.cardItem, classes.deaths)}
				>
					<CardContent className={classes.container}>
						<Typography
							className={classes.cardHead}
							color="textSecondary"
							gutterBottom
						>
							Death
						</Typography>
						<Typography
							className={classes.cardText}
							variant="h5"
							component="h2"
						>
							<CountUp
								start={0}
								end={deaths.value}
								duration={2.5}
								separator=","
							/>
						</Typography>
						<Typography
							className={classes.cardText}
							variant="body2"
							color="textSecondary"
						>
							{dayjs(lastUpdate).format("ddd MMMM DD YYYY")}
						</Typography>
						<Typography
							className={classes.cardHead}
							variant="body2"
							component="p"
						>
							Number of deaths caused by COVID-19
						</Typography>
					</CardContent>
				</Grid>
			</Grid>
		) : (
			<p>Loading...</p>
		);
	}
}

Cards.propTypes = {
	classes: PropTypes.object.isRequired,
	data: PropTypes.object.isRequired,
};

export default withStyles(styles)(Cards);
