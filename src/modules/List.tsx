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

interface TableProps {
    area: number | null;
}
/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
const TableExampleSimple = (props: TableProps) => {
    if (props.area) {
        // fetch people
        const people: Person[] = [];
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
        );
    } else {
        return <div>Select An Area in Home first!</div>;
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

export default TableExampleSimple;
