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
  Body1Strong,
} from "@fluentui/react-components";


const useStyles = makeStyles({

  card: {
    margin: "auto",
    width: "720px",
    maxWidth: "100%",
  },

})

export const BasicCard = (): JSXElement => {

  const classes = useStyles();
  //card: has a details click to open a popover that gives more info
  /**card has: 
   * 1. an image of the activity
   * 2. the activity name
   * 3. a details button --> popup
   * 4. completed --> make a checkbox
   * 5. fun letters
   * 6. soft colors-->andom color array chosen randomly 
   */
  const cardData =
    [
      {
        activity: "In a good book",
        image: '',

      },
      {
        activity: "Study Time",
        image: '',

      }, {
        activity: "Learn Something",
        image: '',

      }, {
        activity: "Rest and Rejuvenate",
        image: '',

      }, {
        activity: "The Big Er(rands!)",
        image: '',

      }, {
        activity: "Clean and Sing",
        image: '',

      },

    ]
//when the card gets clicked, theres a popup--nums 1-6 
  return (
    <div>
      {cardData.map((card, idx) => {

        return (
          <Card role="button" className={classes.card} key={idx}>
            <Body1Strong>
              {card.activity}
            </Body1Strong>
            <CardPreview />
          </Card>
        )
      })}


    </div>

  )
}

