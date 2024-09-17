function Button(props) {
    return(
        <button className='bg-transparent rounded-full border-[2px] border-white px-6 py-2 text-white text-xl opacity-80 font-primaryFont'>
            {props.title}
        </button>
    );
}

export default Button;