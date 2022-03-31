import {
  Container,
  Box,
  Grid,
  TextField,
  IconButton,
  List,
} from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const FriendAdd = (): JSX.Element => {
  const [Number, setNumber] = useState("");

  const SearchFriend = (event: ChangeEvent<HTMLInputElement>) => {
    const InputNumber = event.currentTarget.value;
  };
  return (
    <Container sx={{ p: 5 }}>
      <Box sx={{ background: "#f3f3f3", p: 3, borderRadius: "10px" }}>
        <Grid container>
          <Grid item xs={10.5}>
            <TextField fullWidth label="전화번호" onChange={SearchFriend} />
          </Grid>
          <Grid item xs={1.5}>
            <IconButton sx={{ p: 2 }}>
              <SearchIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
export default FriendAdd;
