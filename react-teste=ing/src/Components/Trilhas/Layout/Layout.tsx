import React from "react";
import { Grid } from './LayoutStyles';
import MainHeader from "../MainHeader/MainHeader";
import MainContent from "../MainContent/MainContent";
import MainFooter from "../MainFooter/Footer";
import Roadmap from "../RoadMap/RoadMap";

const Layout: React.FC = () => {
  return (
    <Grid>
      <MainHeader />
      <MainContent />
      <Roadmap />
      <MainFooter />
    </Grid>
  );
}

export default Layout;