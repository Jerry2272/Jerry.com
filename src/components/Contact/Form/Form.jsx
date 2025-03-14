import React from 'react'

function Form() {
  return (
    <div className="md:w-[55%] md:px-[2em]" >
        <form>
            <div className="inputControl">
            <input type="text" placeholder='Your Full Name' />
            <input type="email" placeholder='Enter you Email Address' />
            </div>
            <textarea name="" id="" cols="30" rows="10" placeholder='what is your Idea ablout' className='text-zinc-950'></textarea>
            <button className='text-white rounded-3xl'>Send message</button>
        </form>
    </div>
  )
}

export default Form