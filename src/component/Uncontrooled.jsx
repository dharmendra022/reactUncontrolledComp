import React,{useRef, useState} from 'react';

const Uncontrooled = () => {
    //  it like  ausestate only and its  preserved the value
    // no re render
    // same like hanadling dom

    const luckyName=useRef(null);
    const [show,setShow]=useState(false)

    const SubmitBtn=(e)=>{
        e.preventDefault();
        console.log(luckyName.current.value)
        const name=luckyName.current.value;
        name===""? alert ('plz fill the data'):setShow(true)


    }
  return (
      <>
          <h1>Uncontrolled Coomponent</h1>
          <form action="" onSubmit={SubmitBtn}>
              <label htmlFor="">Email</label>
              <input type="text" id='luckyName' ref={luckyName}/>
              <button>Submit</button>
          </form>
          <p>
              {show ? `Yor lucky name  is ${luckyName.current.value}` :""}
          </p>
      </>
  )
};

export default Uncontrooled;
