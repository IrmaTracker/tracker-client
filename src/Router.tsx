import * as React from "react";
import { Component } from "react";
import { Tabs, Tab } from "material-ui";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import HomeIcon from "material-ui/svg-icons/action/home";

// Modules imports
import Home from "./modules/Home";

// Styling
const styles: React.CSSProperties = {
    fontSize: 24,
    marginBottom: 12
};

// Main Layout
export default class LayoutTabs extends Component {
    constructor(props: any) {
        super(props);
        this.handler = this.handler.bind(this);
    }

    handler(e: any) {
        this.setState({
            area: e
        });
    }

    render() {
        console.log(this);
        return (
            <MuiThemeProvider>
                <Tabs style={styles}>
                    <Tab icon={<HomeIcon />}>
                        <Home handler={this.handler} />
                    </Tab>
                    <Tab label="List" />
                    <Tab label="Add Missing Person" />
                    <Tab label="Help" />
                </Tabs>
            </MuiThemeProvider>
        );
    }
}
