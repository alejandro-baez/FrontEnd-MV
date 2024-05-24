import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { fetchData, exerciseOptions } from "../utils/fetchData";

const SearchExercises = ({ setExercises }) => {
  const [search, setSearch] = useState("");
//   const [exercises, setExercises] = useState([]);

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises?limit=20",
        exerciseOptions
      );

      const searchedExercises = await exerciseData.filter(
        (exercise) =>
          exercise.name.includes(search.toLowerCase()) ||
          exercise.equipment.includes(
            search.toLowerCase() ||
              exercise.bodyPart.includes(search.toLowerCase())
          )
      );
      setSearch("");
      setExercises(searchedExercises);
    }
  };
  return (
    <Stack alignContent="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box textAlign="center" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          variant="contained"
          sx={{
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            height: "56px",
            position: "absolute",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
