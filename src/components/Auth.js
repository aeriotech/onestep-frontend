import React from 'react';
import axios from 'axios';

// reactstrap components
import {
    Container
} from 'reactstrap';

import { authDiscord } from '../api/api.onestep';

import qs from 'qs';

export default function Authing(props) {

    function getAccessToken() {
        return qs.parse(props.location.search, { ignoreQueryPrefix: true }).access_token;
    }

    const access_token = getAccessToken();
    console.log(access_token);

    authDiscord(access_token)
        .then(r => {
            const user = r.data;
            console.log(user);

            localStorage.setItem('jwt', user.jwt);
            axios.defaults.headers.common['authorization'] = `Bearer ${user.jwt}`

            localStorage.setItem('access_token', access_token);


            window.location.replace('/');
        })

    return (
        <>
            <main className="os-bg-sec">
                <div className="position-relative">
                    <section className="section section-lg section-shaped pb-250">
                        <Container className="d-flex align-items-center flex-column">
                            <h1 className="display-3 text-white">
                                Authenticating
                            </h1>
                        </Container>
                    </section>
                </div>
            </main>
        </>
    );
}