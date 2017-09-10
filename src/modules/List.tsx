import * as React from "react";
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from "material-ui/Table";
import { Person } from "../interfaces/apiInterfaces";
import SelectArea from "../components/selectArea";

interface TableProps {
    area: number | null;
    handler: any;
}
/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
const TableExampleSimple = (props: TableProps) => {
    if (props.area) {
        // fetch people
        const people: Person[] = [];
        return (
            <div style={{ margin: "1em 2em" }}>
                <SelectArea handler={props.handler} />
                <Table>
                    <TableHeader
                        displaySelectAll={false}
                        adjustForCheckbox={false}
                    >
                        <TableRow>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Address</TableHeaderColumn>
                            <TableHeaderColumn>District</TableHeaderColumn>
                            <TableHeaderColumn>Status</TableHeaderColumn>
                            <TableHeaderColumn>Extra Info</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false} stripedRows={true}>
                        <TableRow>
                            <TableRowColumn>John Smith</TableRowColumn>
                            <TableRowColumn>123 Tester Lane</TableRowColumn>
                            <TableRowColumn>Watermelon</TableRowColumn>
                            <TableRowColumn>Safe</TableRowColumn>
                            <TableRowColumn>
                                What is life? Baby don't hurt me.
                            </TableRowColumn>
                        </TableRow>
                        {people.map(person => {
                            return (
                                <Row
                                    name={person.name}
                                    status={person.safe}
                                    address={person.district}
                                    extraInfo={person.extra_info}
                                />
                            );
                        })}
                    </TableBody>
                </Table>
            </div>
        );
    } else {
        return (
            <div style={{ margin: "1em 2em" }}>
                <SelectArea handler={props.handler} />
            </div>
        );
    }
};

interface OverviewPerson {
    name: string;
    address?: string;
    district?: string;
    status: boolean;
    extraInfo?: string;
}
const Row = (info: OverviewPerson) => {
    getPeople();
    return (
        <TableRow>
            <TableRowColumn>John Smith</TableRowColumn>
            <TableRowColumn>123 Tester Lane</TableRowColumn>
            <TableRowColumn>Watermelon</TableRowColumn>
            <TableRowColumn>Safe</TableRowColumn>
            <TableRowColumn>What is life? Baby don't hurt me.</TableRowColumn>
        </TableRow>
    );
};

const getPeople = async () => {
    // No error so safely post to api
    const response = await fetch(
        "http://lemuelboyce.pythonanywhere.com/api/v1/persons",
        {
            headers: {
                Authorization: "Token d4f017318b3bbd3127e0b44018cc9601f6337a31",
                Accept: "application/json",
                "Content-Type": "application/json",
                Origin: ""
            }
        }
    );

    console.log(response);
    console.log(response.json);
};

export default TableExampleSimple;
