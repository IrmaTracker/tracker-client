import * as React from "react";
import { Tabs, Tab } from "material-ui";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const styles = {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12
};

const LayoutTabs = (props?: MappedProps) => {
    return (
        <MuiThemeProvider>
            <Tabs style={styles}>
                <Tab label="Home" />
                <Tab label="Peoples List" />
                <Tab label="Add Missing Person" />
                <Tab label="Help" />
            </Tabs>
        </MuiThemeProvider>
    );
};

interface MappedProps {}

export default LayoutTabs;
