import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
//MUI stuffs
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";

const styles = (theme) => ({
	...theme.spreadIt,
	formControl: {
		margin: "0px auto",
		minWidth: "300px",
	},
	countryPicker: {
		margin: "30px auto 0 auto",
		width: "fit-content",
	},
	deleteBtn: {
		marginLeft: 10,
	},
});

export class CountryPicker extends Component {
	render() {
		const { classes, countries, handleCountryChange } = this.props;
		return countries ? (
			typeof countries[0] !== "undefined" ? (
				<div className={classes.countryPicker}>
					<FormControl variant="outlined" className={classes.formControl}>
						<NativeSelect
							label="Country"
							style={{ height: "50px" }}
							defaultValue=""
							onChange={(e) => handleCountryChange(e.target.value)}
						>
							<option value="">Global</option>
							{countries.map((country, index) => (
								<option key={index} value={country.name}>
									{country.name}
								</option>
							))}
						</NativeSelect>
					</FormControl>
					<IconButton className={classes.deleteBtn}>
						<i className="fa fa-trash" aria-hidden="true"></i>
					</IconButton>
				</div>
			) : (
				"No countries found"
			)
		) : (
			"Loading..."
		);
	}
}

CountryPicker.propTypes = {
	classes: PropTypes.object.isRequired,
	countries: PropTypes.object.isRequired,
	handleCountryChange: PropTypes.func.isRequired,
};
export default withStyles(styles)(CountryPicker);
