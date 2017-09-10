import * as React from "react";
import AutoComplete from "material-ui/AutoComplete";

interface Props {
    handler: any;
}

// TODO: fetch arealist
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

const SelectArea = (props: Props) => {
    return (
        <AutoComplete
            hintText="Enter Area"
            filter={AutoComplete.caseInsensitiveFilter}
            openOnFocus={true}
            dataSource={dataSource}
            onUpdateInput={props.handler}
            listStyle={{
                maxHeight: 120,
                overflow: "auto",
                fontSize: "0.7em"
            }}
        />
    );
};

export default SelectArea;
