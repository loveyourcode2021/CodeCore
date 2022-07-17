import NewsListItems from "./news_list_item"

const NewsList =  (props) => {

    const news = props.news.map((item) => (
        <NewsListItems item = {item}/>
    ))
    
    return (
        <>
            <div>New List</div>
            <div>
                {news}
                {props.children}
            </div>
            
        </>
    )
}

export default NewsList;