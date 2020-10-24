import 'date-fns';
import React from 'react';
import Countries from './Countries';
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography, Paper, TextField, FormControl, InputLabel, MenuItem, Select, Button } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from '@material-ui/pickers';

const styles = theme => ({
	root: {
		flexGrow: 1,
		margin: '1vw',
	},
	paper: {
		padding: theme.spacing(2),
		margin: 'auto',
		width: '50vw',
		textAlign: 'center',
	},
	image: {
		width: '7vw',
		height: '7vw',
	},
	img: {
		margin: 'auto',
		display: 'block',
		maxWidth: '100%',
		maxHeight: '100%',
	},
});

class NewEntry extends React.Component {
	constructor(props) {
		super(props);
		const b = new Date();
		console.log(b);
		let countries = Countries;
		console.log(countries);
		countries = countries.map((a, i) => <MenuItem value={{ i }}>{a}</MenuItem>);
		console.log(countries);
		this.state = {
			selectedDate: b,
			countries,
			country: null,
			desc: ''
		};

		this.handleOKClicked = this.handleOKClicked.bind(this);
	}

	handleOKClicked() {
		console.log(this.state);
	}

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<Paper className={classes.paper}>
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<Typography variant="body2" gutterBottom>
								New trip
							</Typography>
						</Grid>
						<Grid item xs={6}>
							<FormControl variant="outlined" fullWidth className={classes.formControl}>
								<InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
								<Select
									labelId="demo-simple-select-outlined-label"
									id="demo-simple-select-outlined"
									value={this.state.country}
									onChange={(event) => { this.setState({ country: event.target.value }) }}
									label="Country"
								>
									{this.state.countries}
								</Select>
							</FormControl>
						</Grid>
						<Grid item xs={3}>
							<MuiPickersUtilsProvider utils={DateFnsUtils}>
								<KeyboardDatePicker
									disableToolbar
									variant="inline"
									format="dd/MM/yyyy"
									margin="normal"
									id="date-picker-inline"
									label="Departure date"
									value={this.state.departureDate}
									onChange={(value) => { this.setState({ departureDate: value }) }}
									KeyboardButtonProps={{
										'aria-label': 'change date',
									}}
								/>
							</MuiPickersUtilsProvider>
						</Grid>
						<Grid item xs={3}>
							<MuiPickersUtilsProvider utils={DateFnsUtils}>
								<KeyboardDatePicker
									disableToolbar
									variant="inline"
									format="dd/MM/yyyy"
									margin="normal"
									id="date-picker-inline"
									label="Return date"
									value={this.state.returnDate}
									onChange={(value) => { this.setState({ returnDate: value }) }}
									KeyboardButtonProps={{
										'aria-label': 'change date',
									}}
								/>
							</MuiPickersUtilsProvider>
						</Grid>
						<Grid item xs={12}>
							<TextField
								id="outlined-multiline-static"
								label="Description"
								multiline
								rows={3}
								fullWidth
								defaultValue=""
								variant="outlined"
								value={this.state.desc}
								onChange={(event) => { this.setState({ desc: event.target.value }) }}
							/>
						</Grid>
						<Grid item xs={9}>
						</Grid>
						<Grid item xs={3}>
							<Button fullWidth variant="contained" color="primary" onClick={this.handleOKClicked}>OK</Button>
						</Grid>
					</Grid>
				</Paper>
			</div>
		);
	}
}

export default withStyles(styles)(NewEntry);