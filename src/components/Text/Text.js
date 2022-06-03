import { View, Text as RNText,StyleSheet } from 'react-native'
import React from 'react'
import { presets } from './text.preset'

export default function Text({children,preset="default",styles}) {
    const textStyle=StyleSheet.compose(presets[preset],styles);
  return (
    <View>
      <RNText style={textStyle}>{children}</RNText>
    </View>
  )
}