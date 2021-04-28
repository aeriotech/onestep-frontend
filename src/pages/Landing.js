import React/*, {Component}*/, {useEffect, useState} from 'react';

// reactstrap components
import {
  Container,
  Row,
} from 'reactstrap';
import {getPosts} from "../api/api.onestep";
import PostGrid from "../components/PostGrid";

// import Particles from "react-tsparticles";


export default function Landing() {

  console.log('jwt: ', localStorage.getItem('jwt'));

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      let temp = [];

      const res = await getPosts();

      try {
        const fetchedPosts = res.data;

        fetchedPosts.forEach(post => {
          temp.push({
            id: post.id,
            title: post.title,
            content: post.content,
            slug: post.slug,
            published_at: post.published_at,
            image: post.image.url,
            tags: post.tags
          })
        })

        setPosts(temp);

      } catch (error) {
        console.log(error);
      }
    }

    fetchPosts().then(r => console.log(r));
  }, [])

  useEffect(() => {
    if (posts.length > 3) {
      setPosts(posts.slice(-3));
    }
  }, [posts])

  return (
      <div>
        <main className="os-bg-sec">
          <div className="position-relative">
            <section className="os-landing-section d-flex flex-column align-items-center justify-content-center disable-select">
              <Container className="d-flex flex-column align-items-center">
                <h1 className="os-landing-title text-white">
                  OneStep
                </h1>
                <h2 className="os-landing-subtitle text-white">
                  Vedno en korak pred vsemi
                </h2>
              </Container>
            </section>

            {
              posts.length >= 1 ?
                <section className="d-flex flex-column align-items-center">
                  <h2 className="os-landing-section-title text-white">Zadnje objave</h2>
                  {
                    <>
                      <PostGrid postsData={posts} />
                      <br/>
                    </>

                  }
                </section>
                : false
            }
          </div>
        </main>
      </div>
  );
}

// Background particles effect

// class BackgroundParticles extends Component {
//   constructor(props) {
//     super(props);
//
//     this.particlesInit = this.particlesInit.bind(this);
//     this.particlesLoaded = this.particlesLoaded.bind(this);
//   }
//
//   particlesInit(main) {
//     console.log(main);
//   }
//
//   particlesLoaded(container) {
//     console.log(container);
//   }
//
//   render() {
//     return (
//         <Particles
//             id="tsparticles"
//             init={this.particlesInit}
//             loaded={this.particlesLoaded}
//             options={{
//               background: {
//                 color: {
//                   value: "#151019",
//                 },
//               },
//               fpsLimit: 60,
//               interactivity: {
//                 detectsOn: "canvas",
//                 events: {
//                   onClick: {
//                     enable: true,
//                     mode: "push",
//                   },
//                   onHover: {
//                     enable: true,
//                     mode: "repulse",
//                   },
//                   resize: true,
//                 },
//                 modes: {
//                   bubble: {
//                     distance: 400,
//                     duration: 2,
//                     opacity: 0.8,
//                     size: 40,
//                   },
//                   push: {
//                     quantity: 4,
//                   },
//                   repulse: {
//                     distance: 200,
//                     duration: 0.4,
//                   },
//                 },
//               },
//               particles: {
//                 color: {
//                   value: "#8ACAFF",
//                 },
//                 links: {
//                   color: "#8ACAFF",
//                   distance: 150,
//                   enable: true,
//                   opacity: 0.5,
//                   width: 1,
//                 },
//                 collisions: {
//                   enable: true,
//                 },
//                 move: {
//                   direction: "none",
//                   enable: true,
//                   outMode: "bounce",
//                   random: false,
//                   speed: 2,
//                   straight: false,
//                 },
//                 number: {
//                   density: {
//                     enable: true,
//                     value_area: 800,
//                   },
//                   value: 80,
//                 },
//                 opacity: {
//                   value: 0.5,
//                 },
//                 shape: {
//                   type: "circle",
//                 },
//                 size: {
//                   random: true,
//                   value: 5,
//                 },
//               },
//               detectRetina: true,
//             }}
//         />
//     );
//   }
// }