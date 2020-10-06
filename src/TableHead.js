import { render } from '@testing-library/react';
import React, {Component} from 'react';

class TableHead extends Component {
    render() {
        return(
            <thead>
            <tr>
                <th>Förnamn</th>
                <th>Jobb</th>
            </tr>
            </thead>
        );
    }
}

export default TableHead;