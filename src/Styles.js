import { makeStyles } from "@mui/styles"
import { color, height } from "@mui/system"
const useStyles= makeStyles((theme)=>({
    container:{
    marginTop:"30px"
    },
    button:{
        marginTop:'10px'
    },
    icon:{
        marginRight:"20px"
    },
    cardGrid:{
       padding:"20px 0"
    },
    card:{
       height:"100%",
       display:"flex",
       flexDirection:"column"
    },
    cardMedia:{
      paddingTop:"56.25%", //16:9
    },
    cardContent:{
      flexGrow:1,
    }
}))

export default useStyles