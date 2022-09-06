import './PageTitle.css'

const PageTitle = ({title}) => {
    return(
        <div className="titleContainer">
            <h1>{title}</h1>
            <div className="coloredBar"></div>
        </div>
    );
}   

export default PageTitle;