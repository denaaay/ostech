function Button(props) {
    const handleClick = () => {
        if (props.id === 'wa') {
            window.open('https://wa.me/+6281298673656', '_blank');
        }
    }

    return(
        <button className='bg-transparent rounded-full border-[2px] border-white px-6 py-2 text-white text-xl opacity-80 font-primaryFont hover:opacity-100 hover:text-secondaryColor hover:border-secondaryColor transition-all duration-300 mp:text-base mp:py-1 mp:px-2' onClick={handleClick}>
            {props.title}
        </button>
    );
}

export default Button;