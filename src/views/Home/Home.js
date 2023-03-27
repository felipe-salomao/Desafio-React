import React from "react"
import './Home.css'
import Navbar from '../../components/Navbar'
import Card from '../../components/Card'
import Box from '@mui/material/Box'

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Box sx={{
                display:"flex",
                justifyContent:"center",
                marginTop:"100px",
                gap:"100px"
            }}>
                <Card title={"Mona Lisa T-Shirt"} alt={"Mona Lisa T-Shirt"} img={"https://img.ltwebstatic.com/images3_pi/2022/02/24/16456980225809c55c3d6ae325e8360da864a4a59a_thumbnail_600x.webp"}/>
                <Card title={"Ninja Philosophers T-Shirt"} alt={"Ninja Philosophers T-Shirt"} img={"https://img.ltwebstatic.com/images3_pi/2022/04/24/1650786507fa4bba9016256c628ea208b7220e4cf6_thumbnail_600x.webp"}/>
                <Card title={"Car T-Shirt"} alt={"Car T-Shirt"} img={"https://img.ltwebstatic.com/images3_pi/2022/02/28/16460367956465460a0d3d5793d8447f01b242a5dd_thumbnail_600x.webp"}/>
            </Box>
        </div>
        
    )
}

export default Home