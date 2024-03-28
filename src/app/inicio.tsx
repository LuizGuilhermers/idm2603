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

      <Text>Pagina inicial dos contatos</Text>
      <StatusBar style="auto" />

    <Link style={styles.btn} href={"/inicio"}>Início</Link>

    </View>

    
  );
}