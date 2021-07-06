export default function Card(props) {
    const { picture, title, firstName, lastName, email } = props.user;
    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    const fullName = `${capitalize(title)}. ${firstName} ${lastName}`;
    return (
        <div className="col user-card">
            <div className="card">
                <div className="image-container">
                    <img className="image-box" src={picture} alt={fullName} />
                </div>
                <div className="full-name">{fullName}</div>
                <div className="title">{email}</div>
            </div>
        </div>
    );
}
