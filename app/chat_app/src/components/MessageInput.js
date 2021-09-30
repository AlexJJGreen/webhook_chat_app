
const MessageInput = (props) => {
    return (
        <div>
            <label htmlFor={props.messageInputName}>{props.messageInputName}</label>
            <input type="text" name={props.messageInputName} id={props.messageInputID} />
        </div>
    )
}

export default MessageInput
