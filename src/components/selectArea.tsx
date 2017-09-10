import * as React from "react";
import AutoComplete from "material-ui/AutoComplete";
import { Area, AreaList } from "../interfaces/apiInterfaces";

interface Props {
    handler: any;
}

interface State {
    areas: Area[];
}
class SelectArea extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    async componentWillMount() {
        const response = await fetch(
            "http://lemuelboyce.pythonanywhere.com/api/v1/areas",
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
    }

    render() {
        let areaNames: string[] = [];
        if (this.state) {
            this.state.areas.forEach(area => {
                areaNames.push(area.name);
            });
        }
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
    }
}

export default SelectArea;
