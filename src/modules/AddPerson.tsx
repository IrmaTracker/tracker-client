import * as React from "react";
import TextField from "material-ui/TextField";
import DatePicker from "material-ui/DatePicker";
import TimePicker from "material-ui/TimePicker";

const formStyle: React.CSSProperties = {
    margin: "1em",
    textAlign: "center",
    display: "flex",
    flexDirection: "column"
};

const leftAlignStyle: React.CSSProperties = {
    textAlign: "left"
};
const AddPersonForm = () => {
    return (
        <div style={formStyle}>
            <h2>Add Someone To the List</h2>
            <small>Who are you looking for?</small>
            <div>
                <TextField
                    floatingLabelText="Name"
                    errorText="This field is required"
                />
                <br />
                <TextField floatingLabelText="Address" />
                <br />
                <DatePicker
                    floatingLabelText="Date Since Missing (optional)"
                    autoOk={true}
                />
                <br />
                <TimePicker
                    floatingLabelText="Time Since Missing (optional)"
                    autoOk={true}
                />
                <br />
                <TextField floatingLabelText="Missing Person's Phone Number" />
                <br />
                <TextField
                    style={leftAlignStyle}
                    floatingLabelText="Extra Information"
                    multiLine={true}
                    rows={3}
                    rowsMax={6}
                />
                <br />
            </div>
            <div>
                <h2>Your Contact Information</h2>
                <TextField
                    floatingLabelText="Your Name"
                    errorText="This field is required"
                />
                <br />
                <TextField
                    floatingLabelText="Your Phone Number"
                    errorText="This field is required"
                />
                <br />
                <TextField
                    floatingLabelText="Your Email"
                    errorText="This field is required"
                />
                <br />
                <TextField floatingLabelText="Your Facebook Link" />
                <br />
            </div>
        </div>
    );
};

export default AddPersonForm;
