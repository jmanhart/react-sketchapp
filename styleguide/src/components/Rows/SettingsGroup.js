/* @flow */
import React, { PropTypes, Component } from 'react';
import { Text, View, StyleSheet, Artboard } from 'react-sketchapp';

// import Row from './components/Row';
import SettingsRow from './SettingsRow.js';
import GroupHeader from './GroupHeader.js';
import SupportText from './SupportText.js';


import settingsGroup from './SettingsData03.js';

export default class SettingsGroup extends Component{

  renderGroupHeader(){
    if(this.props.isGroupHeaderVisible === true){
      return(
        <GroupHeader GroupHeaderString={this.props.GroupHeaderString}/>
      )
    }
  }

  renderSupportText(){
    if(this.props.isSupportTextVisible === true){
      return(
        <SupportText supportText={this.props.SuppotTextString}/>
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
                dividerTopType={item.dividerTopType}

                leftSideType={item.leftSideType}
                leftSideString={item.leftSideString}

                rightSideType={item.rightSideType}
                rightSideString={item.rightSideString}

                dividerBottomType={item.dividerBottomType}
                />
            </View>
          )
        })}
        {this.renderSupportText()}
      </View>

    )
  }
}
