import React, {Component} from 'react';
import TableRow from './TableRow';

class Table extends Component {
    render() {

        return(
            <React.Fragment>
        <table>
        <thead>
            <tr>
                <th>Namn</th>
                <th>Jobb</th>
            </tr>
        </thead>
        <tbody>
            <TableRow/>
            <TableRow/>
            <TableRow/>
            <TableRow/>
        </tbody>
        </table>
        </React.Fragment>
        )
    }
}

export default Table;