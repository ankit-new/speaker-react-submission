import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  Avatar,
  IconButton,
  TextField,
  Button,
  Box,
  Typography,
  Card,
  Checkbox,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import speakers from "../assets/speakers";

function AddSpeakerSidebar({ open, onClose }) {
  const [selectedSpeakers, setSelectedSpeakers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleCheckboxChange = (speakerName) => {
    setSelectedSpeakers((prevSelected) =>
      prevSelected.includes(speakerName)
        ? prevSelected.filter((name) => name !== speakerName)
        : [...prevSelected, speakerName]
    );
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredSpeakers = speakers.filter(
    (speaker) =>
      speaker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      speaker.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          borderTopLeftRadius: "12px",
          borderBottomLeftRadius: "12px",
          height: "100vh",
        },
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: 600 },
          bgcolor: "#ffffff",
          height: "100%",
        }}
      >
        <Box
          sx={{
            height: 45,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
            mb: 2,
            background: "#F6F8F8",
          }}
        >
          <Typography
            variant="h6"
            component="p"
            sx={{
              fontWeight: 600,
              fontSize: 16,
              color: "#202020",
              width: "auto",
            }}
          >
            Add Speaker
          </Typography>

          <IconButton onClick={onClose} sx={{ width: 20, height: 20 }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <TextField
            variant="outlined"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            InputProps={{
              startAdornment: (
                <Box sx={{ display: "flex", alignItems: "center", mr: 1 }}>
                  <img src="/search.png" alt="search" />
                </Box>
              ),
            }}
            sx={{
              width: { xs: "90%", sm: 552 },
              height: 42,
              borderRadius: "12px",
              border: "1px solid #E9E9E9",
              "& .MuiOutlinedInput-root": {
                borderRadius: "inherit",
                height: "100%",
                padding: "0 16px",
                display: "flex",
              },
              "& .MuiOutlinedInput-input": {
                padding: 0,
              },
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            overflowY: "auto",
            height: "calc(100% - 260px)",
            mb: 2,
          }}
        >
          <List>
            {filteredSpeakers.map((speaker, index) => {
              const isChecked = selectedSpeakers.includes(speaker.name);
              return (
                <ListItem
                  key={index}
                  disableGutters
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginLeft: 1,
                  }}
                >
                  <Card
                    sx={{
                      width: { xs: "100%", sm: 552 },
                      height: 122,
                      borderRadius: "12px",
                      border: isChecked
                        ? "1px solid #4CBB3E"
                        : "1px solid #E9E9E9",
                      gap: "8px",
                      mb: 1,
                      boxShadow: "none",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "top",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "between",
                          p: 3,
                        }}
                      >
                        <Box>
                          <Avatar
                            sx={{ height: 48, width: 48 }}
                            src="/broken-image.jpg"
                          />
                        </Box>
                        <Box sx={{ marginLeft: 2 }}>
                          <Box sx={{ margin: 0 }}>
                            <Typography
                              sx={{
                                margin: 0,
                                fontWeight: "bold",
                                fontSize: 16,
                                color: "#373F66",
                              }}
                            >
                              {speaker.name}
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: 14,
                                color: "#717693",
                                fontWeight: 400,
                                lineHeight: 2,
                              }}
                            >
                              {speaker.role}
                              <Box component="span" sx={{ mx: 2,color:"#E9E9E9" }}>
                                |
                              </Box>
                              {speaker.organization}
                            </Typography>

                            <Typography
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                color: "#E4875D",
                                fontSize: 14,
                                lineHeight: 2,
                                gap: 0.5,
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h6.525q.5 0 .75.313t.25.687t-.262.688T11.5 5H5v14h14v-6.525q0-.5.313-.75t.687-.25t.688.25t.312.75V19q0 .825-.587 1.413T19 21zm4-7v-2.425q0-.4.15-.763t.425-.637l8.6-8.6q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4t-.137.738t-.438.662l-8.6 8.6q-.275.275-.637.438t-.763.162H10q-.425 0-.712-.288T9 14m12.025-9.6l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"
                                />
                              </svg>
                              Edit Speaker
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                        <Checkbox
                          sx={{
                            color: "gray",
                            "&.Mui-checked": {
                              color: "#4CBB3E",
                            },
                          }}
                          checked={isChecked}
                          onChange={() => handleCheckboxChange(speaker.name)}
                        />
                      </Box>
                    </Box>
                  </Card>
                </ListItem>
              );
            })}
          </List>
        </Box>

        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            bgcolor: "#fff",
            py: 3,
            px: 3,
            width: 552,
            borderTop: "1px solid #E9E9E9",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Button
              disabled={selectedSpeakers.length === 0}
              variant="contained"
              sx={{
                marginRight: "10px",
                color: "#FFFFFF",
                borderColor: "#4CBB3E",
                textTransform: "none",
                background: "#E4875D",
                borderRadius: 2,
              }}
            >
              Add
            </Button>
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                background: "#FCF3EF",
                color: "#E4875D",
                borderRadius: 2,
                boxShadow:"none"
              }}
            >
              Cancel
            </Button>
          </Box>

          <Box>
            <Button
              variant="text"
              sx={{
                color: "#E4875D",
                textTransform: "none",
              }}
            >
              Create a Speaker
            </Button>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
}

export default AddSpeakerSidebar;
