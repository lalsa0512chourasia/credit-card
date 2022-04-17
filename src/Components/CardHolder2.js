import React, {Component} from "react";

// class App extends React.Component {
// render() {
// 	return (
// 	<div>
// 		<InputFields></InputFields>
// 	</div>
// 	);
// }
// }



class CardHolder2 extends Component {
handleChange = (e) => {
	const { maxLength, value, name } = e.target;
	const [fieldName, fieldIndex] = name.split("-");

	let fieldIntIndex = parseInt(fieldIndex, 10);
	// Check if no of char in field == maxlength
	if (value.length >= maxLength) {

	// It should not be last input field
	if (fieldIntIndex < 4) {

		// Get the next input field using it's name
		const nextfield = document.querySelector(
		`input[name=field-${fieldIntIndex + 1}]`
		);


		// If found, focus the next field
		if (nextfield !== null) {
		nextfield.focus();
		}
	}
	}
};
handleSubmit=(e)=>{
	// console.log(e.target.nextfield.name);
}
render() {
	return (
	<div style={{ padding: 30 }}>
           <label>Card Number *</label>
		<InputFild name="field-1" length="3"
				handleChange={this.handleChange}  />
		<InputFild name="field-2" length="3"
				handleChange={this.handleChange} />
		<InputFild name="field-3" length="3"
				handleChange={this.handleChange} />
					<InputFild name="field-4" length="3"
				handleChange={this.handleChange} />
				<br/> <br/>
				<button type='submit' onClick={this.handleSubmit}>Submit</button>
	</div>
	);
}
}
class InputFild extends React.Component {
render() {
	return (
	<>
	
	<input
		style={{ margin: 10 }}
		type="text"
		name={this.props.name}
		maxLength={this.props.length}
		onChange={this.props.handleChange}
		required
	></input>
	</>
	);
}
}

export default CardHolder2;
