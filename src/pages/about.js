import React from 'react';
import About from '../components/About/About';
import Layout from '../components/Layout/Layout';

function about(props) {
    return (
        <div>
            <Layout>
                <About />
            </Layout>
        </div>
    );
}

export default about;