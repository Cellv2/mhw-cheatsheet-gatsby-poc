import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
        <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
        <br />
        <Link to="/albums-page/">Go to "Albums Page"</Link>
        <br />
        <Link to="/weapons-page/">Go to "MHW Weapons Page"</Link>
        <br />
        <Link to="/armour-page/">Go to "MHW Armour Page"</Link>
        <br />
        <Link to="/monsters-page/">Go to "MHW Monsters Page"</Link>
    </Layout>
);

export default IndexPage;
