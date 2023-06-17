import React from 'react'
import { Platform, StatusBar, View } from 'react-native'
import { AdMobBanner, RewardedAd } from './source/component';

const App = () => {
  const unitID =  Platform.select({
    ios: "ca-app-pub-3940256099942544/2934735716",
    android: "ca-app-pub-5750711746491614/5984590042",
})
  const unitIDReward =  Platform.select({
    ios: "ca-app-pub-3940256099942544/1712485313",
    android: "ca-app-pub-3940256099942544/5224354917",
})
  return (
    <View style={{flex:1}}>
      <AdMobBanner unitID={unitID}/>
      <RewardedAd unitID={unitIDReward} />
      <StatusBar style="auto" />
    </View>
  )
}

export default App