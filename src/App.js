import React, { Component } from "react";
//Components
import withStyles from "@material-ui/core/styles/withStyles";
import { Cards, Charts, CountryPicker } from "./components";
//MUI stuffs
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
//api
import { fetchData, getCountries } from "./api";

const theme = createMuiTheme({
	spreadIt: {
		typography: {
			fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
		},
		container: {
			justifyContent: "center",
			alignItems: "center",
			display: "flex",
			flexDirection: "column",
			flexWrap: "wrap",
		},
	},
});
const styles = (theme) => ({
	...theme.spreadIt,
});
class App extends Component {
	state = {
		data: {},
		countries: {},
		country: "",
	};
	async componentDidMount() {
		const fetchedData = await fetchData();
		const gottenCountries = await getCountries();
		this.setState({ data: fetchedData, countries: gottenCountries });
	}
	handleCountryChange = async (country) => {
		const data = await fetchData(country);
		this.setState({ data, country });
	};
	render() {
		const { classes } = this.props;
		const { data, countries, country } = this.state;
		return (
			<MuiThemeProvider theme={theme}>
				<div className={classes.container}>
					<Cards data={data} className={classes.card} />
					<CountryPicker
						countries={countries}
						handleCountryChange={this.handleCountryChange}
					/>
					<Charts data={data} country={country} />
				</div>
			</MuiThemeProvider>
		);
	}
}

export default withStyles(styles)(App);
