import './FormInput.css';
const Input=(props)=>{
    return(
        <>
         <div className=" mb-3 col-6 col-md-12 rounded-pill gap-5">
                            {/* <i className={`${props.icon} position-absolute z-3 top-50 translate-middle-y mx-1 text-black`}></i> */}
                            <label htmlFor="Email" className='align-self-start'>{props.label}</label>
                            <input id="Email" type={props.type} onChange={(e)=>props.setUSerData(e)} name={props.input_name} className="form-control input-lg border-1 px-3 py-3 rounded-pill Teal-bor-col" placeholder={props.placeholder} aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        </>
    )
}


export default Input