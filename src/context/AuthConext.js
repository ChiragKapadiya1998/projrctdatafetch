import CreateDataContext from './CreateDataContext';
import jsonPhota from '../api/Phota';
const readuce=(state,action)=>{
    switch(action.type){
        case 'get_data':
            return action.payload;
        // case 'post_data':
        //     return action.payload;
        default :
        return state;
    }
};
const getDataPost=dispatch=>{
    return async()=>{
        const responce=await jsonPhota.get('/users?page=2');
        dispatch({type:'get_data',payload:responce.data.data})
    }
}

// const postDataPost=dispatch=>{
//     return (item)=>{
//         dispatch({type:'post_data',payload:item})
//     }
// }
export const {Context,Provider}=CreateDataContext(
    readuce,
    {getDataPost},
    []
)
  