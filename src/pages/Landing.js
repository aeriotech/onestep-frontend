import React from 'react';

// reactstrap components
import {
  Container,
  Row,
} from 'reactstrap';


export default function Landing() {

  console.log('jwt: ', localStorage.getItem('jwt'));

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
            <section>

            </section>
          </div>
        </main>
      </div>
  );
}