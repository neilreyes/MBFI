import Head from "next/head";
import { Component } from "react";
import { attributes, react as HomeContent } from "../content/home.md";

export default class Home extends Component {
    render() {
        let { title } = attributes;

        return (
            <>
                {console.log(attributes)}
                <Head>
                    <link
                        href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'
                        rel='stylesheet'
                        integrity='sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC'
                        crossorigin='anonymous'></link>
                    <script src='https://identity.netlify.com/v1/netlify-identity-widget.js'></script>
                </Head>
                <article>
                    <h1>{title}</h1>
                    <div className='container'>
                        <HomeContent />
                    </div>
                </article>
            </>
        );
    }
}
