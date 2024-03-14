import { StyleSheet } from "react-native";

export const Color = {
  azul: "rgb(57, 0, 153)",
  azul_oscuro: "rgb(0, 61, 91)",
  bordo: "rgb(158, 0, 89)",
  bordo_oscuro: "rgb(209, 73, 91)",
  rosa_intenso: "rgb(255, 0, 84)",
  rosa_oscuro: "rgb(246, 134, 189)",
  naranja: "rgb(255, 84, 0)",
  naranja_oscuro: "rgb(229, 88, 18)",
  amarillo: "rgb(255, 189, 0)",
  amarillo_oscuro: "rgb(237, 174, 73)",
};

export const styles = StyleSheet.create({
  //componentes
  input: {
    color: Color.azul,
    borderWidth: 2,
    borderColor: Color.azul_oscuro,
    padding: 10,
    marginBottom: 5,
    fontSize: 20,
    borderRadius: 10,
    fontWeight: "500",
  },
  button: {
    backgroundColor: Color.naranja_oscuro,
    justifyContent: "center",
    alignItems: "center",
    margin:  5,
    border: 1 ,
    borderColor:"#333",
    padding: 8,
    fontSize: 14,
    borderRadius: 10,
  },
  
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  sidebar:{
    fontSize:10,
    height:10,
  },
  
  //textos por tamaño
  textChico: {
    padding: "auto",
    textAlign: "center",
    fontSize: 18,
    marginTop: -10,
    margin: 10,
  },
  textMedio: {
    textAlign: "center",
    fontSize: 18,
    margin: 10,
  },
  text: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "700",
  },
  //texto de componentes
  textButton: {
    borderColor:"black",
    color: Color.azul_oscuro,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "700",
  },
  textImagenes:{
fontSize:10,
marginTop:-10,
textAlign:"center",
  },


  //tipos de pantalla mas adelante
  screenOscuro:{
    backgroundColor: "Black",
  },
  screenDefault:{
    backgroundColor: "white",
  },
});
