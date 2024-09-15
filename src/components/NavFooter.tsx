import { useNavigate } from "react-router-dom";
import homebutton from '../images/Vector.png'
import user from '../images/user_3.png'
import gear from '../images/gear-24.png'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

function NavBar() {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/Home');
    };

    const handleSettingPage = () => {
        // clerk.logout();
        navigate('/Home');
    };

    return (
        <header className="logo-bar">
            <div className="logo-bar-left" onClick={handleLogoClick}>
                <img src={homebutton} alt="Home" style={{ width: '40px', height: '40px', cursor: "pointer", marginLeft: 60}} />
            </div>
            {/* <div className="logo-bar-left">
                <img src={user} alt="Home" style={{ width: '40px', height: '40px', cursor: "pointer" }} />
            </div> */}
            <div className="logo-bar-left" onClick={handleSettingPage}>
                <div style = {{marginRight: '50px'}}>
                    <UserButton afterSignOutUrl="/login"/>
                </div>
                {/* <img src={gear} alt="Home" style={{ width: '40px', height: '40px', cursor: "pointer", marginRight: 60 }} /> */}
            </div>
        </header>
    );
}

export default NavBar;
