import * as React from "react";

interface State {
    updates: any;
}

export default class Updates extends React.Component<{}, State> {
    constructor() {
        super();
    }

    async componentWillMount() {
        const response = await fetch(
            "http://lemuelboyce.pythonanywhere.com/api/v1/announcements",
            {
                headers: {
                    Authorization:
                        "Token d4f017318b3bbd3127e0b44018cc9601f6337a31",
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Origin: ""
                }
            }
        );

        const json = await response.json();

        this.setState({ updates: json.results });
    }

    render() {
        return <div>{this.state.updates}</div>;
    }
}
