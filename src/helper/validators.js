
import{helpers} from 'vuelidate/lib/validators'


export const supportedFileType= (value) =>{

    if(!helpers.req(value)) return true
  
   const allowedFormat= ['jpg','png', 'svg', 'jpeg'];
  
   const extension= value.split('.').pop();

   return allowedFormat.includes(extension)

}