import SignIn from "../../../public/signIn_logo.svg";
import youtubeLogo from "../../../public/youtube_logo.svg";
import hamburger from "../../../public/hamburger.svg";
const Header: React.FC = () => {
    return (
        <div className="flex">
            <div style={{ fill: "black"}} className="flex flex-1 h-min">
                <img src={hamburger} alt="" />
                 <img src={youtubeLogo} alt="logo" />
            </div>
            <div className="flex-2 ">
                <input name="search-input" type="text" className="w-[80%] p-2 border-2" placeholder="Search"/>
                <button className="border-black border-l-2">Search</button>
            </div>
            <div className="flex flex-1 flex-row">
                <img src={SignIn} alt="logo"/>
                <button>Sign In</button>
            </div>
            
        </div>
    )
};

export default Header;