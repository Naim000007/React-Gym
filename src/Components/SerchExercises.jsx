import React from "react";
import { useEffect, useState } from "react";
import { Button, Box, Typography, TextField, Stack } from "@mui/material";
import { exerciseOptions, fetchData } from "../Utils/FetchData";
import HorizontalScrollbar from '../Components/HorizontalScrollbar'

function SerchExercises() {
  const [search, setSearch] = useState("");
  const [exercises, setExercises] =useState([]);
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(()=>{
    const fetchExercisesData = async ()=>{
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
      setBodyParts(['all', ...bodyPartsData])
    }
    fetchExercisesData();

  },[])

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPart/chest?limit=1300",
        exerciseOptions
      );
      console.log(exercisesData);

      const searchExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch('');
      setExercises(searchExercises);
    }
  };
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises for you <br /> should know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: {
              lg: "800px",
              xs: "350px",
              background: "#fff",
              borderRadius: "2.5rem",
            },
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search  Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "25px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{position: 'relative', width:'100%', p:'20px'}}>
        <HorizontalScrollbar data={bodyParts}/>
      </Box>
    </Stack>
  );
}

export default SerchExercises;
