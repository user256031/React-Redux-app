import ProfileContainer from "./Profile-Container";
import {useParams} from "react-router-dom";

let ProfileParamsContainer = () => {
    let {userId} = useParams();
    return (
        <ProfileContainer userId={userId}/>
    )
}
export default ProfileParamsContainer;