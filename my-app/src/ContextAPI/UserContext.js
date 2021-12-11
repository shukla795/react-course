import React from "react";
 
 const UserContext = React.createContext('Codevolution')
 const ChannelContext = React.createContext();

 const UserProvider = UserContext.Provider
 const UserConsumer = UserContext.Consumer

 const ChannelProvider = ChannelContext.Provider
 const ChannelConsumer = ChannelContext.Consumer

 export {UserProvider , UserConsumer , ChannelProvider , ChannelConsumer}
//  export default UserContext
//  export default ChannelContext
 export {UserContext , ChannelContext}
//  export default ChannelContext 