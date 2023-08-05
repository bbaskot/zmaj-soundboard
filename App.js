import * as React from 'react';
import 'expo-dev-client';
import mobileAds from 'react-native-google-mobile-ads';
import { InterstitialAd, AdEventType, BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PrimaryButton from './components/PrimaryButton';
import {Audio} from 'expo-av';
import FirstScreen from './Screens/FirstScreen';
import SecondScreen from './Screens/SecondScreen';
const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-xxxxxxxx~xxxxxxxx';
const interstitalAdUnitId = __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-xxxxxxxx~xxxxxxxx';


export default function App() {
  const interstitial = InterstitialAd.createForAdRequest(interstitalAdUnitId, {
    requestNonPersonalizedAdsOnly: true
  });
  const loadedRef = React.useRef(false);
  const numOfClicks = React.useRef(1);
  React.useEffect(() => {
    const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
      loadedRef.current = true;
    });

    // Start loading the interstitial straight away
    interstitial.load();
    // Unsubscribe from events on unmount
    return unsubscribe;
  }, []);
  mobileAds()
  .initialize()
  .then(adapterStatuses => {
    // Initialization complete!
  });


  const [screen, setScreen] = React.useState(<FirstScreen onPressRandomButton = {onPressRandom} onPressList = {onPressList}></FirstScreen>);
  const [sound, setSound] = React.useState();
  const soundPlaying = React.useRef(false);
  const [playing, setPlaying] = React.useState(false);
  const soundlist = [{
    "require": require('./assets/sounds/akoLazeKoza.mp3'),
    "name": "Ako laže koza"
  },{
    "require": require('./assets/sounds/aleksandarVucicuPricamJa.mp3'),
    "name": "Aleksandar Vucicu"
  },{
    "require": require('./assets/sounds/aTiLajes.mp3'),
    "name": "A ti lajes"
  },{
    "require": require('./assets/sounds/bjeziDragoja.mp3'),
    "name": "Bjezi Dragojo"
  },{
    "require": require('./assets/sounds/budiZadovoljan.mp3'),
    "name": "Budi zadovoljan"
  },{
    "require": require('./assets/sounds/covjekSeUci.mp3'),
    "name": "Covjek se uci"
  },{
    "require": require('./assets/sounds/dragojo.mp3'),
    "name": "Dragojo"
  },{
    "require": require('./assets/sounds/drziMaliKobilu.mp3'),
    "name": "Drzi mali kobilu"
  },{
    "require": require('./assets/sounds/glupsonuGlupanePicko.mp3'),
    "name": "Glupsonu, glupane, picko"
  },{
    "require": require('./assets/sounds/idemoDalje.mp3'),
    "name": "Idemo dalje"
  },{
    "require": require('./assets/sounds/ikoOdMeneBrzi.mp3'),
    "name": "Ima li iko od mene brzi?"
  },{
    "require": require('./assets/sounds/imaLiIkoOdMeneJaci.mp3'),
    "name": "Ima li iko od mene jaci?"
  },{
    "require": require('./assets/sounds/imaLiKoDaBoljeJaseKonja.mp3'),
    "name": "Ima li iko da bolje jase konja?"
  },{
    "require": require('./assets/sounds/imaMojZakon.mp3'),
    "name": "Ima moj zakon"
  },{
    "require": require('./assets/sounds/iOpetSkacem.mp3'),
    "name": "I opet skacem"
  },{
    "require": require('./assets/sounds/jaMedjed.mp3'),
    "name": "Ja medjed"
  },{
    "require": require('./assets/sounds/jaSamDocekoDodika.mp3'),
    "name": "Ja sam doceko Dodika"
  },{
    "require": require('./assets/sounds/jaSamIlijaGraovac.mp3'),
    "name": "Ja sam Ilija Graovac"
  },{
    "require": require('./assets/sounds/jaSamLicnost.mp3'),
    "name": "Ja sam Licnost"
  },{
    "require": require('./assets/sounds/jasnoJeIPitcama.mp3'),
    "name": "Jasno je i pticama na grani"
  },{
    "require": require('./assets/sounds/jeboIhKaradzic.mp3'),
    "name": "Jebo ih Karadzic"
  },{
    "require": require('./assets/sounds/kadaPricaZmaj.mp3'),
    "name": "Kada prica Zmaj"
  },{
    "require": require('./assets/sounds/kasalj.mp3'),
    "name": "Kasalj"
  },{
    "require": require('./assets/sounds/koJeUmroPokajoSe.mp3'),
    "name": "Ko je umro pokajo se"
  },{
    "require": require('./assets/sounds/koLazeSuzeProsipa.mp3'),
    "name": "Ko laze suze prosipa"
  },{
    "require": require('./assets/sounds/komeJosSmetaGovor.mp3'),
    "name": "Kome jos smeta govor?"
  },{
    "require": require('./assets/sounds/kompletnoOduprti.mp3'),
    "name": "Kompletno oduprti"
  },{
    "require": require('./assets/sounds/miloradePricamJa.mp3'),
    "name": "Milorade pricam ja"
  },{
    "require": require('./assets/sounds/mojReferat.mp3'),
    "name": "Moj referat"
  },{
    "require": require('./assets/sounds/napustiSahranu.mp3'),
    "name": "Napusti sahranu"
  },{
    "require": require('./assets/sounds/neDamPlijeniti.mp3'),
    "name": "Ne dam plijeniti"
  },{
    "require": require('./assets/sounds/nekMeDodikCuje.mp3'),
    "name": "Nek me Dodik cuje"
  },{
    "require": require('./assets/sounds/nijeMeniLadno.mp3'),
    "name": "Nije meni ladno"
  },{
    "require": require('./assets/sounds/nisamPraoRuke.mp3'),
    "name": "Nisam prao ruke"
  },{
    "require": require('./assets/sounds/ojebine.mp3'),
    "name": "Ojebine"
  },{
    "require": require('./assets/sounds/okupioSiKurtiiMurti.mp3'),
    "name": "Okupio si i kurti i murti"
  },{
    "require": require('./assets/sounds/pogince.mp3'),
    "name": "Pogince"
  },{
    "require": require('./assets/sounds/pricamJaMaricu.mp3'),
    "name": "Pricam ja Maricu"
  },{
    "require": require('./assets/sounds/pricamJaOk.mp3'),
    "name": "Pricam ja ok"
  },{
    "require": require('./assets/sounds/pricamJaProdukcijo.mp3'),
    "name": "Pricam ja produkcijo"
  },{
    "require": require('./assets/sounds/saranjivajteGaSad.mp3'),
    "name": "Saranjivajte ga sad"
  },{
    "require": require('./assets/sounds/skokuJanj.mp3'),
    "name": "Skok u Janj"
  },{
    "require": require('./assets/sounds/skripanjeZubima.mp3'),
    "name": "Skripanje zubima"
  },{
    "require": require('./assets/sounds/smijeh.mp3'),
    "name": "Smijeh"
  },{
    "require": require('./assets/sounds/tomicuPricamJa.mp3'),
    "name": "Tomicu pricam ja"
  },{
    "require": require('./assets/sounds/ubicuIzvrsioca.mp3'),
    "name": "Ubicu izvrsioca"
  },{
    "require": require('./assets/sounds/uceroBiKobilu.mp3'),
    "name": "Ucero bi kobilu"
  },{
    "require": require('./assets/sounds/vidisDaSiBudala.mp3'),
    "name": "Vidis da si budala"
  },{
    "require": require('./assets/sounds/zapostavioSiZmaja.mp3'),
    "name": "Zapostavio si Zmaja"
  },{
    "require": require('./assets/sounds/zmajPrepadaBika.mp3'),
    "name": "Zmaj prepada bika"
  },]
  let facePath = require("./assets/zmaj_cuti150.png");
  async function playSound(name) {
    try{
      const { sound } = await Audio.Sound.createAsync(name);
      setSound(sound);
      sound._onPlaybackStatusUpdate = (playbackStatus) => {
        if(playbackStatus.isPlaying){
          soundPlaying.current = true;
          setPlaying(true);
        }
        if(playbackStatus.didJustFinish){
          soundPlaying.current = false;
          setPlaying(false);
        }
      }
      await sound.playAsync();
    }catch(error){
      
    }
  }
  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
  function playAd(){
      if(loadedRef.current){
        interstitial.show();
        setTimeout(() => {
          loadedRef.current = false;
          interstitial.load();
        }, 3000);
      }
  }
  function onPressRandom(){
      if(!soundPlaying.current){
        numOfClicks.current++;
        if(numOfClicks.current%3 == 0){
          playAd();
        }
        rand = Math.floor(Math.random() * 50);
        playSound(soundlist[rand].require);
      }
  }
  function playSpecific(name){
    if(!soundPlaying.current){
      numOfClicks.current++;
      if(numOfClicks.current%3 == 0){
         playAd();
      }
      playSound(name);
    }
  }
  function onPressList(){
    setScreen(<SecondScreen  soundlist={soundlist} playSound={playSpecific} backToFirst ={backToFirst}></SecondScreen>)
  }
  function backToFirst(){
    setScreen(<FirstScreen  onPressRandomButton = {onPressRandom} onPressList = {onPressList}></FirstScreen>);
  }
  if(playing){
      facePath= require("./assets/zmaj_prica150.png");
  }else{
      facePath = require("./assets/zmaj_cuti150.png");
  }
  return (
      <LinearGradient colors={["rgba(165, 243, 252,0.8)" , "rgba(236, 254, 255, 0.8)"]} style = {styles.container}>
        <View style={styles.header}>
          <View style = {styles.imageWrapper}>
            <Image source ={facePath} style = {styles.img}/>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.screenWrapper}>
            {screen}
        </View>
        
        </View>
        <View>
          <BannerAd
              unitId={adUnitId}
              size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
              requestOptions={{
                requestNonPersonalizedAdsOnly: true,
              }}
            />
        </View>
        <StatusBar style="auto" />
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  ad:{
    flex: 1,
  },
  rootScreen: {
    flex: 1
  },
  container: {
    flex: 1,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
    flex: 2,
  },
  body: {
    flex: 4,
    marginHorizontal:20,
    padding: 10,
  },
  screenWrapper: {
    backgroundColor: 'rgba(236, 236, 236, 0)',
    borderRadius: 6,
    padding: 15,
    marginBottom: 120
  },
  img: {
    
  },
  imageWrapper: {
    width: 150,
    height: 150,
    backgroundColor: 'rgba(236, 236, 236, 0.3)',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
