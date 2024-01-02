export default (state) => {
    const {
        properties: {
            separatorColor,
            separatorWidth,
        }
    } = state;
    return (
        <div className="item-separator" style={{ width: separatorWidth, backgroundColor: separatorColor }} />
    );
};