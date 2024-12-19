import React from "react";
import GlobalStyles from "../../Styles/GlobalStyles";
import { ThemeProvider }  from 'styled-components'; 
import light from "../../Styles/themes/light";


import Layout from "../../Components/Trilhas/Layout/Layout";

const Trilhas: React.FC = () => {
    return (
        <ThemeProvider theme={light}>

                <GlobalStyles />
                <Layout />
    
        </ThemeProvider>
    );
}

export default Trilhas