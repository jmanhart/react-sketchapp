/* @flow */
import React, { PropTypes, Component } from 'react';
import { Text, View, StyleSheet, Artboard } from 'react-sketchapp';

// import Row from './components/Row';
import SettingsRow from './SettingsRow.js';
import GroupHeader from './GroupHeader.js';
import SupportText from './SupportText.js';
import settingsData from './SettingsData.js';

export default class SettingsGroup extends Component{

  renderGroupHeader(){
    if(this.props.groupHeader === true){
      return(
        <GroupHeader GroupHeader="settings group"/>
      )
    }
  }

  renderSupportText(){
    if(this.props.supportText === true){
      return(
        <SupportText supportText="Lorem ipsum dolor amet put a bird on it roof party disrupt bicycle rights. Portland kitsch freegan, swag coloring book biodiesel salvia cronut trust fund. Mixtape woke yuccie, banjo cornhole subway tile meh vinyl vice air plant."/>
      )
    }
  }

  render(){
    return(
      <View name="Settings Grouping">
        {this.renderGroupHeader()}
        {settingsData.map((item) => {
          return(
            <View>
              <SettingsRow
                Left={item.Left}
                LeftSideCopy={item.LeftSideCopy}
                Right={item.Right}
                RightSideCopy={item.RightSideCopy}
                />
            </View>
          )
        })}
        {this.renderSupportText()}
      </View>

    )
  }
}
