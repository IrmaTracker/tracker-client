import * as React from "react";
import TextField from "material-ui/TextField";
import DatePicker from "material-ui/DatePicker";
import TimePicker from "material-ui/TimePicker";
import RaisedButton from "material-ui/RaisedButton";
import ActionFavorite from "material-ui/svg-icons/action/favorite";
import Checkbox from "material-ui/Checkbox";
import ActionFavoriteBorder from "material-ui/svg-icons/action/favorite-border";

const styles: React.CSSProperties = {
    leftAlign: {
        textAlign: "left"
    },
    submit: {
        width: "40%",
        margin: "auto",
        marginTop: 15
    },
    h4: {
        fontSize: 16,
        color: "#00BCD4",
        fontFamily: "Roboto, sans-serif",
        fontWeight: "normal"
    },
    checkbox: {
        marginBottom: 16,
        fontSize: 16,
        color: "rgba(0, 0, 0, 0.27)",
        fontFamily: "Roboto, sans-serif",
        width: "auto"
    },
    values: {
        background: "#EEEEEE",
        padding: "0 2em",
        paddingBottom: 20,
        marginBottom: 10
    },
    form: {
        margin: "0 1.3em",
        textAlign: "center",
        display: "flex",
        flexDirection: "column"
    }
};
const AddPersonForm = () => {
    return (
        <div style={styles.form}>
            <h2>Add Someone To the List</h2>
            <small>Enter as much information as you can</small>
            <div style={styles.values}>
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
                        style={styles.leftAlign}
                        floatingLabelText="Extra Information"
                        multiLine={true}
                        rows={3}
                        rowsMax={6}
                        fullWidth={true}
                    />
                    <br />
                    <div style={styles}>
                        <h4 style={styles.h4}>Status</h4>
                        <Checkbox
                            checkedIcon={<ActionFavorite />}
                            uncheckedIcon={<ActionFavoriteBorder />}
                            label="Safe"
                            style={styles.checkbox}
                        />
                    </div>
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
            <RaisedButton
                label="Submit"
                secondary={true}
                style={styles.submit}
            />
        </div>
    );
};

export default AddPersonForm;
