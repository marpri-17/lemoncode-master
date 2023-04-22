import React from "react";
import { AppBar, List, Toolbar, ListItem } from "@mui/material";
import { Link } from "react-router-dom";

export const HeaderComponent: React.FC = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <nav aria-label="navigation header" style={{ flexGrow: 1 }}>
          <List className="header-list">
            <ListItem
              component={Link}
              to={"/github"}
              className="header-list-github"
            >
              Github
            </ListItem>
            <ListItem
              component={Link}
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
