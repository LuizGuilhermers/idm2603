import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import{styles} from '../css/index.style';
import {Link} from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>

<Image style={styles.imagem} 
      source={require('../../assets/download.png')} 
      />

      <Text>CONTATOS</Text>

    <Link style={styles.btn} href={"/sobre"}>Sobre</Link>

    <Link style={styles.btn} href={"/inicio"}>Início</Link>

      <StatusBar style="auto" />
    </View>
  );
}


