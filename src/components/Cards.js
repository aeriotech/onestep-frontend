import React, { useState, useEffect } from 'react';

import {
    Button,
    Badge
} from 'reactstrap';

import discord_logo from '../assets/img/icons/Discord-Logo-White.svg'
import { API_URL as url } from '../api/config.json';

export function LoginCard() {
    return (
        <div className="os-login-card d-flex flex-column justify-content-center align-content-center align-items-center">
            <h1 className="os-login-title">
                Prijava
            </h1>

            <div className="">
                <Button
                    color="primary"
                    className="os-login-button"
                    href="https://api.onestep.si/connect/discord"
                >
                    <img
                        alt="Discord logo"
                        src={ discord_logo }
                        height="30px"
                    />
                    {"  "}
                    LOGIN WITH DISCORD
                </Button>
            </div>
        </div>
    );
}

export function PostCard(props) {

    const { postData } = props;

    const [post, setPost] = useState({});

    useEffect(() => setPost(postData), [postData]);

    useEffect(() => console.log(post.tags), [post])

    const pushToPost = () => {
        window.location.replace(`./post/${post.id}`)
    }

    return (
        <div
            className="os-post-card disable-select"
            onClick={ pushToPost }
        >
            <img
                alt="post-media"
                src={url + post.image}
                className="os-post-card-image"
            />
            <div className="d-flex flex-column align-items-center justify-content-center os-post-card-content">
                <h3 className="text-white">
                    {
                        post.title ?
                            post.title.length > 24 ?
                                post.title.substring(0, 21) + '...' : post.title
                            :
                            'No title'
                    }
                </h3>
                <p className="text-white"> { post.content ?  post.content.substring(0, 95)  + '...' : 'No content' } </p>
            </div>

        </div>
    );
}

export function ProfileCard() {
    return (
        <div>

        </div>
    );
}

