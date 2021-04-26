import React, { useContext } from 'react'

import { ChatEngineContext } from '../../Context'

import { stringToColor } from '../Utilities/colorMapping'

const Typers = props => {
    const { conn, activeChat, typingCounter, chats, currentChat } = useContext(ChatEngineContext)
    const typers = typingCounter && typingCounter[activeChat] ? typingCounter[activeChat] : []
    const chat = chats && chats[currentChat]
    
    if (!conn || conn === null) return <div />

    if (props.renderIsTyping) { return props.renderIsTyping(typers) }

    return (
        <div>
            {
                Object.keys(typers).map((username, index) => {
                    if (conn.userName !== username && props.currentTime < typers[username] + 2000) {
                        return (
                            <div 
                                key={`typer_${index}`} 
                                style={{ color: stringToColor(username), padding: '2px', paddingLeft: '12px' }}
                            >
                                {`${chat.people.filter(person => console.log(person))} печатает...`}
                            </div>
                        )

                    } else {
                        return <div key={`typer_${index}`} />
                    }
                })
            }
        </div>
    )
}
export default Typers
