import '../styles/Custom-button.css'
function Custombutton(props){
    return(
        <div id='button' onClick={props.onpressed}>
            {props.title}
         </div>
    )
}
export default Custombutton