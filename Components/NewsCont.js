
import './Newscont.css'
import NewsCard from './NewsCard';


function Newscont(props) {
    const contrynews = props.contrynews;

    console.log("i ma inside the NewsContainer ")
    console.log(contrynews);
    const articles=contrynews.articles;
    console.log("this i Articles nes data")
    console.log(articles)
    return (
        <div className='Newscont'>
            {/* <h1 className="contheading"> News is here</h1> */}
        
            {
                articles.map((onenews)=><NewsCard onenews={onenews}></NewsCard> )
                   
            }
    
        </div>
    );
}

export default Newscont;
