import React, { Component } from 'react';
import classNames from 'classnames';


class CrewCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flipCard: false
    }
    this._addFlipClass = this._addFlipClass.bind(this);
    this._removeFlipClass = this._removeFlipClass.bind(this);
  }
  /* Using classnames library
   Replacement Jquery hover handling code below
   $('.profile-hover').hover(function(){
        $(this).addClass('flip');
      },function(){
        $(this).removeClass('flip');
      });
  */
  _addFlipClass() {
    this.setState({
      flipCard: true
    })
  }

  _removeFlipClass() {
    this.setState({
      flipCard: false
    })
  }

  render() {
    const {id, group, image, name, title, segment} = this.props;
    return ([
        <div className={`box crew-photo i${id}`} data-track={group}>
          <img src={require(`../img/${group}/${image}.jpg`)} alt="" />
        </div>,
        <div 
          onMouseEnter={this._addFlipClass} 
          onMouseLeave={this._removeFlipClass}
          className={classNames(`box profile-hover c${id}`, {"flip": this.state.flipCard})} data-track={this.props.group}>
          <div className="crew-profile front">
            <h1 className="crew-profile__name">{name}</h1>
            <span className="crew-profile__title">{title}</span>
            <p className="crew-profile__area">{segment}</p>
          </div>
          <div className="crew-profile back">
            <h1 className="crew-profile__name">Guess who?</h1>
          </div>
        </div>
    ])
  }
}

export default CrewCard;