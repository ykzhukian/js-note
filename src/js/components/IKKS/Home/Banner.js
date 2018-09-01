import React from 'react';

const Banner = () => (
	<div className="home-hero">
		<div className="section">
			<div className="row">
				<div className="col-12 col-md-9">
					<a className="imageText-home hero" href="fw18_collection.html">
						<div className="imageText-img">
							<img src="assets/images/banner-hero.jpg" alt="FW18 Collection" />
						</div>
						<div className="imageText-text">
							<h2 className="imageText-title">FW18<br/>Collection</h2>
							<div className="btn white-btn">View Collection<span className="icon-arrow-r"></span></div>
						</div>
					</a>
				</div>
				<div className="col-12 col-md-3">
					<a className="imageText-home vertical-column" href="fw18_collection.html">
						<div className="imageText-img">
							<img src="assets/images/banner-a.jpg" alt="Win a trip to Paris" />
						</div>
						<div className="imageText-text">
							<span className="small-text">competition</span>
							<h3 className="imageText-title">Win a trip to Paris</h3>
						</div>
					</a>
					<a className="imageText-home vertical-column" href="fw18_collection.html">
						<div className="imageText-img">
							<img src="assets/images/banner-b.jpg" alt="XXL Castin" />
						</div>
						<div className="imageText-text">
							<span className="small-text">news from store</span>
							<h3 className="imageText-title">XXL Casting</h3>
						</div>
					</a>
					<a className="imageText-home vertical-column" href="fw18_collection.html">
						<div className="imageText-img">
							<img src="assets/images/banner-c.jpg" alt="Soldes" />
						</div>
						<div className="imageText-text">
							<span className="small-text">campaign</span>
							<h3 className="imageText-title">Soldes</h3>
						</div>
					</a>
				</div>
			</div>
		</div>
	</div>
);

export default Banner;
