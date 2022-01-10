import { makeStyles } from "@material-ui/core";
const useStyle = makeStyles(theme=>({
    background:{

    },
    jobSPageHeading:{
        fontSize : "28px",
        fontWeight:"600",
        [theme.breakpoints.down('sm')]: {
            fontSize : "22px",
        },
        textTransform: "uppercase",
        textAlign:'center',
        marginBottom:'22px'
    },
    link:{
        textDecoration:"none",
        color:"black",
        "&:hover":{
            color: '#111'}
    },

    cards:{
    marginTop:"10px",
    padding : "25px",
    width : "70vw",
    margin : "auto",
    backgroundColor:"white",
    borderRadius:"4px",
    borderLeft:"solid transparent 8px",
    boxShadow: "rgba(0, 0, 0, 0.17) 0px 2px 5px",
        [theme.breakpoints.down('sm')]: {
            width : "90vw",
        },
    "&:hover":{
        borderLeft:"solid #1faf05 8px",
        transition:"0.4s",
        "& $btnStyle":{
            backgroundColor:"#1faf05",
            color:"white",
            transition:"0.4s",
        }
    }
},
themeColor:{
    color:"#1faf05",
},
jobHeading:{
    fontWeight : "bold",
    fontSize:"28px",
    textTransform: "captalize",
    [theme.breakpoints.down("md")]:{
        fontSize:"22px",
    }
},
jobDescription:{
    margin:"10px 0 10px 0",
    fontSize : "15px",
    color:"#444",

},
vacancyNumber:{
    width : "100px",
    padding : "5px",
    textAlign:"center",
    margin:"5px 0 10px 0",
    backgroundColor:"#E2F6ED",

},


ReadMoreLink:{
    textDecoration:"none",
    fontSize : "15px",
    textAlign: 'left'
},
cardContent:{
},
cardButton : {
    display:"flex",
    justifyContent : "center",
    alignContent : "center",
    alignItems:"center",
    [theme.breakpoints.down("md")]:{
        marginTop : "20px",
    }
},
btnStyle : {
borderRadius:"2px",
backgroundColor:"white",
boxShadow:"0 2px 8px rgb(102 103 107 / 05%)",
border:"solid #1faf05 1px",
},
btnLink:{
    textDecoration:"none",
    color:"black",
    "&:hover":{
        color:"white",
    }
},
}))
export default useStyle;
