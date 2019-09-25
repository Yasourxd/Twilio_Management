const SET_NAVBARTITLE = "SET_NAVBARTITLE";

function setNavbarTitle(title){
    return{
        type: SET_NAVBARTITLE,
        title
    }
}

export default setNavbarTitle;