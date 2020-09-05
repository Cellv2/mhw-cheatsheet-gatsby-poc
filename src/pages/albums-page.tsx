import React from "react";
import { PageProps, Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

type Props = {};

type DataProps = {
    site: {
        buildTime: string;
    };
    allNirvana: { [key: string]: any };
};

const AlbumsPage: React.FC<PageProps<DataProps>> = ({ data, path }) => {
    return (
        <Layout>
            <SEO title="Albums" />
            <h1>Albums from SQLite</h1>
            <table>
                <thead>
                    <tr>
                        <th>Track</th>
                        <th>Artist</th>
                    </tr>
                </thead>
                <tbody>
                    {data.allNirvana.edges.map(({ node }) => (
                        <tr key={`track-${node.TrackId}`}>
                            <td>{node.Track}</td>
                            <td>{node.Artist}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/">Go to home page</Link>
        </Layout>
    );
};
export default AlbumsPage;

export const query = graphql`
    {
        site {
            buildTime(formatString: "YYYY-MM-DD hh:mm a z")
        }
        allNirvana(sort: { fields: [Artist], order: ASC }) {
            edges {
                node {
                    id
                    TrackId
                    Track
                    Artist
                    Album
                    Genre
                }
            }
        }
    }
`;
