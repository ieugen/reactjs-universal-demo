import express from 'express';
import React from 'react';

import IndexPage from './pages/index'
import AboutPage from './pages/about'
import TablePage from './pages/table'

const router = express.Router();

router.get('/hello', (req, res, next) => {
    res.send('Hello');
});

router.get('/', (req, res) => {
    res.send( React.renderToStaticMarkup( <IndexPage title="Frontend Bucharest"/> ))
})

router.get('/un-tabel', (req, res) => {

    let dataFromDb = loadSomeDataSyncOrAsync();

    res.send(React.renderToStaticMarkup( <TablePage title="Date tabelare" data={dataFromDb} /> ));
})

router.get('/despre', (req, res) => {
    res.send(React.renderToStaticMarkup( <AboutPage title="Despre" /> ));
})


function loadSomeDataSyncOrAsync() {
    return [{
        name: "Frontent Bucharest este Osom !"
    }, {
        name: "La fel este și BJUG :D "
    }]
}


export default router;
