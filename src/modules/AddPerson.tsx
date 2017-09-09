import * as React from "react";
import TextField from "material-ui/TextField";
import DatePicker from "material-ui/DatePicker";
import TimePicker from "material-ui/TimePicker";
import RaisedButton from "material-ui/RaisedButton";

const formStyle: React.CSSProperties = {
    margin: "0 1.3em",
    textAlign: "center",
    display: "flex",
    flexDirection: "column"
};

const leftAlignStyle: React.CSSProperties = {
    textAlign: "left"
};

const valuesStyle: React.CSSProperties = {
    background: "#EEEEEE",
    padding: "0 2em",
    paddingBottom: 20,
    marginBottom: 10
};

const submitStyle: React.CSSProperties = {
    width: "40%",
    margin: "auto",
    marginTop: 15
};
const AddPersonForm = () => {
    return (
        <div style={formStyle}>
            <h2>Add Someone To the List</h2>
            <small>Enter as much information as you can</small>
            <div style={valuesStyle}>
                <h3>Who are you looking for?</h3>
                <div>
                    <TextField
                        floatingLabelText="Name"
                        fullWidth={true}
                        style={{}}
                    />
                    <br />
                    <TextField
                        floatingLabelText="Address"
                        fullWidth={true}
                        style={{}}
                    />
                    <br />
                    <DatePicker
                        floatingLabelText="Last Seen Date(optional)"
                        autoOk={true}
                        fullWidth={true}
                        style={{}}
                    />
                    <br />
                    <TimePicker
                        floatingLabelText="Time Since Last Seen (optional)"
                        autoOk={true}
                        fullWidth={true}
                        style={{}}
                    />
                    <br />
                    <TextField
                        floatingLabelText="Missing Person's Phone Number"
                        fullWidth={true}
                        style={{}}
                    />
                    <br />
                    <TextField
                        style={leftAlignStyle}
                        floatingLabelText="Extra Information"
                        multiLine={true}
                        rows={3}
                        rowsMax={6}
                        fullWidth={true}
                    />
                    <br />
                </div>
                <h3>Your Contact Information</h3>
                <div>
                    <TextField
                        floatingLabelText="Your Name"
                        fullWidth={true}
                        style={{}}
                    />
                    <br />
                    <TextField
                        floatingLabelText="Your Phone Number"
                        fullWidth={true}
                        style={{}}
                    />
                    <br />
                    <TextField
                        floatingLabelText="Your Email"
                        fullWidth={true}
                        style={{}}
                    />
                    <br />
                    <TextField
                        floatingLabelText="Your Facebook Link"
                        fullWidth={true}
                        style={{}}
                    />
                    <br />
                </div>
            </div>
            {/* Submit to db here */}
            <RaisedButton label="Submit" secondary={true} style={submitStyle} />
        </div>
    );
};

export default AddPersonForm;
