const Image = (props: any) => {
    const {
        alt,
        ...otherProps
    } = props;
    return (
        <img alt={alt} {...otherProps} />
    )
}

export default Image
