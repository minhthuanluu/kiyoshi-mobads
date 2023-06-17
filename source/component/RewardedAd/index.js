import React, { useEffect, useState } from 'react'
import { Alert, Button, Platform, Text, View } from 'react-native'
import AdMobRewarded from '../../../modules/expo-ads-admob/build/AdMobRewarded';

const Rewarded = ({ unitID }) => {
  const [loaded, setLoaded] = useState(false);

  const rewarded = AdMobRewarded.setAdUnitID(unitID);

  useEffect(() => {

    const init = async () => {
      try {
        if (!(await AdMobRewarded.getIsReadyAsync())) {
          var isRewardedReady = false;
          try {
            await AdMobRewarded.requestAdAsync({
              servePersonalizedAds: true
            });
            isRewardedReady = true;
          } catch (e) {
            if (e.code === 'E_AD_ALREADY_LOADED') {
              isRewardedReady = true;
            } else {
              console.warn('AdMobRewarded.requestAdAsync', e);
            }
            console.log({ e });
          } finally {
            setLoaded(isRewardedReady)
          }
        } else {
          setLoaded(isRewardedReady)
        }
      } catch (error) {
        console.log(error);
      }
    }

    init();
    onPress();

  }, [])

  const onPress =async() => {
    try {
      let readyAds = await AdMobRewarded.getIsReadyAsync();
      if(readyAds==true){
        AdMobRewarded.showAdAsync();
        setLoaded(false)
      }else{
        console.log('Please wait a moment!');
      }
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      {/* <Button title='Load ads' onPress={() => onPress()} /> */}
    </View>
  )
}

export default Rewarded