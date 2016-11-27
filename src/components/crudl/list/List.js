import React, {Component} from 'react';

export default class List extends React.Component {
    constructor() {
        super();
    }

    generateHeadings = () => {
        if (!!this.props.headings) {
            const headings = [];
            for (let i = 0; i < this.props.headings.length; i++) {
                headings.push(<th key={i}>{this.props.headings[i]}</th>);
            }
            return <tr>{headings}</tr>;
        }
    };

    generateDataLines = () => {
        if (!!this.props.filter) {
            const dataLines = [];
            for (let i = 0; i < this.props.data.length; i++) {
                const data = [];
                for (let j = 0; j < this.props.filter.length; j++) {
                    for (const property in this.props.data[i]) {
                        if (this.props.data[i].hasOwnProperty(property)) {
                            if (property == this.props.filter[j]) {
                                data.push(<td key={j}>{this.props.data[i][property]}</td>);
                            }
                        }
                    }
                }
                dataLines.push(<tr key={i}>{data}</tr>);
            }
            return dataLines;
        }
    };

    render() {
        return (
            <div>
                <h1>List</h1>
                <table className="table">
                    <tbody>
                    { this.generateHeadings() }
                    { this.generateDataLines() }
                    </tbody>
                </table>
            </div>
        );
    }
}

List.propTypes = {
    // data which should be displayed
    data: React.PropTypes.array.isRequired,
    // filter data which should be displayed
    filter: React.PropTypes.array,
    // set the headings of the columns
    headings: React.PropTypes.array
};