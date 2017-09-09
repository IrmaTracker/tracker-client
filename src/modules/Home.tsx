import * as React from "react";
import { Component } from "react";
import AutoComplete from "material-ui/AutoComplete";

// Add your own
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
        console.log(this.props);
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
                    <AutoComplete
                        hintText="Enter Area"
                        filter={AutoComplete.caseInsensitiveFilter}
                        openOnFocus={true}
                        dataSource={dataSource}
                        onUpdateInput={this.props.handler}
                        listStyle={{
                            maxHeight: 200,
                            overflow: "auto"
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default Home;
