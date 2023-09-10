import React, { Component, Fragment } from 'react';
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import styles from "./Modal.scss";
import InnerModal from "./InnerModal";
import "babel-polyfill";
import ScrollLock from "react-scrolllock";


class ModalPortal extends Component {
	static propTypes = {
		title: PropTypes.string,
		children: PropTypes.node.isRequired,
		border: PropTypes.string,
		extra: PropTypes.node,
	}

	state = {
		isVisible: false,
		isClosing: false,
	}

	componentDidMount(){
		this.setState({ isVisible: this.props.isVisible });
	}

	componentDidUpdate(prevProps){
		if(this.props.isVisible !== prevProps.isVisible){
			this.handleVisible();
		}
	}

	handleVisible = async () => {
		if(!this.state.isClosing){
			if(this.props.isVisible){
				this.setState({ isVisible: true });
			} else if(this.child) {
				await this.setState({ isClosing: true });
				this.child.addCloseAnimation();
				setTimeout(() => {
					this.setState({ isVisible: false });
				}, 300);
			}
		}
	}

	finishedClose = async () => {
		await this.setState({ isClosing: false });
	}

	render(){
		return (
			this.state.isVisible ? (
				<div>
					<InnerModal
						title={ this.props.title }
						onRef={ref => (this.child = ref)}
						isVisible={ this.props.isVisible }
						toggleModal={ this.props.toggleModal }
						finishedClose={ this.finishedClose }>
						{ this.props.children }
					</InnerModal>

					<div className={ styles.modalBlockClick }></div>
				</div>
			) : null
		)
	}
}


// Create the modal portal to hook up to the page
const Modal = (props) => {

	// Check if the portal-root div exist
	let portalRoot = document.getElementById("portal-root");
	// if not, add it to the body
	if(!portalRoot){
		const portalRoot = document.createElement("div");
		portalRoot.id = "portal-root";
		document.body.appendChild(portalRoot);
	}
	// Create a portal
	return ReactDOM.createPortal(
		<ModalPortal {...props} />,
		document.getElementById("portal-root")
	)
}

export default Modal;
