import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Typography,
  CardMedia,
  CardContent,
  Button,
  CardActionArea,
} from "@mui/material";
import { routes } from "@core/router/routes";

export interface CardConfig {
  image: string;
  title: string;
  id?: string;
  mainListUrl?: string;
  actionLabel: string;
}

interface Props {
  config: CardConfig;
}

export const GenericCard: React.FC<Props> = (props) => {
  const { image, title, id, mainListUrl, actionLabel } = props.config;
  return (
    <Card key={id || title} sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={image} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Character
        </Typography>
        <CardActionArea>
          <Button component={Link} to={mainListUrl || routes.root}>
            {actionLabel}
          </Button>
        </CardActionArea>
      </CardContent>
    </Card>
  );
};
