const Input=(props)=>{
    return(
        <>
         <div class="input-group mb-3 col-6 col-md-12 rounded-pill position-relative border border-1 py-2 bg-white">
                            <i class={`${props.icon} position-absolute z-3 top-50 translate-middle-y mx-1`}></i>
                            <input type="text" class="form-control border-0 ms-5 rounded-pill" placeholder={props.placeholder} aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        </>
    )
}


export default Input