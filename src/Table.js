import React, {Component} from 'react';
import TableRow from './TableRow';
import TableHead from './TableHead';

class Table extends Component {
    render() {

        return(
            <React.Fragment>
            <table>
                    <TableHead/>
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