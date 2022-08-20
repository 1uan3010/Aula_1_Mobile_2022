import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() 
   {
	const [Valor1,setValor1] = useState("20");
	const [Valor2,setValor2] = useState("3");
	const [Resultado,setResultado] = useState("");
	function somar ()
	{
		let r=parseFloat(Valor1)+parseFloat(Valor2);
		setResultado(r);
	}
		//form f= new form(); -> instancia
	  return 
		(
			<View style={ styles.container }>
				<View style={ styles.bloco }>
					<Text style={ styles.titulo }> Calculo Simples </Text>
				</View>

				<View style={ styles.bloco }> 
					 <Text style={ styles.text }> Valor: 1 </Text>
					 <TextInput style={ styles.input } value={Valor1} onChangeText={(valor)=>setValor1(valor)}/>

				</View>	

				<View style={ styles.bloco }> 
					<Text style={ styles.text }> Valor: 2 </Text>
					<TextInput style={ styles.input } value={Valor2} onChangeText={(valor)=>setValor2(valor)}/>
				</View>	

				<View style={ styles.bloco }>
				</View>

				 <View style={ styles.bloco }>
					 <TouchableOpacity style={ styles.botao } onPress={somar}>
						 <Text style={ styles.TextBotao }>Somar</Text>
					 </TouchableOpacity>
				</View>

				<View style={ styles.bloco }>			 
					<Text style={ styles.titulo}> Resultado: {Resultado}</Text>
				</View>
				
		</View>
	 );
	}

const styles = StyleSheet.create({
  container: {
	  
    	flex: 1,
	  	backgroundColor: "#DCDCDC",
    	padding: 10,
		border: "1px solid #000000",
		marginTop:8,
	    justifyContent: "center"
	 
  },
	
	bloco:{
		
		marginTop:5,
		float:"center",
		borderRadius:"8px",
		
    
	},
	
	text: {
		
		marginLeft:"20%",
		fontSize:15,
		fontFamily:"arial",
		
	},
	
	input:{
		
		fontSize:20,
		border: "2px solid #000000",
		backgroundColor:"#ffffff",
		marginLeft:"20%",
		marginRight:"20%",
		borderRadius: "8px",
		
		
		
	},
	
	titulo:{
		
		justifyContent: "center",
		textAlign: "center",
		fontSize:25,
		fontFamily:"impact",
		
	},
	botao:{
		
		backgroundColor: "#ffffff",
		textAlign: "center",
		marginLeft:"40%",
		marginRight:"40%",
		border: "2px solid #000000",
		borderRadius: "8px"
		
	},
	
	blocoText:{
		
		fontSize:30,
		fontFamily:"impact",
		color:"#fff"
	},
});
