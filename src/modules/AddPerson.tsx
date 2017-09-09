import * as React from "react";
import TextField from "material-ui/TextField";
import DatePicker from "material-ui/DatePicker";
import TimePicker from "material-ui/TimePicker";
import RaisedButton from "material-ui/RaisedButton";
import ActionFavorite from "material-ui/svg-icons/action/favorite";
import Checkbox from "material-ui/Checkbox";
import ActionFavoriteBorder from "material-ui/svg-icons/action/favorite-border";
import ImagePicker from "../components/ImagePicker";
// import fetch from "node-fetch";

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
type MyDate = Date | undefined;

interface Props {
    formHandler?: any; // might not need this
}

interface State {
    mPname: TextData;
    mPage: TextData;
    mPaddress: TextData;
    mPlastSeenDate: MyDate;
    mPtimeLastSeen: MyDate;
    mPphonenum: TextData;
    mPextraInfo: TextData;
    mPSafe: boolean;
    pCname: TextData;
    pCnumber: TextData;
    pCemail: TextData;
    pCfacebook: TextData;
    errorMsg: TextData;
    imgUri: TextData;
    emailError: TextData;
    mPNameError: TextData;
    pCnameError: TextData;
}

class AddPersonForm extends React.Component<Props, State> {
    // mP = missing person pC = personal contact

    constructor(props: any) {
        super(props);

        this.state = {
            mPname: "",
            mPage: "",
            mPaddress: "",
            mPlastSeenDate: undefined,
            mPtimeLastSeen: undefined,
            mPphonenum: "",
            mPextraInfo: "",
            mPSafe: false,
            pCname: "",
            pCnumber: "",
            pCemail: "",
            pCfacebook: "",
            errorMsg: "",
            imgUri: "",
            emailError: "",
            mPNameError: "",
            pCnameError: ""
        };

        this._handleSubmit = this._handleSubmit.bind(this);
    }

    render() {
        console.log(this.state);
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
                            errorText={this.state.mPNameError}
                            type={"text"}
                            fullWidth={true}
                            onChange={(e: any) =>
                                this.setState({ mPname: e.target.value })}
                        />
                        <br />
                        <TextField
                            floatingLabelText="Age (optional)"
                            fullWidth={true}
                            type={"number"}
                            value={this.state.mPage}
                            onChange={(e: any) =>
                                this.setState({ mPage: e.target.value })}
                        />
                        <br />
                        <TextField
                            floatingLabelText="Address (optional)"
                            fullWidth={true}
                            value={this.state.mPaddress}
                            onChange={(e: any) =>
                                this.setState({ mPaddress: e.target.value })}
                        />
                        <br />
                        <DatePicker
                            floatingLabelText="Last Seen Date (optional)"
                            autoOk={true}
                            fullWidth={true}
                            value={this.state.mPlastSeenDate}
                            onChange={(e: any, date: Date) => {
                                this.setState({
                                    mPlastSeenDate: date
                                });
                            }}
                        />
                        <TimePicker
                            floatingLabelText="Time Since Last Seen (optional)"
                            autoOk={true}
                            fullWidth={true}
                            value={this.state.mPtimeLastSeen}
                            onChange={(e: any, date: Date) =>
                                this.setState({
                                    mPtimeLastSeen: date
                                })}
                        />
                        <TextField
                            floatingLabelText="Missing Person's Phone Number (optional)"
                            fullWidth={true}
                            type={"number"}
                            value={this.state.mPphonenum}
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
                            value={this.state.mPextraInfo}
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
                                checked={this.state.mPSafe}
                                label="Safe"
                                style={styles.checkbox}
                                onCheck={(e: any, checked: boolean) =>
                                    this.setState({ mPSafe: checked })}
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
                            type={"text"}
                            value={this.state.pCname}
                            errorText={this.state.pCnameError}
                            onChange={(e: any) =>
                                this.setState({ pCname: e.target.value })}
                        />
                        <br />
                        <TextField
                            floatingLabelText="Your Phone Number"
                            fullWidth={true}
                            type={"number"}
                            value={this.state.pCnumber}
                            onChange={(e: any) =>
                                this.setState({ pCnumber: e.target.value })}
                        />
                        <br />
                        <TextField
                            floatingLabelText="Your Email (To receive notification when marked safe)"
                            fullWidth={true}
                            type={"email"}
                            value={this.state.pCemail}
                            errorText={this.state.emailError}
                            onChange={(e: any) =>
                                this.setState({ pCemail: e.target.value })}
                        />
                        <br />
                        <TextField
                            floatingLabelText="Your Facebook Link (optional)"
                            fullWidth={true}
                            value={this.state.pCfacebook}
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
        this.setState({ mPNameError: "", emailError: "", pCnameError: "" });

        var errorExists: boolean = false;
        if (!this.state.mPname || this.state.mPname.length < 2) {
            this.setState({ mPNameError: "Missing Person's name is required" });
            errorExists = true;
        }
        if (!this.validateEmail(String(this.state.pCemail))) {
            this.setState({ emailError: "Please enter a valid email" });
            errorExists = true;
        }
        if (!this.state.pCname) {
            this.setState({ pCnameError: "Please enter your name" });
            errorExists = true;
        }

        // if (errorExists) return;

        // No error so safely post to api

        // TODO: Make a request using fetch
        // let body = {
        //     name: this.state.mPname
        // };
        // request.post(
        //     {
        //         url: "http://lemuelboyce.pythonanywhere.com/api/v1/persons",
        //         headers: {
        //             Authorization: ""
        //         },
        //         form: { body }
        //     },
        //     function(err: any, httpResponse: any, body: any) {
        //         console.log("response is " + body);
        //     }
        // );
    }

    validateEmail(email: string) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
}

export default AddPersonForm;
