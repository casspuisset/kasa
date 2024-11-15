export default function Card({ title, cover }) {
    const componentStyle = {
        backgroundImage: `url(${cover})`,
        backgroundPosition: `center`
    }

    return (
        
        <div className="card-component"
            style={componentStyle}
        >
            <p className="card-component__Title">{title}</p>
        </div>
    );

}