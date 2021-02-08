//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
function SimpleCounter(props) {
	return (
		<div className="BigCounter">
			<div>
				<i className="far fa-clock"></i>{" "}
			</div>
			<div className="cuatro">{props.numeroCuatro * 10}</div>
			<div className="tres">{props.numeroTres * 10}</div>
			<div className="dos">{props.numeroDos % 10}</div>
			<div className="uno">{props.numeroUno % 10}</div>
		</div>
	);
}

SimpleCounter.propTypes = {
	numeroCuatro: PropTypes.number,
	numeroTres: PropTypes.number,
	numeroDos: PropTypes.number,
	numeroUno: PropTypes.number
};

let counter = 0;
setInterval(function() {
	const cuatro = Math.floor(counter / 1000);
	const tres = Math.floor(counter / 100);
	const dos = Math.floor(counter / 10);
	const uno = Math.floor(counter / 1);
	console.log(uno, dos, tres, cuatro);
	//render your react application
	ReactDOM.render(
		<SimpleCounter
			numeroUno={uno}
			numeroDos={dos}
			numeroTres={tres}
			numeroCuatro={cuatro}
		/>,
		document.querySelector("#app")
	);

	counter++;
}, 1000);
