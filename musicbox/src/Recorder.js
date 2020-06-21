import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles/Recorder.css';
import redLight from './images/red.png';
import grayLight from './images/gray.png';

class RecorderButton extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }


    handleClick() {
        return <CreateRecorder name="ryan"/>;
    }

    render() {
        return (
            <button onClick={this.handleClick}>connect device</button>
        );
    }
}

function CreateRecorder(props) {
    return (
        <Recorder name={props.name} live={true} />
    );
}

function Recorder(props) {
    return (
        <div className="Recorder">
            <RecorderButton />
            <Container>
                <Row className="show-grid recorder-row">
                    <Col sm={2} className="recorder-col">
                        <RecLight live={props.live} />;
                    </Col>
                    <Col sm={2} className="recorder-col">{props.name}</Col>
                    <Col sm={8} className="recorder-col">sm=8</Col>
                </Row>
            </Container>
        </div>
    );
}

function RecLight(props) {
    if (props.live) {
        return (<img className="Recording" src={redLight} />);
    } else {
        return (<img className="NotRecording" src={grayLight} />);
    }
}

export default Recorder;