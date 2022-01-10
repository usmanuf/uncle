import { makeStyles } from "@material-ui/core";
// import Image from '../../../../assests/ExtraImages/background.jpg';

const useStyle = makeStyles(theme =>({

    shapeLinks : {
        textDecoration : "none",
        color : "black",
    },
    firstParagraph : {
        display : "flex",
        margin: "15px 12px",
        justifyContent : "center",
        flexDirection : "column"
    },
    border : {
        borderBottom : "solid #D3D3D3 2px",
    },

    boxInner : {
        background : "#efeded",
        marginBottom : "10px",
        width: '100%',
        height: '100%',
        padding: "4px",
        border: '1px solid #dbd9d9',
        borderRadius: '8px',

    },
    paragraphs : {
        background : "#E5F2E1",
        marginTop : "20px",
        paddingBlock : "20px",
    },
    textBold : {
        fontWeight : "bold",
    },
    dangerouText:{

    },
    subTitle:{
      fontSize: '33px',
        textAlign: 'center'
    },
    lineHight:{
        lineHeight : "18px",
        marginTop: '10px',
        fontSize: "14px",
        fontWeight: '400',
        color: '#323131',
        textAlign: 'center'
    },
    textTitle:{
        fontSize: "14px",
    fontWeight: "700",
    lineHeight: "21px",
        textTransform: 'capitalize',
    padding: "8px",
    textAlign: "center",
    },
    marginfive : {
        margin : "5px 0 5px 0",
    },
    marginY : {
        margin : "30px 0",
    },
    margin : {
        margin : "10px",
        borderRadius : "50px",
    },
    buttonServices : {

        color : "white",
        fontSize : "18px",
        borderRadius: "4px",
        border: "2px solid var(--theme)",
        padding:"0px 22px",
        background: "var(--theme)",
        transition: '.3s',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: 'white',
            border: "2px solid var(--theme)",
            color : "var(--theme)",
        }
    },
    paddingBottom : {
        paddingBottom : "20px",
    },
    anyQuestion : {
        width : "100%",
        background : "gray",
        display : "flex",
        alignContent : "center",
        padding : "10px 0 10px 0",
        backgroundImage: `url(${Image}),linear-gradient(rgba(0,0,0,5.5),rgba(0,0,0,0.5))`,
        backgroundBlendMode: "overlay",
        backgroundPosition : "center",
        backgroundRepeat: "no-repeat, repeat",
        backgroundSize : "cover",

    },
    colorWhite : {
        color : "white",
    },
    lastParageraph : {
        width : "60%",
        color : "white",
        [theme.breakpoints.down('xs')] : {
            width : "100%",
        },
    },
    secondPartAcServices : {
        height : "40vh",
        width : "100%",
        marginTop : "10px",
    },
    padding : {
        margin : "10px!important",
        height : "100%",
    },
    background : {
        backgroundColor : "#F2FAEF",
        marginBottom:'19px',
    }

}))
export default useStyle;
