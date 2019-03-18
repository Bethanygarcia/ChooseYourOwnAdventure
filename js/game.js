
// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "Its another heavy rain kind of day and you pick up your son Shawn from after school.",
            choices: [
                {
                    text: "Go straight home.",
                    nextLevel: "home",
                },

                {
                    text: "Offer to go to the park.",
                    nextLevel: "park",
                },
            ]
        },

        home: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You arrive home and there is mail all over the place again.",
            choices: [
                {
                    text: "Go through the mail.",
                    nextLevel: "news",
                },
                {
                    text: "Make Shawn something to eat and help him with his homework.",
                    nextLevel: "bedroom",
                },
            ]
        },
        news: {
          message: "You are going through your meal and there is a newsletter that reads, 'Origami Killer Strikes Again!' ",
          choices: [
              {
                text: "I don't think I have to worry about that.",
                nextLevel: "gone",
              },
              {
                  
              },
              ]
        },
        park: {
            message: "Some adventurer you are...",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

    }
};
