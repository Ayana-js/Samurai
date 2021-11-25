import { connect } from "react-redux";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogsReducer";
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

const DialogsContainer = connect(mapStateToProps, mapStateToDispatch)(Dialogs)
export default DialogsContainer;