import {
  Avatar,
  IconButton,
  Container,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  TextField,
} from "@mui/material";
import React, { ChangeEvent, useState, useEffect } from "react";
import ImageIcon from "@mui/icons-material/Image";
import { friends } from "./data";
import { Box } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Grid } from "@mui/material";
import FriendAdd from "./components/FriendAdd";
import { Modal } from "@mui/material";
import axios from "axios";

type FriendType = {
  id: number;
  name: string;
  statusMessage: string;
};

const Friends = (): JSX.Element => {
  const [name, setName] = useState(friends);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [originalFriends, setOriginalFriends] = useState<FriendType[]>([]);
  const [friendList, setFriendList] = useState<FriendType[]>([]);
  const changeSearchText = (event: ChangeEvent<HTMLInputElement>) => {
    const inputText = event.currentTarget.value;
    if (inputText.length == 0) {
      setFriendList(friends);
    } else {
      const filteredFriends = originalFriends.filter((friend) =>
        friend.name.includes(inputText)
      );
      setFriendList(filteredFriends);
    }
  };

  const getFriendList = async () => {
    const { data } = await axios.get<FriendType[]>(
      "http://localhost:5000/friends/1"
    );
    setOriginalFriends(data);
    setFriendList(data);
  };

  useEffect(() => {
    getFriendList();
  }, []);

  return (
    <Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <FriendAdd />
      </Modal>
      <Box>
        <Grid container>
          <Grid item xs={10.5}>
            <TextField
              label="친구 검색"
              variant="outlined"
              fullWidth
              margin="dense"
              onChange={changeSearchText}
            />
          </Grid>
          <Grid item xs={1.5}>
            <Box sx={{ p: "8px" }}>
              <IconButton color="primary" size="large" onClick={handleOpen}>
                <PersonAddIcon fontSize="large" />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <List>
        <section>
          {name.map((friend) => {
            return (
              <section key={friend.id}>
                <ListItemButton>
                  <ListItemAvatar>
                    <Avatar>
                      <ImageIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={friend.name}
                    secondary={friend.statusMessage}
                  />
                </ListItemButton>
              </section>
            );
          })}
        </section>
      </List>
    </Container>
  );
};

export default Friends;
