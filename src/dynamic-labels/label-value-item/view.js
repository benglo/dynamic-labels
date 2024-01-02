export default (state) => {
    const {
        properties: {
            label,
            value,
    }
    } = state;

    return (
        <div className="item">
            <p className="item__label">{label}</p>
            <p className="item__value">{value}</p>
        </div>
    );
};