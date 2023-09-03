
import './NewsCard.css'

const NewsCard = (props) => {
    const Newsdata = props.onenews;
    console.log("I m inside NEwsCard ")
    console.log(Newsdata);
    return (
        <div className="CardBox">

            <div>
                <img src={Newsdata.urlToImage}></img>

            </div>
<div>
    
</div>
        </div>

    );
}

export default NewsCard;