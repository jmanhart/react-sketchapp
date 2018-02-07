/* @flow */
import React, { PropTypes, Component } from 'react';
import { Text, View, StyleSheet, Artboard } from 'react-sketchapp';

// import Row from './components/Row';
import SettingsRow from './SettingsRow.js';
import GroupHeader from './GroupHeader.js';
import SupportText from './SupportText.js';
import settingsData from './SettingsData.js';

import settingsGroup from './SettingsData03.js';

export default class SettingsGroup extends Component{

  renderGroupHeader(){
    if(this.props.isGroupHeaderVisible === true){
      return(
        <GroupHeader GroupHeaderString={this.props.GroupHeaderString}/>
      )
    } else {
      return(
        <Text style={{color:'white'}}>Nope</Text>
      )
    }
  }

  renderSupportText(){
    if(this.props.isSupportTextVisible === true){
      return(
        <SupportText supportText={this.props.SuppotTextString}/>
      )
    } else {
      return(
        <Text style={{color:'white'}}>Nope</Text>
      )
    }
  }

  render(){
    return(
      <View name="Settings Grouping">
        {this.renderGroupHeader()}
        {settingsGroup[0].rows.map((item) => {
          return(
            <View>
              <SettingsRow
                leftSideType={this.props.leftSideType}
                leftSideString={this.props.leftSideString}
                
                rightSideType={this.props.rightSideType}
                rightSideString={this.props.rightSideString}
                />
            </View>
          )
        })}
        {this.renderSupportText()}
      </View>

    )
  }
}
