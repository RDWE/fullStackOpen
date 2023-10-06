const Notification = ({ message }) => { 
    if (message === null) { 
        return null
    }
    return ( 
        <div className='notice'>
            {message} 
        </div>
    )
}

const ErrorNotice = ({ message }) => {
    if (message === null) { 
        return null
    }
    return ( 
        <div className="error">
            {message}
        </div>
    )
}

export  { Notification, ErrorNotice };   