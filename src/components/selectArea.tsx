import * as React from "react";
import AutoComplete from "material-ui/AutoComplete";

interface Props {
    dataSource: any;
    handler: any;
}

const SelectArea = (props: Props) => {
    return (
        <AutoComplete
            hintText="Enter Area"
            filter={AutoComplete.caseInsensitiveFilter}
            openOnFocus={true}
            dataSource={props.dataSource}
            onUpdateInput={props.handler}
            listStyle={{
                maxHeight: 200,
                overflow: "auto"
            }}
        />
    );
};

export default SelectArea;
