import * as React from "react";
import TextField from "material-ui/TextField";
import DatePicker from "material-ui/DatePicker";
import TimePicker from "material-ui/TimePicker";
import RaisedButton from "material-ui/RaisedButton";
import ActionFavorite from "material-ui/svg-icons/action/favorite";
import Checkbox from "material-ui/Checkbox";
import ActionFavoriteBorder from "material-ui/svg-icons/action/favorite-border";
import ImagePicker from "../components/ImagePicker";

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
        textAlign: "left"
    },
    checkbox: {
        marginBottom: 16,
        fontSize: 16,
        color: "rgba(0, 0, 0, 0.27)",
        width: "auto"
    },
    values: {
        background: "#EEEEEE",
        padding: "0 2em",
        paddingBottom: 20,
        marginBottom: 10
    },
    section: {
        background: "#EEEEEE"
    },
    form: {
        margin: "0 1.3em",
        textAlign: "center",
        display: "flex",
        flexDirection: "column"
    }
};

type TextData = string | undefined;

interface Props {
    formHandler?: any; // might not need this
}

interface State {
    mPname: TextData;
    mPaddress: TextData;
    mPlastSeenDate: TextData;
    mPtimeLastSeen: TextData;
    mPphonenum: TextData;
    mPextraInfo: TextData;
    pCname: TextData;
    pCnumber: TextData;
    pCemail: TextData;
    pCfacebook: TextData;
    errorMsg: TextData;
    imgUri: TextData;
}

class AddPersonForm extends React.Component<Props, State> {
    // mP = missing person pC = personal contact

    constructor(props: any) {
        super(props);
        this.state = {
            mPname: "",
            mPaddress: "",
            mPlastSeenDate: "",
            mPtimeLastSeen: "",
            mPphonenum: "",
            mPextraInfo: "",
            pCname: "",
            pCnumber: "",
            pCemail: "",
            pCfacebook: "",
            errorMsg: "",
            imgUri: ""
        };

        this._handleSubmit = this._handleSubmit.bind(this);
    }

    render() {
        return (
            <div style={styles.form}>
                <h2>Add Someone To the List</h2>
                <small>Enter as much information as you can</small>
                <div>
                    <h3
                        style={{
                            textAlign: "left"
                        }}
                    >
                        Who are you looking for?
                    </h3>
                    <div style={styles.values}>
                        <ImagePicker />
                        <TextField
                            ref="mPname"
                            floatingLabelText="Name"
                            value={this.state.mPname}
                            fullWidth={true}
                            onChange={(e: any) =>
                                this.setState({ mPname: e.target.value })}
                        />
                        <br />
                        <TextField
                            floatingLabelText="Address (optional)"
                            fullWidth={true}
                            onChange={(e: any) =>
                                this.setState({ mPaddress: e.target.value })}
                        />
                        <br />
                        <DatePicker
                            floatingLabelText="Last Seen Date (optional)"
                            autoOk={true}
                            fullWidth={true}
                            onChange={(e: any) =>
                                this.setState({
                                    mPlastSeenDate: e.target.value
                                })}
                        />
                        <br />
                        <TimePicker
                            floatingLabelText="Time Since Last Seen (optional)"
                            autoOk={true}
                            fullWidth={true}
                            onChange={(e: any) =>
                                this.setState({
                                    mPtimeLastSeen: e.target.value
                                })}
                        />
                        <br />
                        <TextField
                            floatingLabelText="Missing Person's Phone Number (optional)"
                            fullWidth={true}
                            onChange={(e: any) =>
                                this.setState({ mPphonenum: e.target.value })}
                        />
                        <br />
                        <TextField
                            style={styles.leftAlign}
                            floatingLabelText="Extra Information (optional)"
                            multiLine={true}
                            rows={3}
                            rowsMax={6}
                            fullWidth={true}
                            onChange={(e: any) =>
                                this.setState({ mPextraInfo: e.target.value })}
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
                    <h3
                        style={{
                            textAlign: "left"
                        }}
                    >
                        Your Contact Information
                    </h3>
                    <div style={styles.values}>
                        <TextField
                            floatingLabelText="Your Name"
                            fullWidth={true}
                            onChange={(e: any) =>
                                this.setState({ pCname: e.target.value })}
                        />
                        <br />
                        <TextField
                            floatingLabelText="Your Phone Number"
                            fullWidth={true}
                            onChange={(e: any) =>
                                this.setState({ pCnumber: e.target.value })}
                        />
                        <br />
                        <TextField
                            floatingLabelText="Your Email (Receive notification when marked safe)"
                            fullWidth={true}
                            onChange={(e: any) =>
                                this.setState({ pCemail: e.target.value })}
                        />
                        <br />
                        <TextField
                            floatingLabelText="Your Facebook Link (optional)"
                            fullWidth={true}
                            onChange={(e: any) =>
                                this.setState({ pCfacebook: e.target.value })}
                        />
                        <br />
                    </div>
                </div>
                <span
                    style={{
                        paddingLeft: 15,
                        color: "red",
                        textAlign: "left"
                    }}
                >
                    {" "}
                    {this.state.errorMsg}
                </span>
                {/* Submit to db here */}
                <RaisedButton
                    label="Submit"
                    secondary={true}
                    style={styles.submit}
                    onClick={this._handleSubmit}
                />
            </div>
        );
    }

    _handleSubmit() {
        if (!this.state.mPname || this.state.mPname.length < 1) {
            this.setState({ errorMsg: "Missing Person's name is required" });
            return;
        }
        this.setState({ errorMsg: " " });
    }
}

export default AddPersonForm;
