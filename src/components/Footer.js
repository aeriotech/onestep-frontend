import React from 'react';

import {
  Container,
  Row,
} from 'reactstrap';

export default function OSFooter() {
    return (
        <>
            <footer className="os-footer">
                <Container>
                    <Row className="align-items-center justify-content-center">
                        <div className=" copyright">
                            © 2020 - {new Date().getFullYear()}{" "}
                            OneStep • Powered by <a href="https://orb.si" target="_blank" rel="noreferrer">Orb</a>
                        </div>
                    </Row>
                </Container>
            </footer>
        </>
    );
}