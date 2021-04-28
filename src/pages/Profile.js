import React from 'react';

// reactstrap components
import {
	Container,
	Row,
} from 'reactstrap';

import { ProfileCard } from "../components/Cards";


export default function Profile() {
	return (
		<>
			<div className="os-bg-sec">
				<div className="position-relative">
					<section className="section section-lg">
						<Container>
							<Row className="justify-content-center text-center mb-lg">
								<ProfileCard />
							</Row>
						</Container>
					</section>
				</div>
			</div>
		</>
	);
}