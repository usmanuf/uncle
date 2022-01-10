import { makeStyles } from "@material-ui/core";
import { FullscreenExitRounded } from "@material-ui/icons";
const useStyle = makeStyles({

    fullBar:{
        height: "5px",
        width: "100%",

    },
    header:{
        width : "100%",
        padding : "30px",
        textAlign : "center",
        color : "white",
        fontWeight:"700",
        fontSize : "40px",
        textTransferm:"uppercase",
        margin : "auto",
    },
    packegeBasic : {
        margin : "auto",
        marginBottom: '12px',
        maxWidth:'400px',
        backgroundColor : "#e5e4e4",
    },
    packegeBody : {
        fontSize : "20px",
        height: '200px',
        fontWeight: "700",
        padding : "20px",
        display : "flex",
        justifyContent : "center",
        alignItem:"center"
    },
    cubeBorder:{
        width : "0px",
        height : "0px",
        margin:"auto",
        color:"red",

        borderLeft : "20px solid transparent",
        borderRight : "20px solid transparent",
    },
    btnStyle : {
       fontSize : "20px",
border:"none",
        borderRadius:"8px",
       marginBottom : "30px",
       color : "white",
       marginTop : "30px",
    },
    btnPackage:{
      border: "none",
        padding: "12px 32px",
        borderRadius:"8px",
        margin: "22px 0",
        color: 'white',
        fontSize:"22px",
        fontWeight: "800",
        textDecoration:"none",
        textTransform:"uppercase",
    },
    background : {
        backgroundColor : "#ffffff",

        margin : "33px 0",
    },
    background1 : {

        backgroundColor : "#ffffff",

        margin : "auto",

    },
    btnContainer:{
        display : "flex",
        justifyContent : "center",

    },

    price : {
        padding : "10px",
        textAlign : "center",
        fontWeight : "bold",
    },
    icons : {
        color : "#1faf05",

    },
    backgroundColorPrimary : {
        backgroundColor : "#1faf05",
    },


    bgBasic:{
        background: "#03A88E",
    },
    colorBasic:{
        color:"#03A88E"
    },
    pBasic:{
        borderTop : "25px solid #03A88E",
    },
    pStander:{
        borderTop : "25px solid #1f83c4",
    },
    pPremium:{
        borderTop : "25px solid #71ae1e",
    },
    bgStanderd:{
        background: "#1f83c4",
    },
    colorStanderd:{
        color:"#1f83c4"
    },
    bgPremeium:{
        background: "#71ae1e",
    },
    colorPremeium:{
        color:"#71ae1e"
    },





})
export default  useStyle;
