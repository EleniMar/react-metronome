import React, { Component } from 'react';
import {Container,Row,Col, ButtonGroup} from 'react-bootstrap';

import click1 from './click1.wav';
import click2 from './click2.wav';
import Button from 'react-bootstrap/Button';
import './Metronome.css';

class Metronome extends Component {
    constructor(props){
        super(props);
        this.state={
            playing: false,
            count: 0,
            bpm: 60,
            beatsPerMeasure:4
        };
        this.click1 = new Audio(click1);
        this.click2 = new Audio(click2);
    }

    

    handleBpmChane = event =>{
        const bpm = event.target.value;
        if(this.state.playing){
            clearInterval(this.timer);
            this.timer = setInterval(this.playClick, (60/bpm)*1000);
            
            this.setState({
                count: 0,
                bpm
            });
        }else{
            this.setState({bpm});
        }
    }

    playClick = () => {
        const{ count, beatsPerMeasure} = this.state;

        if( count%beatsPerMeasure ===0) {
            this.click2.play();
        }else{
            this.click1.play();
        }

        this.setState(state => (
            {
                count: (state.count+1)%state.beatsPerMeasure
            }
        ));
    };

    startStop = () =>{
        if(this.state.playing){
        
            clearInterval(this.timer);
            this.setState({
                playing: false
            });
        }else {
            this.timer = setInterval(
                this.playClick,
                (60/this.state.bpm)*1000
            );
            this.setState(
                {
                    count: 0,
                    playing: true
                },
                this.playClick
            );
        }
    };
    render() {
        const {playing, bpm}= this.state;

        return (
            <Container >
                 
                
                <h1 className="text-center">React.js Metronome</h1>
                    
                <Row className="row">
                    <Col className="col sgn-times">
                    <h4 className="text-center">Time Signature:</h4>
                    <ButtonGroup vertical block size="lg" className="sign-times-group">
                        <Button variant="outline-primary" className="sgntime-btn" value="4" onClick={()=>{this.setState({beatsPerMeasure: 4});}}>4/4</Button>
                        <Button variant="outline-primary" className="sgntime-btn" value="3" onClick={()=>{this.setState({beatsPerMeasure: 3});}}>3/4</Button>
                        <Button variant="outline-primary"className="sgntime-btn" value="2" onClick={()=>{this.setState({beatsPerMeasure: 2});}}>2/4</Button>
                        <Button variant="outline-primary"className="sgntime-btn" value="1" onClick={()=>{this.setState({beatsPerMeasure: 1});}}>1/4</Button>
                    </ButtonGroup>
                    </Col>
                    <Col className="col">
                <div className="metronome">
                    <div className="bml-slider">
                        <div>
                            {bpm} BPM
                        </div>
                        <input 
                            type="range" 
                            min="60" 
                            max="240" 
                            value={bpm} 
                            onChange={this.handleBpmChane}/>
                    </div>
                    <Button className="btn-dark" onClick={this.startStop}>{playing? 'Pause': 'Play'}</Button>
                </div>
                </Col>
                </Row>  
            </Container>
        );
    }
}

export default Metronome;

