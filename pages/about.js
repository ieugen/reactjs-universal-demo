"use strict";
import React from 'react'
import Layout from './layout'

export default class IndexPage extends React.Component {

    render() {
        return (
            <Layout title={this.props.title} >
                <h1> Despre mine </h1>

                <p>
                    Sunt consultant IT, trainer pe tehnologie (Java, Linux, Node.js în curând )
                </p>

            </Layout>
        )
    }
}

