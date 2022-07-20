export const mockData = {
    photos: [
    {
        id: 1,
        attributes: {
            name:"Dolphin Doing Flips",
            image_url: "",
        },
    },
  ],

  subjects: [
  {
    id: 1,
    attributes: {
        name: "Rocket Scientist Johnson",
        image_url: "",
    },
    relationships: {
        photo: {
            data: {
                id:1,
            },
        },
        targetBox: {
            top: 111,
            bottom: 0,
            left: 0,
            right: 72,
        }
     },
   },
  ],

  targetBoxes: [
  {
    id:1,
    attributes: {
        top: 111,
        bottom: 0,
        left: 0,
        right: 72,
      },
      relationships: {
        subject: {
            data: {
                id: 1,
            },
        },
      },
    },
  ],

  scores: [
  {
    attributes: {
        time: 111,
        initials: "ABC"
    }
  },
  {
    attributes: {
        time: 155,
        initials: "DEF"
    }
  },
  {
    attributes: {
        time: 188,
        initials: "GHI"
    }
  },
  {
    attributes: {
        time: 220,
        initials: "JKL"
    }
  },
 ]
};