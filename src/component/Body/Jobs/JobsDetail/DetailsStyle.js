import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
    detailWidth:{
        width:"90vw",
        margin:"auto",
    },
    DetailLeftSide:{
        background: "White",
        margin:"10px",
        padding:"20px",
    },
    downHeaderDetails:{
        display:"flex",
        flexDirection:"row",
        marginTop:"5px",
    },
    headerIcon:{
        fontSize:"20px",
    },
    themeColor:{
        color:"#1faf05",
        marginRight:"13px",
        display:"flex",
    },
    location:{
        display:"flex",
        color:"gray",
    },
    detailPageDiscription:{
        fontSize:"15px",
        marginTop:"20px",
        marginBottom:"20px",
    },
    textBold:{
        fontWeight:"bold",
    },
    detailParagraph:{
     marginTop:"10px",
    },
    unitSkill:{

        border:"solid gray 1px",
        borderRadius:"33px",
        fontSize: "14px",
        padding:"8px 22px",
        margin:"5px 2px",
        color:"gray",
        "&:hover":{
            backgroundColor:"#1faf05",
            color:"white",
            transition:"0.4s",
            cursor:"pointer",
        }

    },
    skills:{
     marginTop:"20px",
    },
    skillTypes:{
        display:"flex",
        flexWrap:"wrap",
    },
    detailRightSide:{
        background: "White",
        margin:"10px",
        padding:"15px",
    },
    morning:{
        backgroundColor:"#1faf05",
        padding:"10px 20px 10px 20px",
        color:"white",
        borderRadius:"20px",
        fontSize:"20px",
    },
    jobDetailImage:{
        width:"100%",
        height:"100%",
        borderRadius:"100px",

    },
    fixerLogo:{
        width:"150px",
        height:"150px",
        margin:"auto",
        marginTop:"25px",
        borderRadius:"100px",
        boxShadow: "rgba(0, 0, 0, 0.20) 0px 5px 15px",
    },
    rightSideHeading:{
        marginTop:"20px",
    },
    rightSideBtnDiv:{
        marginTop:"20px",
    },
    rightSideBtn:{
        width:"100%",
        fontSize:"14px",
        fontWeight:"700",
        color:"white",
        background:'var(--theme-color)'
    },
    requirements:{
        marginTop:"20px",
        fontSize:'28px!important',
    },
    tableStyle:{
        marginTop:"20px",
        fontSize:"20px",
        color:"Gray"
    },
    requirementPoint:{
        marginRight:"25px",
        textAlign:"justify",
    },
    detailRightBottom:{
        background: "White",
        margin:"10px",
        padding:"15px",
    },
    detailApplyBtnLink:{
        textDecoration:"none",
    },
    hr:{
        marginTop:"20px",
        marginBottom:"20px",
        opacity:"30%",
    },
    mediaBlock:{
        margin:"10px",
        fontSize:"25px",
        display:"flex",
        justifyContent:"center",
        paddingTop:"15px",
        paddingBottom:"15px",
    },
    faIcon:{
        color:"#3B5998",
        boxShadow: "#3B5998 0px 2px 2px",

    },
    twIcon:{
        color:"#4AC9FF",
        boxShadow: "#4AC9FF 0px 2px 2px",
    },
    gpIcon:{
        color:"#F3222A",
        boxShadow: "#F3222A 0px 2px 2px",
    },
    inIcon:{
        color:"#EC3E7D",
        boxShadow: "#EC3E7D 0px 2px 2px",
    },
    lnIcon:{
        color:"#1695CF",
        boxShadow: "#1695CF 0px 2px 2px",
    },
    beIcon:{
        color:"#dd0828",
        boxShadow: "#0067FF 0px 2px 2px",
    }

})
export default useStyle;
