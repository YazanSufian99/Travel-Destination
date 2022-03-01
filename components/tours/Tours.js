const Tours = (props)=>{
    return(
        <>
        {
            props.city.map(city =>{
                return(
                  <div>
                    <h3>{city.name}</h3>
                    <p>{city.info}</p>
                    <h5>{city.price}</h5>
                    <img src={city.image} alt="" />
                  </div>
                )
                
            })
        }
        </>
    )
    };
    export default Tours;