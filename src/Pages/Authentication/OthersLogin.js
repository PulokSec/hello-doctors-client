import React from "react";
import fbLogo from '../../images/fb.png';
import googleLogo from '../../images/google.png';
import './Login.css';

const LoginWithOthers = (props) => {
	return (
		<div>
			<div className="form-divider text-center">
				<p>Or </p>
			</div>

			<div className="tg-thirdparty-login mb-3 d-flex">
				<button className="btn btn-secondary d-flex align-items-center justify-content-center" onClick={props.google}>
					<span>
						<img src={googleLogo} style={{ maxWidth: "32px" }} alt="fb logo" />
					</span>
				</button>
				<button className="btn btn-secondary d-flex align-items-center justify-content-center" onClick={props.facebook}>
					<span>
						<img src={fbLogo} style={{ maxWidth: "32px" }} alt="fb logo" />
					</span>
				</button>
			</div>
		</div>
	);
};

export default LoginWithOthers;