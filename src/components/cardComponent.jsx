export default function Card() {
    return (
        function Card({ title, cover }) {
            return (
                <div className="card-component__Wrapper">
                    <img src={cover} alt={title} className="card-component__Image" />
                    <div className="card-component_Overlay"></div>
                    <p className="card-component_Title">{title}</p>
                </div>
            );
        }
    )
}