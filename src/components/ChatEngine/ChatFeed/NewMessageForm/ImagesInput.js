import React, { useState } from 'react';

import { PaperClipOutlined } from '@ant-design/icons'

const ImagesInput = props => {
    const [state, setState] = useState({
        hovered: false,
        files: []
    })

    function onSelect(event) {
        console.log("event2", Array(event.target.files))
        let checkedFiles = []
        const files = Array(event.target.files)

        files.map((file) => {
            if (file) { checkedFiles.push(file) }
        })
        
        props.onSelectFiles &&  props.onSelectFiles(files)
    }

    return (
        <form
            className="uploader"
            encType="multipart/form-data"
            style={{ height: '0px' }}
        >
            <label
                htmlFor="files"
                id='upload-document-button'
            >
                <PaperClipOutlined 
                    onMouseEnter={() => setState({ ...state, hovered: true })}
                    onMouseLeave={() => setState({ ...state, hovered: false })}
                    style={{
                        ...{ cursor: 'pointer', position: 'absolute', bottom: '20px', right: '63px', fontSize: '18px' },
                        ...{ color: state.hovered ? '#69c0ff' : '#1890ff' }
                    }}
                />
            </label>

            <input
                multiple
                id="files"
                accept="image/x-png,image/gif,image/jpeg"
                style={{ visibility: "hidden" }}
                type="file"
                onChange={(e) => onSelect(e)} 
            />
        </form>
    );
}

export default ImagesInput
