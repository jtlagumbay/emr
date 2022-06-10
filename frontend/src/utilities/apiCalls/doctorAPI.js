import { postAPICall } from './axiosCalls';

const API_URL = "emr/api"

export const loginDoctor = async (formData) => {
  try {
      const response = await postAPICall('/doctors/login', {
          username: formData.username,
          password: formData.password,
        });
      // console.log(response);
      return ({data:response});   
  } catch (error) {
    // console.log(error)
      return ({error: error.response});
  }
}

export const getAllDoctors = async()=>{
  try{
    const response = await postAPICall('/doctors/getAll',{})
    return({data:response})
  }catch(error){
    console.log(error)
    return({error:error})
  }
}