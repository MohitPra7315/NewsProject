
import Links from "./Links";
function SideNavbar(props) {
    const countrydata = props.countrydata;
    const catagry =props.catagry;
    const setCatagry=props.setCatagry;

    return (

        <div>
            {
                countrydata.map((country) => {
                    return (<Links country={country}  catagry={catagry} setCatagry={setCatagry}  ></Links>)})
            }

        </div>

    )
}

export default SideNavbar;