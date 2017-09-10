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
import Pagination from "material-ui-pagination";

interface TableProps {
    area: number | null;
    handler: any;
}

interface State {
    page: number;
    pages: { people: Person[] }[];
    total: number;
}

class TableList extends React.Component<TableProps, State> {
    constructor(props: TableProps) {
        super(props);

        this.pageHandler = this.pageHandler.bind(this);
    }

    async componentWillMount() {
        let uri = "https://lemuelboyce.pythonanywhere.com/api/v1/persons";

        const response = await fetch(uri, {
            headers: {
                Authorization: "Token d4f017318b3bbd3127e0b44018cc9601f6337a31",
                Accept: "application/json",
                "Content-Type": "application/json",
                Origin: ""
            }
        });

        const json: PersonList = await response.json();

        const allPeople = json.results;

        const people = [...allPeople];

        const pages = [{ people }];

        const total = Math.ceil(json.count / 25);

        for (let i = 1; i < total - 1; i++) {
            pages.push({ people: [] });
        }

        this.setState({ total, page: 1, pages });
    }

    getPeople = async (pageNumber: number): Promise<Person[]> => {
        let uri =
            "https://lemuelboyce.pythonanywhere.com/api/v1/persons?page=" +
            pageNumber;

        const response = await fetch(uri, {
            headers: {
                Authorization: "Token d4f017318b3bbd3127e0b44018cc9601f6337a31",
                Accept: "application/json",
                "Content-Type": "application/json",
                Origin: ""
            }
        });

        const json: PersonList = await response.json();

        const people = json.results;

        return people;
    };

    pageHandler = async (number: number) => {
        const newPageNumber = number;
        const index = newPageNumber - 1;
        let people = await this.getPeople(newPageNumber);
        const copyPagesState = this.state.pages.splice(0);
        copyPagesState[index] = { people };
        this.setState({ page: newPageNumber, pages: copyPagesState });
    };
    render() {
        if (this.props.area && this.state) {
            // fetch people
            return (
                <div style={{ margin: "1em 2em" }}>
                    <SelectArea handler={this.props.handler} />
                    {getTable(this.state.pages[this.state.page - 1].people)}
                    <div style={{ textAlign: "center" }}>
                        <Pagination
                            total={this.state.total}
                            display={10}
                            current={this.state.page}
                            onChange={this.pageHandler}
                        />
                    </div>
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
    const styles = {
        tableRowColumn: {
            whiteSpace: "normal",
            wordWrap: "break-word"
        }
    };
    return (
        <Table height="70vh">
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
                            <TableRowColumn style={styles.tableRowColumn}>
                                <span>{person.name}</span>
                            </TableRowColumn>
                            <TableRowColumn style={styles.tableRowColumn}>
                                <span>{person.address}</span>
                            </TableRowColumn>
                            <TableRowColumn style={styles.tableRowColumn}>
                                <span>{person.district}</span>
                            </TableRowColumn>
                            <TableRowColumn style={styles.tableRowColumn}>
                                <span>{person.safe}</span>
                            </TableRowColumn>
                            <TableRowColumn style={styles.tableRowColumn}>
                                <span>{person.extra_info}</span>
                            </TableRowColumn>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
};

export default TableList;
