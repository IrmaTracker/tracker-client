import * as React from "react";
import { Component } from "react";
import { Tabs, Tab } from "material-ui";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import HomeIcon from "material-ui/svg-icons/action/home";

// Modules imports
import Home from "./modules/Home";
import AddPersonForm from "./modules/AddPerson";
import List from "./modules/List";

// Styling
const styles: React.CSSProperties = {
    fontSize: 24,
    marginBottom: 12
};

interface State {
    area: number | null;
}
// Main Layout
export default class LayoutTabs extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.handler = this.handler.bind(this);
        this.state = {
            area: null
        };
    }

    handler(e: any) {
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
                    <Tab label="List">
                        <List area={this.state.area} handler={this.handler} />
                    </Tab>
                    <Tab label="Add">
                        <AddPersonForm />
                    </Tab>
                    <Tab label="Updates" />
                </Tabs>
            </MuiThemeProvider>
        );
    }
}
