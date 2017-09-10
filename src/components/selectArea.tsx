import * as React from "react";
import AutoComplete from "material-ui/AutoComplete";
import { Area, AreaList } from "../interfaces/apiInterfaces";

interface Props {
    handler: any;
}

interface State {
    areas: Area[];
    error: string;
}
class SelectArea extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.setState({ areas: [], error: "" });
    }

    async componentDidMount() {
        try {
            const response = await fetch(
                "https://lemuelboyce.pythonanywhere.com/api/v1/areas",
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

            const json: AreaList = await response.json();

            this.setState({ areas: json.results });
        } catch (e) {
            this.setState({ error: e.message });
        }
    }

    render() {
        if (this.state && this.state.error) {
            return (
                <div>
                    <p>Error: {this.state.error}.</p>
                    <p>
                        Errors are usually caused by too many requests, so just
                        wait a few seconds/minutes and try again! Consider
                        donating so we can afford more requests.
                    </p>
                </div>
            );
        }
        let areaNames: string[] = [];
        if (this.state && this.state.areas) {
            this.state.areas.forEach(area => {
                areaNames.push(area.name);
            });

            return (
                <AutoComplete
                    hintText="Enter Area"
                    filter={AutoComplete.caseInsensitiveFilter}
                    openOnFocus={true}
                    dataSource={areaNames}
                    onUpdateInput={this.props.handler}
                    listStyle={{
                        maxHeight: 120,
                        overflow: "auto",
                        fontSize: "0.7em"
                    }}
                />
            );
        } else {
            return <div />;
        }
    }
}

export default SelectArea;
