import { connect } from "react-redux";
import { compose } from "redux";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogsReducer";
import { WithAuthRedirect } from "../WithAuthRedirect/WithAuthRedirect";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogPage.dialogs,
        messages: state.dialogPage.messages,
        newTextMessage: state.dialogPage.newTextMessage
    }
} 

let mapStateToDispatch = (dispatch) => {
    return {
    sendMessage: () => {
        dispatch(addMessageActionCreator())
    },

    updateNewMessageText: (text) => {
        let action = updateNewMessageTextActionCreator(text)
        dispatch(action)
    }
}}

export default compose (connect(mapStateToProps, mapStateToDispatch),
WithAuthRedirect) (Dialogs)