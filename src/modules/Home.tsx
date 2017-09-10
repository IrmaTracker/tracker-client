import * as React from "react";
import { Component } from "react";
import SelectArea from "../components/selectArea";
import HelpList from "./HelpList";
// TODO: fetch arealist
const dataSource = [
    "Anguilla",
    "Antigua",
    "Bahamas",
    "Boca Raton, FL",
    "British Virgin Islands",
    "Cuba",
    "Dominican Republic",
    "Guadeloupe",
    "Haiti",
    "Keywest, FL",
    "Miami, FL",
    "Montserrat",
    "Naples",
    "Nevis",
    "Orlando, FL",
    "Puerto Rico",
    "Saba",
    "Saint Barth",
    "Sint Maarten",
    "Saint Martin",
    "St John",
    "St Croix"
];

const homeStyle: React.CSSProperties = {
    margin: "1em",
    h1: {
        fontSize: 36,
        fontWeight: "normal",
        marginBottom: 10
    },
    h2: {
        fontSize: 26,
        fontWeight: "normal"
    },
    small: {
        fontSize: 20,
        opacity: "0.5"
    }
};

interface Props {
    handler: any;
}

class Home extends Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div style={homeStyle}>
                <header>
                    <h1 style={homeStyle.h1}>Missing People Tracker</h1>
                    <small style={homeStyle.small}>
                        Let's help each other find our loved ones
                    </small>
                </header>
                <div className="help">
                    <HelpList />
                </div>
                <div>
                    <h2 style={homeStyle.h2}>
                        Select one of the islands/countries affected by Irma
                    </h2>
                    <SelectArea
                        dataSource={dataSource}
                        handler={this.props.handler}
                    />
                </div>
            </div>
        );
    }
}

export default Home;
