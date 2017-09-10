import * as React from "react";
import { Component } from "react";
import SelectArea from "../components/selectArea";

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
    margin: "1em"
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
                    <h1>Missing People Tracker</h1>
                    <small>Let's help each other find our loved ones</small>
                </header>
                <div>
                    <h2>
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
