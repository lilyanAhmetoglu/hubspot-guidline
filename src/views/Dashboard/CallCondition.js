import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function CallCondition() {
  const [hidden, setHidden] = useState(false);
  const [value, setValue] = React.useState("New Contact");
  const handleChangeCallType = (event) => {
    setValue(event.target.value);
  };
  const handleChange = (event) => {
    setValue(event.target.value);
    if (event.target.value === "New Contact") {
      setHidden(false);
    }
    if (event.target.value === "Existing Contact") {
      setHidden(true);
    }
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Call conditions
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="firstName"
            name="fullname"
            label="Full name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend"> Who will you call?</FormLabel>
            <RadioGroup
              aria-label="contact"
              name="contact"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="New Contact"
                control={<Radio />}
                label="New Contact"
              />
              <FormControlLabel
                value="Existing Contact"
                control={<Radio />}
                label=" Existing Contact"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        {!hidden && (

            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  {" "}
                  What kind of call will you do?
                </FormLabel>
                <RadioGroup
                  aria-label="callType"
                  name="callType"
                  value={value}
                  onChange={handleChangeCallType}
                >
                  <FormControlLabel
                    value="Initial Call"
                    control={<Radio />}
                    label="Initial Call"
                  />
                  <FormControlLabel
                    value="Follow up call"
                    control={<Radio />}
                    label="Follow up call"
                  />
                  <FormControlLabel
                    value="Customer call"
                    control={<Radio />}
                    label="Customer call"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          
        )}

        {hidden && <div>old</div>}

        {/*
   <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
     
*/}
      </Grid>
    </React.Fragment>
  );
}
