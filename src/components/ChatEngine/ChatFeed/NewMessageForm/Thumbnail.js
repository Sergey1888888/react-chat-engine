import React, { useState, useEffect } from 'react'

import { CloseCircleTwoTone } from '@ant-design/icons'

const Thumbnail = props => {
    const [hovered, setHovered] = useState(false)
    const [blob, setBlob] = useState('')
    useEffect(() => {
      setBlob(URL.createObjectURL(props.file))
    }, [])
    return (
        <div 
            style={{ padding: '12px 6px', display: 'inline' }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            
            <img
                style={styles.imageSquare}
                alt={props.file ? props.file.name : ''}
                src={blob}
            />

            {
                
                <CloseCircleTwoTone 
                    style={styles.closeIcon} 
                    onClick={() => props.onRemove && props.onRemove()}
                />
            }
        </div>
    )
}

export default Thumbnail

const styles = {
    imageSquare: { 
        height: '108px', 
        width: '108px', 
        border: '1px solid #afafaf',
        borderRadius: '8px',
        objectFit: 'cover',
        display: 'inline',
    },
    closeIcon: {
        position: 'relative', 
        bottom: '91px', 
        right: '20px', 
        width: '0px', 
        cursor: 'pointer'
    }
}
