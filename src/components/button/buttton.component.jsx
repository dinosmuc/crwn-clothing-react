import "./button.styles.scss";

//default, inverted, google sign in//


const BUTTON_TYPE_CLASSES = {
    google: "google-sogn-in",
    inberted: "inverted"
}

const Button = ({children, buttonType, ...otherProps}) => {
    return <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} >{children}</button>;
};

export default Button;