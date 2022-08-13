import { React } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={ styles.container }>
      	<View style={ styles.bloco }>
			<Text style={ styles.titulo }> Calculo Simples </Text>
		</View>
		  
	    <View style={ styles.bloco }> 
			 <Text> valor: 1 </Text>
			 <TextInput style={ styles.input }/>
		</View>	  
		<View style={ styles.bloco }> 
			 <Text> valor: 2 </Text>
			 <TextInput style={ styles.input }/>
		</View>
		
		 <View style={ styles.bloco }>
			 <TouchableOpacity style={ styles.botao }>
				 <Text style={ styles.TextBotao }>Somar</Text>
			 </TouchableOpacity>
		 </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
	  
    	flex: 1,
	  	backgroundColor: "#00ff00",
    	padding: 10,
		border: "1px solid #000000",
		marginTop:8,
	 
  },
	
	bloco:{
		marginTop:5
    
	},
	
	input:{
		
		fontSize:20,
		border: "2px solid #000000",
		backgroundColor:"#ffffff",
		marginLeft:"10%",
		marginRight:"10%",
		borderRadius: "8px"	
		
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
	
	TextContainer:{
		
		fontSize:30,
		fontFamily:"impact",
		color:"#fff"
	},
	
	blocoText:{
		
		fontSize:30,
		fontFamily:"impact",
		color:"#fff"
	}
});
