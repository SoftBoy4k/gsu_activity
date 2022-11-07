export const FormField = ({text, name}) => {
    return (
        <label style={name === "password" || name === "passwordOneMore" ? {marginTop: "42px"} : {marginTop: "21px"}}>
            {text}:
            <input type="text" name={name} />
        </label>
    )
}