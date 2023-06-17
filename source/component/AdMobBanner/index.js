import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { AdMobBanner as AdMobBannerLib } from "../../../modules/expo-ads-admob";

export default function AdMobBanner({ unitID }) {

    useEffect(() => {
        // const unsubscribeLoaded = reea
    }, [])

    return (
        <View style={styles.container}>
            <AdMobBannerLib
                bannerSize="banner"
                adUnitID={unitID}
                key={'1'}
                servePersonalizedAds={true} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
