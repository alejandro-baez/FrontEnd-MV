import React, { useState } from "react";
import { Box } from "@mui/material";

import Exercises from "../components/Exercises";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises setExercises={setExercises} />
      <Exercises setExercises={setExercises} exercises={exercises}/>
    </Box>
  );
};

export default Home;
