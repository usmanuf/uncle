import { makeStyles } from "@material-ui/core";
const useStyle = makeStyles(theme=>({
    backgroundColor:{
      backgroundColor: '#fefefe',

    },
    root:{
        width:"80vw",
        margin:"auto",
        marginTop:"90px",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        borderBottom:"solid #1faf05 3px",
        borderRadius:"10px",
        background:"white",
        padding:"15px",
        boxShadow: "rgba(0, 0, 0, 0.10) 0px 5px 10px",
    },
    div1:{
        background:"white",
        cursor:'pointer',
        width:"150px",
        height:"150px",
        [theme.breakpoints.down("md")]:{
            width:"130px",
            height:"130px",
        },
        margin:"auto",
        marginTop:"-80px",
        borderRadius:"100px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        border:"solid #1faf05 1px",
        '&:hover': {
            boxShadow: "rgba(0, 0, 0, 0.10) 0px 5px 10px",
            border:'1px solid var(--theme-color)'
        }


    },
    div2:{
        background:"#1faf05",
        width:"130px",
        height:"130px",
        [theme.breakpoints.down("md")]:{
            width:"110px",
            height:"110px",
        },
        borderRadius:"100px",


display:'flex',
        alignItems:"center",
    },
    marginBottom:{
        marginBottom:"50px",
        margin:"auto",
        textAlign: 'center',
        cursor: "pointer"
    },
    imgLabel:{
        fontSize:"50px",
        color:"white",
        margin:"auto",
        cursor: "pointer"
    },
    uploadIcon:{
        display:"none",
        visibility:"none",
        cursor: "pointer"
    },
    form:{
       background:"white",
        },
    btnGrid:{

        margin: 'auto',
        background: 'var(--theme-color)',
        color: 'white',
        padding: '5px 13px',
        borderRadius:'5px',
        display:"flex",
        justifyContent:"center",
        alignItem:'center',
        marginTop:"20px",
        marginBottom:'20px',
    },
    btnStyle:{
        color:"white",
        marginBottom:"20px",
        padding:"10px 15px 10px 15px",
    },
    input:{
        width:"100%",
        margin:'3px 0px',
        padding:"10px",
        border:"solid #C1C2B8 1px",
        borderRadius:"2px",
        fontSize:"15px",
        color:"gray"
    }
}))
export default useStyle;
