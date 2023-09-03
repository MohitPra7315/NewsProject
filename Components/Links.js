import './Links.css';


function Links({ country, catagry, setCatagry }) {



    // const country=props.country;
    function getsmallnamecountHandler(sncountry) {
        console.log(sncountry)
        setCatagry(sncountry);

    }



    return (
        <div className="aside">

            <p onClick={() => { getsmallnamecountHandler(country.sn) }} className="links"   >  <span>{country.fn}</span></p>



        </div>

    )
}
export default Links