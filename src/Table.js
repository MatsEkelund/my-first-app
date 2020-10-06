import React, {Component} from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';

class Table extends Component {
    render() {
        const {characterData} = this.props;
        return(
            <React.Fragment>
            <table>
                    <TableHead/>
                    <TableBody characterData = {characterData}/>
            </table>
        </React.Fragment>
        )
    }
}

export default Table;