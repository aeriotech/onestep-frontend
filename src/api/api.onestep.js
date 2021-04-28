import axios from 'axios';
import { API_URL as url } from './config.json';

export async function authDiscord(access_token) {
    return axios.get(url + `/auth/discord/callback?access_token=${access_token}`);
}

export async function getPosts() {
    return axios.get(url + '/posts');
}

export async function getPost(post_slug) {
    return axios.get(url + `/posts/${post_slug}`);
}