import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';
import Message from './Components/Message.js';
import Counter from './Components/Counter';
import ParentCom from './Components/ParentCom';
import NameList from './Components/NameList';
import LifeCycleA from './Components/LifeCycleA';
import FragmentDemo from './Components/FragmentDemo';
import PureComp from './Components/PureComp';
import ParentComp from './Components/ParentComp';
import RefsDemo from './Components/RefsDemo';
import FocusInput from './Components/FocusInput';
import HookCounter from './Hooks/HookCounter';
import HookCounterTwo from './Hooks/HookCounterTwo';
import HookCounterThree from './Hooks/HookCounterThree';
import HookCounterfour from './Hooks/HookCounterfour';
import HookCounterFive from './Hooks/HookCounterFive';
import HookCounterSix from './Hooks/HookCounterSix';
import MouseContainer from './Hooks/MouseContainer';
import ClassInterval from './Hooks/ClassInterval';
import HooksInterval from './Hooks/HooksInterval';
import HookDataFetch from './Hooks/HookDataFetch';
import ComponentC from './ContextAPI/ComponentC';
import {UserProvider,ChannelProvider} from './ContextAPI/UserContext';
import HookReducers from './Reducers/HookReducers';
import HookReducers2 from './Reducers/HookReducers2';
import HookReducers3 from './Reducers/HookReducers3';
import ComponentA from './Reducers/ComponentA';
import ComponentB from './Reducers/ComponentB';
import StateWithContext from './Reducers/StateWithContext';
import DataFetching from './Reducers/DataFetching';
import DataFetching2 from './Reducers/DataFetching2';
import Memos from './callBackhook/useMemo/Memos';
import Access from './callBackhook/useRefs/Access';
import ClassTimer from './callBackhook/useRefs/ClassTimer';
import HookTimer from './callBackhook/useRefs/HookTimer';
import Document from './Hooks/CustomHook/Document';
import CakeContainer from './React-redux/CakeContainer';
import {Provider} from "react-redux"
import Store from './React-redux/redux/Store';
import HookCakeContainer from './React-redux/HookCakeContainer';
import IceCreamContainer from './React-redux/IceCreamContainer';
import InputCakeContainer from './React-redux/InputCakeContainer';
import ItemContainer from './React-redux/ItemContainer';
import ClickCounter from './HOC/ClickCounter';
import HoverMouse from './HOC/HoverMouse';
import ClickCounterTwo from './Render Props/ClickCounterTwo';
import HoverCounterTwo from './Render Props/HoverCounterTwo';
import User from './Render Props/User';
import SCounter from './Render Props/SCounter'
import Dataget from './HTTP/Dataget';
import Datapost from './HTTP/Datapost';
import { UseState } from './React Render/UseState/UseState';
import { UseReducer } from './React Render/UseState/UseReducer';
import { ObjectUseState } from './React Render/UseState/ObjectUseState';
import { ParentOne } from './React Render/UseState/Optimization/ParentOne';
import ChildOne from './React Render/UseState/Optimization/ChildOne';
function App() {
  return (
    <div className="App">
      
      <ParentOne >
        <ChildOne />
        // here child component send as children props to remove unnessary child render
      </ParentOne>
      {/* <ObjectUseState /> */}
      {/* <UseReducer /> */}
      {/* <UseState /> */}
     
      {/* HTTP */}
        {/* <Datapost /> */}
       {/* <Dataget /> */}

     {/* render props */}
          {/* <ClickCounterTwo />
          <HoverCounterTwo /> */}
          {/* <User name="harshit" /> */}
          {/* <User name={()=>"harshit"} /> */}
          {/* <User render = {(isLogged)=> isLogged?"harshit":"shukla" } /> */}
           
           {/* <SCounter render={(count , increment)=> <ClickCounterTwo count={count} increment={increment} /> } />
           <SCounter render={(count , increment)=> <HoverCounterTwo count={count} increment={increment} /> } /> */}



         {/* hoc */}
           {/* <ClickCounter hname="rohit" />
           <HoverMouse /> */}
          

             {/* react-redux */}
             {/* <Provider store={Store} >
              <ItemContainer cake />
              <ItemContainer />
               <HookCakeContainer />
              <CakeContainer />
              <IceCreamContainer />
              <InputCakeContainer />
            </Provider> */}

          {/* <Document /> */}

          {/* <HookTimer /> */}
           {/* <ClassTimer /> */}
          {/* <Access /> */}
           {/* <Memos /> */}
       
         {/* <DataFetching2 /> */}

         {/* <StateWithContext />         */}

         {/* <HookReducers3 /> */}
         {/* <HookReducers2 /> */}
         {/* <HookReducers /> */}

       {/* <UserProvider value="Harshit" >
         now value is accessable in compoentc & all nested component  
          <ChannelProvider value="Shukla" >
            pass multiple values
             <ComponentC />
          </ChannelProvider>
       </UserProvider> */}

         {/* <HookDataFetch /> */}
         
        {/* <HooksInterval /> */}
        {/* <ClassInterval /> */}
        

       {/* <MouseContainer /> */}
          {/* <HookCounterSix /> */}
         {/* <HookCounterFive /> */}
         {/* <HookCounterfour /> */}
        {/* <HookCounterThree /> */}

       {/* <HookCounterTwo  /> */}
      {/* <HookCounter /> */}

       {/* <FocusInput /> */}
       {/* <RefsDemo /> */}
       
       {/* <ParentComp /> */}
      {/* <PureComp /> */}

      {/* <FragmentDemo /> */}

       {/* <LifeCycleA /> */}
      {/* <NameList /> */}

     {/* <ParentCom /> */}

     {/* <Counter /> */}

     {/* <Message /> */}
      

    {/* this is Functional based */}
      {/* <Greet name="Harshit"  lname="Shukla" >
        <p>This is Children Props</p> 
        <button>Action</button>
      </Greet> */}

      {/* <Greet name="Rohit" lname="shukla" /> */}

      {/* this is class based */}
      {/* <Welcome name="Harshit" lname="Shukla" /> */}

      {/* in which we return data with JSX & without JSX */}
      {/* <Hello /> */}

    </div>
  );
}

export default App;
