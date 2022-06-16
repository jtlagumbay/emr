import axios from 'axios';


//Common Utility Functions


export const refreshPage = () => {
    window.location.reload();
}

export const getTime = (date) => {
    return  date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
}

export const subtractMonths = (numOfMonths, date = new Date()) => {
   date.setMonth(date.getMonth() - numOfMonths);
   return date.toISOString().split('T')[0];
}

export const getTodayDate = () => {
    return new Date();
}

export const getTodayDateISO = () => {
    let date =  new Date();
    return date.toISOString().split('T')[0]
}

export const getAge = (dateString) => {
    var today = new Date();
    var birthdate = new Date(dateString);
    var age = today.getFullYear() - birthdate.getFullYear();
    var m = today.getMonth() - birthdate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }
    return age;
}

export const formatDate = (date) => {
    var formatDate = new Date(date);
    var stringDate = formatDate.toDateString().split(" ");

    return stringDate[1] + " " + stringDate[2] + ", " + stringDate[3]
}

export const formatDateSlash = (date) => {
    var stringDate = date.split("-")

    return stringDate[2] + "/" + stringDate[3] + "/" + stringDate[1]
}

export const formatMDY = (date) => {
    // console.log(date)
    var stringDate = date.split("-")
    // console.log(stringDate)
    return stringDate[1] + "-" + stringDate[2] + "-" + stringDate[0]
}

// export const formatYDM = (date) => {
//     return(moment(date).format('YYYY-MM-DD'))
// }

export const validateEmail = (email) => {
    if(email === "") {
        return true
    } else {
        var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
        return String(email).search (filter) != -1;
    }
};

export const validateContact = (num) => {
    var mobileFilter = /((^(\+)(\d){12}$)|(^\d{11}$))/;
    var telFilter = /^[0-9]+(-[0-9]+)+$/;

    if(String(num).search(mobileFilter) != -1 || String(num).search(telFilter) != - 1) {
        return true
    } else {
        return false
    }
}

export const formatNum = (num) => {
    return parseFloat(Math.round(num * 100) / 100).toFixed(2);
}



/***************************
 * Local Storage Utilities
 ***************************/
export const getUserType = () =>{
  const type = localStorage.getItem("type");
  if(type) return type;
  else return null;
}
export const getDoctorInfo = ()=>{
  let info = {};
  info._id = localStorage.getItem("doc_id")
  info.name = localStorage.getItem("doc_name")
  info.specialization = localStorage.getItem("doc_specialization")
  if(info) return info;
  else return null;
}


export const getPatientInfo = ()=>{
  
  let info={};
  info.id = localStorage.getItem("px_id")
  info.name = localStorage.getItem("px_name")
  info.bday = localStorage.getItem("px_b_day")
  info.age =  getAge(localStorage.getItem("px_b_day"))
  info.sex = localStorage.getItem("px_sex")
  info.contact_no = localStorage.getItem("px_contact_no")
  info.emergency_name = localStorage.getItem("px_emergency_name")
  info.emergency_contact = localStorage.getItem("px_emergency_no")
  if(info) return info;
  else return null;
}







// //return user data from local storage
// export const getUser = () => {
//     const userStr = localStorage.getItem('user');
//     if(userStr) return JSON.parse(userStr);
//     else return null;
// }

// //return role id from local storage
// export const getRoleId = () => {
//     return localStorage.getItem('role_id').replace(/['"]+/g, '') || null;
// }

// //return token from local storage
// export const getToken = () => {
//     return localStorage.getItem('token') || null;
// }

// //return token from local storage
// export const getCommissionedBy = () => {
//     return localStorage.getItem('commissioned_by') || null;
// }

// export const getTokenExpiry = () => {
//     return localStorage.getItem('token_expiry') || null;
// }

// export const getBranch= () => {
//     return localStorage.getItem('branch') || null;
// }

// //remove token from local storage
// export const removeUserSession = () => {
//   localStorage.clear()
//     // localStorage.removeItem('token');
//     // localStorage.removeItem('user');
//     // localStorage.removeItem('token_expiry');
//     // localStorage.removeItem('role');
//     // localStorage.removeItem('role_id');
//     // localStorage.removeItem('branch');
//     refreshPage();
// }

// //set the token and user from local storage
// export const setUserSession = (token, user) => {
//     localStorage.setItem('token', token);
//     localStorage.setItem('user', JSON.stringify(user));
// }

