import React from "react";
import { AppBar, Link, List, Toolbar } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";

export const HeaderComponent: React.FC = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <nav aria-label="navigation header" style={{ flexGrow: 1 }}>
          <List className="header-list">
            <ListItem
              component={RouterLink}
              to={"/github"}
              className="header-list-github"
            >
              Github
            </ListItem>
            <ListItem
              component={RouterLink}
              to={"/rickandmorty"}
              className="header-list-rickandmorty"
            >
              Rick & Morty
            </ListItem>
          </List>
        </nav>
      </Toolbar>
    </AppBar>
  );
};
