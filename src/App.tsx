import React, { useState } from "react";
import "./App.css";
import { Box } from "@mui/system";
import { Tabs, Paper, Tab } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import MessageIcon from "@mui/icons-material/Message";
import Friends from "./pages/Friends";

const App = (): JSX.Element => {
  const [CurrentTab, setCurrentTab] = useState<string>("friends");

  const ChangeTab = (changedValue: string) => {
    setCurrentTab(changedValue);
  };

  return (
    <section>
      <Box sx={{ pb: 7 }}>{CurrentTab === "friends" && <Friends />}</Box>

      <Paper
        sx={{ position: "fixed", bottom: 0, right: 0, left: 0 }}
        elevation={3}
      >
        <Tabs centered variant="fullWidth" value={CurrentTab}>
          <Tab
            icon={<GroupIcon />}
            label="친구"
            value={"friends"}
            onClick={() => ChangeTab("friends")}
          />
          <Tab
            icon={<MessageIcon />}
            label="채팅"
            value={"chats"}
            onClick={() => ChangeTab("chats")}
          />
        </Tabs>
      </Paper>
    </section>
  );
};

export default App;
