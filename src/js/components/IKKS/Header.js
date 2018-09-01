import React from 'react';

const Header = () => (
	<header className="header">
		<div className="h-top">
			<div className="section">
				<div className="h-head">
					<div className="h-time">
						<a className="current" href="/"><span className="icon-time"></span>Paris</a>
						<a href="/"><span className="icon-time"></span>Shanghai</a>
					</div>
					<div className="logo">
						<a href="index.html"><img src="assets/images/ikks_logo.svg" /></a>
					</div>
					<div className="burger-wrapper">
						<button type="button" className="hamburger">
							<div className="nav-icon"><span></span><span></span><span></span></div>
						</button>
					</div>
				</div>
			</div>
		</div>
		<div className="h-bottom">
			<div className="section">
				<div className="h-menu">
					<ul className="h-menu-list">
						<li className="selected">
							<span>Ikks paris</span>
							<ul className="h-submenu-list">
								<li><a href="fw18_collection.html">FW18 Collection</a></li>
								<li><a href="bonjour_paris_capsule.html">Bonjour Paris Capsule</a></li>
								<li><a href="lookbook_girl.html">Lookbook Girl</a></li>
								<li><a href="lookbook_boy.html">Lookbook Boy</a></li>
								<li><a href="brand_history.html">Brand History</a></li>
							</ul>
						</li>
						<li><a href="leo&lea.html">leo & lea stories</a></li>
						<li><a href="french_lifestyle.html">French lifestyle</a></li>
						<li><a href="store.html">Find a store</a></li>
					</ul>
					<div className="h-language">
						<a href="/">中文</a>
					</div>
				</div>
			</div>
		</div>
	</header>
);

export default Header;
