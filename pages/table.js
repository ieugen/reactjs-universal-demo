"use strict";
import React from 'react'
import Layout from './layout'

class ComunityList extends React.Component {

    renderRows(data) {
        return data.map((row, index) => {
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td className="show-for-medium-up">{row.name}</td>
                </tr>
            );
        })
    }

    render() {
        return (
            <table className="table large-12 columns">
                <caption>Lista de comunitati</caption>
                <thead>
                    <tr>
                        <th>Index</th>
                        <th className="show-for-medium-up">Site</th>
                    </tr>
                </thead>
                {this.renderRows(this.props.data)}
            </table> )
    }
}

export default class IndexPage extends React.Component {
    render() {
        return (
            <Layout title={this.props.title} >
                <div className="row">
                    <ComunityList data={this.props.data} />
                </div>
            </Layout>
        )
    }
}


