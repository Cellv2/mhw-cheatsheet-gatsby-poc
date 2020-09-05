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
        {
            // Querying to a SQLite database
            resolve: `gatsby-source-sql`,
            options: {
                typeName: "MhwWeaponData",
                // This is the field under which the data will be accessible in a future version
                fieldName: "mhwWeaponData",
                dbEngine: {
                    client: "sqlite3",
                    connection: {
                        filename: "./data/mhw.db",
                    },
                    useNullAsDefault: true,
                },
                // SELECT weapon.id, weapon_type, weapon_text.name AS WeaponName, lang_id
                // FROM weapon
                // INNER JOIN weapon_text ON weapon_text.id = weapon.id
                // WHERE weapon_text.lang_id = "en"
                queryChain: function (x) {
                    return x
                        .select(
                            "weapon.id as WeaponId",
                            "weapon_type as WeaponType",
                            "weapon_text.name as WeaponName",
                            "lang_id as LangId"
                        )
                        .from("weapon")
                        .innerJoin("weapon_text", "weapon_text.id", "weapon.id")
                        .where("weapon_text.lang_id", "=", "en");
                },
            },
        },
        {
            // Querying to a SQLite database
            resolve: `gatsby-source-sql`,
            options: {
                typeName: "MhwArmourData",
                // This is the field under which the data will be accessible in a future version
                fieldName: "mhwArmourData",
                dbEngine: {
                    client: "sqlite3",
                    connection: {
                        filename: "./data/mhw.db",
                    },
                    useNullAsDefault: true,
                },
                // SELECT armor.id, armor_type, armor_text.name AS armorName, lang_id
                // FROM armor
                // INNER JOIN armor_text ON armor_text.id = armor.id
                // WHERE armor_text.lang_id = "en"
                queryChain: function (x) {
                    return x
                        .select(
                            "armor.id as ArmourId",
                            "armor_type as ArmourType",
                            "armor_text.name as ArmourName",
                            "lang_id as LangId"
                        )
                        .from("armor")
                        .innerJoin("armor_text", "armor_text.id", "armor.id")
                        .where("armor_text.lang_id", "=", "en");
                },
            },
        },
        {
            // Querying to a SQLite database
            resolve: `gatsby-source-sql`,
            options: {
                typeName: "MhwMonsterData",
                // This is the field under which the data will be accessible in a future version
                fieldName: "mhwMonsterData",
                dbEngine: {
                    client: "sqlite3",
                    connection: {
                        filename: "./data/mhw.db",
                    },
                    useNullAsDefault: true,
                },
                // SELECT
                //     monster.id,
                //     size,
                //     monster_text.name,
                //     monster_text.lang_id AS MonsterLangId,
                //     monster_text.description,
                //     location_text.name,
                //     location_text.lang_id AS LocationLangId,
                //     monster_habitat.start_area,
                //     monster_habitat.move_area,
                //     monster_habitat.rest_area
                // FROM monster
                // INNER JOIN monster_text ON monster_text.id = monster.id
                // INNER JOIN monster_habitat ON monster_habitat.monster_id = monster.id
                // INNER JOIN location_text ON location_text.id = monster_habitat.location_id
                // WHERE monster_text.lang_id = "en"  AND location_text.lang_id = "en"
                queryChain: function (x) {
                    return x
                        .select(
                            "monster.id AS MonsterId",
                            "size AS MonsterSize",
                            "monster_text.name AS MonsterName",
                            "monster_text.lang_id AS MonsterLangId",
                            "monster_text.description AS MonsterDescription",
                            "location_text.name AS LocationName",
                            "location_text.lang_id AS LocationLangId",
                            "monster_habitat.start_area AS MonsterStartArea",
                            "monster_habitat.move_area AS MonsterMoveArea",
                            "monster_habitat.rest_area AS MonsterRestArea",
                        )
                        .from("monster")
                        .innerJoin("monster_text", "monster_text.id", "monster.id")
                        .innerJoin("monster_habitat", "monster_habitat.monster_id", "monster.id")
                        .innerJoin("location_text", "location_text.id", "monster_habitat.location_id")
                        .where("monster_text.lang_id", "=", "en")
                        .where("location_text.lang_id", "=", "en")
                },
            },
        },
    ],
};
