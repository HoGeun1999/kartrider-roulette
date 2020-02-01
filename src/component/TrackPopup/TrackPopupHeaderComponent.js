import React, { Component } from 'react';
import iconClose from '../../asset/close.png';
import TrackThemeCheckboxComponent from './TrackThemeCheckboxComponent';


export default class TrackPopupHeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.onClose = this.onClose.bind(this);
  }

  onClose() {
    console.log('onClose');
    const { onClose } = this.props;
    onClose();
  }

  render() {
    return (
      <div className='kartrider-track-popup-header-component'>
        <div className='track-popup-header'>
          <div className='track-popup-title'>
            <input type='text' placeholder='컬렉션 이름 ex) 나만의 컬렉션'/>
          </div>
          <button className='track-popup-close' onClick={ this.onClose }>
            <img src={ iconClose } alt='track popup close'/>
          </button>
        </div>
        <div className='track-popup-theme'>
          <div className='track-theme-text'>
            테마선택
          </div>
          <div className='track-theme-selector'>
            <TrackThemeCheckboxComponent name={ '스피드' } />
            <TrackThemeCheckboxComponent name={ '아이템' } />
            <TrackThemeCheckboxComponent name={ '전체' } />
          </div>
        </div>
      </div>
    );
  }
}