import * as React from "react";
import { Component } from "react";
import SelectArea from "../components/selectArea";
import HelpList from "./HelpList";

const homeStyle: React.CSSProperties = {
    margin: "1em 2.5em",
    h1: {
        fontSize: 36,
        fontWeight: "normal",
        marginBottom: 10
    },
    h2: {
        fontSize: 23,
        fontWeight: "normal",
        marginBottom: 10
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
                        Select one of the islands/countries affected by Irma:
                    </h2>
                    <div style={{ height: 160 }}>
                        <SelectArea handler={this.props.handler} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
