/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';


type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {

  return (
    <>
      <ScrollView>
        <View style={{flexDirection:'row'}} > 
          <Image style={styles.banner} source={require('./assets/img/bg.jpg')} />
        </View>
        <View style={styles.contenedor}>
          <Text style={styles.titulo}>¿Qué Hacer En París?</Text>
          <ScrollView horizontal>
             <View>
               <Image style={styles.ciudad} source={require('./assets/img/actividad1.jpg')} />
             </View>
             <View>
               <Image style={styles.ciudad} source={require('./assets/img/actividad2.jpg')} />
             </View>
             <View>
               <Image style={styles.ciudad} source={require('./assets/img/actividad3.jpg')} />
             </View>
             <View>
               <Image style={styles.ciudad} source={require('./assets/img/actividad4.jpg')} />
             </View>
             <View>
               <Image style={styles.ciudad} source={require('./assets/img/actividad5.jpg')} />
             </View>
          </ScrollView>
          <Text style={styles.titulo}>Los Mejores Alojamientos</Text>
          <View>
               <Image style={styles.mejores} source={require('./assets/img/mejores1.jpg')} />
          </View>
          <View>
               <Image style={styles.mejores} source={require('./assets/img/mejores2.jpg')} />
          </View>
          <View>
               <Image style={styles.mejores} source={require('./assets/img/mejores3.jpg')} />
          </View>
        </View>
        <Text style={styles.titulo}>Hospedajes En LA</Text>
        <View style={styles.listado}>
           <View style={styles.listadoItem}>
               <Image style={styles.mejores} source={require('./assets/img/hospedaje1.jpg')} />
               <Text>Casa 3 Recamaras</Text>
           </View>
           <View style={styles.listadoItem}>
               <Image style={styles.mejores} source={require('./assets/img/hospedaje2.jpg')} />
           </View>
           <View style={styles.listadoItem}>
               <Image style={styles.mejores} source={require('./assets/img/hospedaje3.jpg')} />
           </View>
           <View style={styles.listadoItem}>
               <Image style={styles.mejores} source={require('./assets/img/hospedaje4.jpg')} />
           </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
//Flex actua como colum no como row en react native
/*Primeras clases Flex Box

  <>
     <View style = {styles.contenedor}>
        <View style = {styles.caja1}></View>
        <View style = {styles.caja2}></View>
        <View style = {styles.caja3}></View>
        <View style = {styles.caja4}></View>
     </View>
   </>

   contenedor:
   {
     backgroundColor:'cornflowerblue',
     flex:1, // Toma todo el tamaño de la pantalla
    //cuando esta como row alinea horizontalmente con justifyContent y cuando cambia a colum cambia el Axis se puede cambiar con Jusitfy content en vertical y alignitems en horizontal
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
   },
   caja1:{ //tiene que crecer el padre antes que el hijo para que se pueda expandir
     padding:20,
     backgroundColor:'navy',
    // flex:1
   },
   caja2:{
    padding:20,
    backgroundColor:'yellow',
    //flex:1
   },
   caja3:{
    padding:20,
    backgroundColor:'green',
    //flex: 1,
   },
   caja4:{
    padding:20,
    backgroundColor:'teal',
    //flex:1
   },
   */

   banner:
   {
    height:250,
    flex:1,
    
   },
   titulo:{
    fontWeight:'bold',
    fontSize:24,
    marginVertical:20
   },
   contenedor:{
    marginHorizontal:10
   },
   ciudad:{
    width:250,
    height:300,
    marginRight:10
   },
   mejores:{
    //flex:1,
    width:'100%',
    height:200,
    marginVertical:5
   },
   listado:{       //con flex wrap
     flexDirection:'row', //con row ppodemos añadir el space between
     flexWrap:'wrap',
     justifyContent:'space-between'
   },
   listadoItem:
   {
     flexBasis:'50%'
   }
});

export default App;
