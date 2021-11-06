import React from "react";


const Toggle = ({handleNavToggle}) => {

    const [isActive, setActive] = React.useState<boolean>(false);

    const ToggleClass = () => {
        setActive(!isActive);
    };



    return (
        <div className="toggle-wrap">
            <div className={isActive ? "hamburguer-wrap active" : "hamburguer-wrap inactive"}>
                <div className={isActive ? "hamburger active" : "hamburger inactive"}  onClick={() => { handleNavToggle(); ToggleClass();} }>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </div>

    )
  
    
}

export default Toggle;

