//External Dependies
import React, { Component } from 'react';

//Our Dependancies
import Emoji from './Emoji';
import Effect from './Effect';

//Import Images
import poop from '../images/poop.png'
import laugh from '../images/laugh.png'
import love from '../images/love.png'
import clap from '../images/clap.png'
import wonder from '../images/wonder.png'

let emoticons = [
  {name:'poop',img:poop},
  {name:'laugh',img:laugh},
  {name:'love',img:love},
  {name:'clap',img:clap},
  {name:'wonder',img:wonder}
]

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      width: '0',
      height: '0',
      transitionActive: false
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  handleOnClick = (e) => {
    const target = e.target;
    const name = target.name;

    if(!this.state.transitionActive){
      this.setState({
        [name + 'Active']: true,
        activeEffect: name,
        transitionActive: true,
      }, () => stateCallBack());

      let stateCallBack = () => {
        let effectImage = this.getEmoticonImage(name);
        this.createCrazyEffect(effectImage);
        setTimeout(function() { this.setState({transitionActive: false})}.bind(this), 3000);
      }
    }
  }

  getEmoticonImage(name){
    for (let index of emoticons){
      if(index.name===name){
        this.setState({
          effectImage:index.img
        })
      }
    }
  }

  createCrazyEffect(effectImage){
    if(!effectImage){
      return null
    }else{
      return <Effect
        transitionActive={this.state.transitionActive}
        icon={effectImage}
        screenWidth={this.state.width}
      />
    }

  }

  render() {
    let transitionActive = this.state.transitionActive, visible = '';
    if(!transitionActive){
      visible = 'visible'
    }
    return (
      <div className="main-container">
        <div className={"emoji-form " + visible}>
          <Emoji
            icon={poop}
            onClick={this.handleOnClick}
            name={"poop"}
           />
          <Emoji
            icon={laugh}
            onClick={this.handleOnClick}
            name={"laugh"}
           />
          <Emoji
            icon={love}
            onClick={this.handleOnClick}
            name={"love"}
           />
          <Emoji
            icon={clap}
            onClick={this.handleOnClick}
            name={"clap"}
           />
          <Emoji
            icon={wonder}
            onClick={this.handleOnClick}
            name={"wonder"}
           />
        </div>
        <div className="effect-container">
            {this.createCrazyEffect(this.state.effectImage)}
        </div>
      </div>
    );
  }

}

export default Form;
