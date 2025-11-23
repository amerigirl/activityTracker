import type { JSXElement } from "@fluentui/react-components";
import React from "react";
import {
  makeStyles,
  Body1,
  Caption1,
  Button,
  Card,
  CardFooter,
  CardHeader,
  CardPreview,
} from "@fluentui/react-components";


const useStyles = makeStyles({

  card: {
    margin: "auto",
    width: "720px",
    maxWidth: "100%",
  },

})

export const BasicCard = (): JSXElement =>{
 
const classes = useStyles();


 return (
<Card className={classes.card} >
<CardHeader />

</Card>

 )

}