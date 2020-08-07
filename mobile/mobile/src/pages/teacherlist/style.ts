import { StyleSheet } from 'react-native'

const styles  = StyleSheet.create({
    container : { 
          flex: 1 , 
          backgroundColor: '#f0f0f7' , 
          
    }, 
    teacherlist: { 
        marginTop: -19,
        
    },
    searchform: { 
         marginBottom: 24,

    }, 
    label: { 
        color:'#d4c2ff',
        fontFamily: 'Poppins_400Regular',
         
    },
    input: { 
        height:54, 
        backgroundColor: '#fff', 
        borderRadius: 8 , 
        justifyContent: 'center' ,
        paddingHorizontal: 17, 
        marginTop: 4, 
        marginBottom: 17,
    },
    inputgroup: { 
        flexDirection: 'row',
        justifyContent: 'space-between', 

    },
    inputblock: { 
        width:'48%' 
    },
    submitbutton: { 
        backgroundColor: '#04d361',
        height: 56,
        borderRadius: 8 , 
        flexDirection: 'row' , 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    submitbuttontext: { 
         color: '#fff' ,
         fontFamily: 'Archivo_700Bold',
         fontSize: 15,
    }
})

export default styles