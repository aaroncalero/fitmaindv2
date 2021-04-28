import React, { Component } from "react";
import cinde from "../../img/cinde.jpg";
import geeks from "../../img/4geeks.jpg";
import micitt from "../../img/Micitt_logo.png";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center " style={{ color: "#B4B3AE" }}>
		<div className="container">
			<div className="row">
				<div className="col-3">
					<h3 className="mt-5">Proyecto Final</h3>
					<h4>Full stack Developer</h4>
				</div>
				<div className="col-9">
					<div className="container">
						<div className="row">
							<div className="col-6">
								<img className="img-fluid" src={cinde} />
							</div>
							<div className="col-3">
								<img className="img-fluid" src={geeks} />
							</div>
							<div className="col-3">
								<img className="img-fluid mt-3" src={micitt} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div classsName="text-center">
			<p className="mt-4">
				Desarrolladores: Andrea Piedra, Cristoher Esquivel, Aaron Calero, Esther Rosales, Jesus Lara
			</p>
		</div>
	</footer>
);
