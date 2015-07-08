"use strict";

import React from "react";

export default class Layout extends React.Component {

    static propTypes: {
        title: React.PropTypes.string
    }

    render() {
        return (
            <html>
                <head>
                  <title>{this.props.title}</title>
                  <meta charSet="utf-8"/>
                  <link rel="stylesheet" href="public/style.css" />
                </head>
                <body>

                    <nav>
                        <ul>
                            <li> <a href="/"> Acasă</a></li>
                            <li> <a href="/un-tabel">Un tabel</a></li>
                            <li> <a href="/despre">Despre</a></li>
                        </ul>
                    </nav>
                  {this.props.children}
                </body>
              </html>
        );
    }
}


