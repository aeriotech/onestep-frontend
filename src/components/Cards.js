import React, { useState, useEffect } from 'react';

import {
    Button
} from 'reactstrap';

import discord_logo from '../assets/img/icons/Discord-Logo-White.svg'
import { API_URL as url } from '../api/config.json';
import {getAbout} from "../api/api.onestep";
import {Divider} from "@material-ui/core";

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

export function AboutCard() {

    const [about, setAbout] = useState();

    useEffect(() => {
        async function fetchAbout() {
            const res = await getAbout();

            try {
                const content = res.data;

                setAbout(content.content);
            } catch (error) {
                console.log(error);
            }
        }

        fetchAbout().then(r => console.log(r));
    }, [])

    useEffect(() => console.log(about), [about]);

    return (
        <div className="os-login-card d-flex flex-column justify-content-center align-content-center align-items-center">
            <h1 className="os-login-title">
                O nas
            </h1>

            <p className="text-white os-about-content">
                { about }
            </p>
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

