import React, {Component} from "react";

/**
 * ListComponent
 *
 * @description:
 * the list component is a component to list
 * various data in a table.
 *
 * it's possible to define filter and headings
 * to control which data should be displayed
 * int the list component.
 */
export default class List extends React.Component {
    constructor() {
        super();
    }

    /**
     * generates the headings of the table
     * @returns {XML} header-element
     */
    generateHeadings = () => {
        if (this.props.headings) {
            const headings = [];
            this.props.headings.forEach((heading, id) => {
                headings.push(<th key={id}>{heading}</th>);
            });
            return <tr>{headings}</tr>;
        }
    };

    /**
     * generates a list of data-entries.
     * for each element in the data-array a line will be generated
     * @returns {Array} list of data-entries
     */
    generateDataLines = () => {
        const {data, filter} = this.props;

        const dataLines = [];
        data.forEach((dataEntry, dataId) => {
            let dataLine = [], propId = 0;

            for (const property in dataEntry) {
                // check if property is a inherited or own property
                if (dataEntry.hasOwnProperty(property)) {
                    // check if a filter was set
                    if (filter) {
                        filter.forEach((filterEntry) => {
                            if (property == filterEntry) {
                                dataLine.push(<td key={propId}>{dataEntry[property]}</td>);
                            }
                        });
                    } else {
                        dataLine.push(<td key={propId}>{dataEntry[property]}</td>);
                    }
                }
                propId++;
            }

            dataLines.push(<tr key={dataId}>{dataLine}</tr>);
        });
        return dataLines;
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