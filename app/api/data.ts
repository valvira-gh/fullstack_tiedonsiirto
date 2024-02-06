// Mock-up data for the app1st phase of the project

/************************************ ******************'*****/
// Define the types of the data that will be used in the app
interface PostTypes {
    id: number | null;
    title: string | null;
    content: string | null;
    emotions: string[];
}

interface UserTypes {
    id: number;
    name: string;
    email: string;
    posts: PostTypes[];
}

// The data is is now defined as an array of objects
// and all the values are hardcoded, but in the future
// after we've learned all 4 CRUD operations in Next.js 14.3.0
//versoion from two to three different methods we'll use
// to fetch the data from the database to the server component,
// and so that we can utilize the best modern practices, we maneuver.
export const users: UserTypes[] = [
    {
        id: 1,
        name: "User 1",
        email: "user1@example.com",
        posts: [
            {
                id: 1,
                title: "First Post",
                content: "Yesterday, all my troubles seemed so far away.",
                emotions: ['nostalgia', 'longing']
            }
        ]
    },
    {
        "id": 2,
        "name": "User 2",
        "email": "user2@example.com",
        "posts": [
            {
                "id": 2,
                "title": "Second Post",
                "content": "Now it looks as though they're here to stay.",
                "emotions": ['realization', 'sadness']
            }
        ]
    },
    {
        "id": 3,
        "name": "User 3",
        "email": "user3@example.com",
        "posts": [
            {
                "id": 3,
                "title": "Third Post",
                "content": "Oh, I believe in yesterday.",
                "emotions": ['belief', 'nostalgia']
            }
        ]
    },
        {
            "id": 4,
            "name": "Jane Smith",
            "email": "mikset.osaa@kirjoittaaa.sahkopostia",
            "posts": [{
                "id": 4,
                "title": "Second Post",
                "content": "They say it's not a shame to come second. But it is. It really is. ",
                "emotions": ['disappointment', 'sadness'];
            }
        ]
   },
        {
            "id": 5,
            "name": "John Johnson",
            "email": "PYYSIN.SAHKOPOSTIT@MYOS.COM?",
            "posts": [ { "id": 5, "title": null, "content": "I uuhhhh.........I can't do this, I don't get enough...to....breath...LET MET OUT!!LET ME ouuuuuut......",
            "emotions": ['panic', 'fear'] }]
        },
];