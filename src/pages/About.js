import React from 'react';

// reactstrap components
import {
	Container,
	Row,
} from 'reactstrap';

import { AboutCard } from "../components/Cards";


export default function About() {
	return (
		<>
			<div className="os-bg-sec os-mh">
				<div className="position-relative">
					<section className="d-flex flex-column align-items-center justify-content-center section section-lg">
						<Container>
							<Row className="d-flex flex-column align-items-center justify-content-center text-center mb-lg">
								<br/>
								<AboutCard />
							</Row>
						</Container>
					</section>
				</div>
			</div>
		</>
	);
}