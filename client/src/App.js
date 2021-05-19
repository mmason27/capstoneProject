import PhotoGalleryDisplay from "./Components/PhotoGalleryDisplay";
import ForumHeader from "./Components/ForumHeader";
import "./Components/CSS/PhotoGallery.css";
import LoginScreen from "./Components/LoginScreen";
import RegisterScreen from "./Components/RegisterScreen";
import CommunityForum from "./Components/CommunityForum";
import EducateHomepage from "./Components/EducateHomepage";
import "bootswatch/dist/minty/bootstrap.min.css";
// import "./Components/CSS/Index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AboutUs from "./Components/AboutUs";
import "./Components/CSS/App.css";
import React, { Component } from "react";
import TinyHomeChecklist from "./Components/TinyHomeChecklist";

import UploadForm from "./Components/UploadForm";
import { useState } from "react"
function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={App}>
						<Header />
						<Home />
						<Footer />
					</Route>
					<Route exact path='/login' component={LoginScreen}></Route>
					<Route exact path='/register' component={RegisterScreen}></Route>
					<Route exact path='/aboutus' component={AboutUs}>
						<Header />
						<AboutUs />
						<Footer />
					</Route>
					<Route exact path='/TinyHomeChecklist' component={TinyHomeChecklist}>
						<Header />
						<TinyHomeChecklist />
					</Route>
					<Route exact path='/PhotoGallery' component={PhotoGalleryDisplay}>
						<Header />
						<UploadForm />
						<PhotoGalleryDisplay />
					</Route>
					<Route exact path='/communityforum' component={CommunityForum}>
						<Header/>
						<CommunityForum />
						<Footer />
					</Route>
					<Route exact path='/educationalresources'>
						<Header />
						<EducateHomepage />
						<Footer />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
