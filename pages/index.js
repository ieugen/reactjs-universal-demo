"use strict";
import React from 'react'
import Layout from './layout'

export default class IndexPage extends React.Component {
    render() {
        return (
            <Layout title={this.props.title} >

                <h1>This is the index page</h1>

            </Layout>
        )
    }
}

