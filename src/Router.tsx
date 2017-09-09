import * as React from "react";
import { Component } from "react";
import { Tabs, Tab } from "material-ui";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import HomeIcon from "material-ui/svg-icons/action/home";

// Modules imports
import Home from "./modules/Home";
import AddPersonForm from "./modules/AddPerson";

// Styling
const styles: React.CSSProperties = {
    fontSize: 24,
    marginBottom: 12
};

// Main Layout
export default class LayoutTabs extends Component {
    constructor(props: {}) {
        super(props);
        this.handler = this.handler.bind(this);
    }

    handler(e: {}) {
        this.setState({
            area: e
        });
    }

    render() {
        return (
            <MuiThemeProvider>
                <Tabs style={styles}>
                    <Tab icon={<HomeIcon />}>
                        <Home handler={this.handler} />
                    </Tab>
                    <Tab label="List" />
                    <Tab label="Add Missing Person">
                        <AddPersonForm />
                    </Tab>
                    <Tab label="Help" />
                </Tabs>
            </MuiThemeProvider>
        );
    }
}
