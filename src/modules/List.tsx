import * as React from "react";
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from "material-ui/Table";
import { Person, PersonList } from "../interfaces/apiInterfaces";
import SelectArea from "../components/selectArea";

interface TableProps {
    area: number | null;
    handler: any;
}

interface State {
    people: Person[];
}

class TableList extends React.Component<TableProps, State> {
    constructor(props: TableProps) {
        super(props);
    }

    async componentDidMount() {
        const response = await fetch(
            "http://lemuelboyce.pythonanywhere.com/api/v1/persons",
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

        const json: PersonList = await response.json();

        this.setState({ people: json.results });
    }

    render() {
        if (this.props.area) {
            // fetch people
            return (
                <div style={{ margin: "1em 2em" }}>
                    <SelectArea handler={this.props.handler} />
                    {getTable(this.state.people)}
                </div>
            );
        } else {
            return (
                <div style={{ margin: "1em 2em" }}>
                    <SelectArea handler={this.props.handler} />
                </div>
            );
        }
    }
}

const getTable = (people: Person[]) => {
    return (
        <Table>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                <TableRow>
                    <TableHeaderColumn>Name</TableHeaderColumn>
                    <TableHeaderColumn>Address</TableHeaderColumn>
                    <TableHeaderColumn>District</TableHeaderColumn>
                    <TableHeaderColumn>Status</TableHeaderColumn>
                    <TableHeaderColumn>Extra Info</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false} stripedRows={true}>
                {people.map(person => {
                    return (
                        <TableRow key={`row-${person.id}`}>
                            <TableRowColumn>{person.name}</TableRowColumn>
                            <TableRowColumn>{person.address}</TableRowColumn>
                            <TableRowColumn>{person.district}</TableRowColumn>
                            <TableRowColumn>{person.safe}</TableRowColumn>
                            <TableRowColumn>{person.extra_info}</TableRowColumn>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
};

export default TableList;
