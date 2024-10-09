export default function Banner() {
    return (
        function Banner({image, texte }) {
            return (
                <div className="banner-component">
                    <img className="banner-component__Img" src={image} alt='Bannière' />
                    <p className="banner-component__Text">{texte}</p>
                </div>
            );
        }
    )
}