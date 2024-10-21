export default function Banner({image, texte, page}) {
    let nameClass="";
            if(page==="Home"){
                nameClass = "banner-component__Img__Home"
            } else {
                nameClass = "banner-component__Img__About"
            }
            console.log(nameClass)
            return (
                <div className="banner-component">
                    <img className={nameClass} src={image} alt='Bannière' />
                    <p className="banner-component__Text">{texte}</p>
                </div>
            );

}