import React from 'react'
import { UserConsumer , ChannelConsumer } from './UserContext'


function ComponentF() {
    return (
        <div>
            <UserConsumer>
                {
                    (username)=>{
                        return (
                        <ChannelConsumer>
                            {
                                (channelName)=>{

                                    return <>hello {username} {channelName} </>
                                }
                            }
                        </ChannelConsumer>
                        )
                    }
                }
            </UserConsumer>
        </div>
    )
}

export default ComponentF

// userconsumer take function in parameter receive value & return jsx