module.exports = {
    siteMetadata: {
        title: `Gatsby Default Starter`,
        description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
        author: `@gatsbyjs`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,

        {
            // Querying to a SQLite database
            resolve: `gatsby-source-sql`,
            options: {
                typeName: "Nirvana",
                // This is the field under which the data will be accessible in a future version
                fieldName: "chinook",
                dbEngine: {
                    client: "sqlite3",
                    connection: {
                        filename: "./data/Chinook_Sqlite.sqlite",
                    },
                    useNullAsDefault: true,
                },
                queryChain: function (x) {
                    return x
                        .select(
                            "Track.TrackId as TrackId",
                            "Track.Name as Track",
                            "Album.Title as Album",
                            "Genre.Name as Genre",
                            "Artist.Name as Artist"
                        )
                        .from("Track")
                        .innerJoin("Album", "Album.AlbumId", "Track.AlbumId")
                        .innerJoin(
                            "Artist",
                            "Artist.ArtistId",
                            "Album.ArtistId"
                        )
                        .innerJoin("Genre", "Genre.GenreId", "Track.GenreId")
                        .where("Artist.Name", "=", "Nirvana");
                },
            },
        },
    ],
};
