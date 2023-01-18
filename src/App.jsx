import react from 'react'
import { CssBaseline,Grid } from '@material-ui/core'

import Header from "./components/Header/Header"
import List from "./components/List/List"
import Map from "./components/Map/Map"
import PlaceDetails from "./components/PlaceDetails/PlaceDetails"

export default function App(){
    const gridContainerStyle={
        width:'100%'
    }
    return (
        <>
            <CssBaseline/>
            <Header/>
            <Grid container spacing={3} style={gridContainerStyle}>
                <Grid item xs={12} md={4}>
                    <List/>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map/>
                </Grid>
            </Grid>
        </>

    )
}
