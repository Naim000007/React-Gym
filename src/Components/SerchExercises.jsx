import React from "react";
import { useEffect, useState } from "react";
import { Button, Box, Typography, TextField, Stack } from "@mui/material";

function SerchExercises() {
    const [search , setSearch] = useState('');
    const handleSearch = async ()=>{
        if(search){
            // const exercisesData = await fetchData();
        }
    }
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
            width: {lg: '800px', xs:'350px', background:'#fff', borderRadius:"2.5rem"}
        }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search  Exercises"
          type="text"
        />
        <Button className="search-btn"  sx={{bgcolor:'#FF2625',color:'#fff', textTransform:'none', width:{lg:'175px', xs:'80px'}, fontSize:{lg:'20px', xs:'25px'} ,height: '56px', position:"absolute", right:'0'}}
        onClick={handleSearch} >
             Search
        </Button>
      </Box>
    </Stack>
  );
}

export default SerchExercises;
