import {DATA_FATCH} from '../action/index';

const initalState ={
    datafatch:[]


}

const datareducer= (state =initalState,action) =>{
    switch(action.type){
        case "DATA_FATCH":
            return {
               ...state,
                name:action.Name,
                username:action.UserName,
                email:action.Email,
                phone:action.Phone,
                street:action.Street,
                suite:action.Suite,
                city:action.City,
                zipcode:action.Zipcode,
                website:action.WebSite
            }
          default :
          return state;
    }
}
export default datareducer;