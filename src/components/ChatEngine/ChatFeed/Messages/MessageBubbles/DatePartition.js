import React from 'react'

const months = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']

const DatePartition = props => {
    function getDate(date) {
        return date ? date.substr(0, 10) : null
    }

    function formatDate(date_time) {
        if (!date_time) return ''
        
        const year = date_time.substr(0, 4)
        const month = months[parseInt(date_time.substr(5, 2)) - 1]
        const day = date_time.substr(8, 2)

        var time = date_time.substr(11, 5)
        time = String(parseInt(time.substr(0, 2)) + 3) + ':' + time.substr(3, 2)

        return time + ', ' + month + ' ' + day + ', ' + year
    }

    const { lastCreated, created } = props

    const lastDate = getDate(lastCreated)
    const thisDate = getDate(created)

    if (lastCreated && lastDate === thisDate ) {
        return <div />
    }

    return (
        <div style={styles.dateText} className='ce-message-date-text'>
            { formatDate(created) }
        </div>
    )
}

export default DatePartition

const styles = {
    dateText: { 
        width: '100%', 
        textAlign: 'center',
        paddingTop: '4px',
        paddingBottom: '10px',
        fontSize: '15px',
        color: 'rgba(0, 0, 0, .40)'
    }
}
