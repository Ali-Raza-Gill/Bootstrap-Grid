import React from 'react'

export default function Bootstrap() {
    return (
        <div className="container ">
            <div className="row py-5 ">
                <div className="col-xm-12 col-sm-12 col-md-6 col-lg-4 bg-secondary text-white d-flex justify-content-center">
                    <h3 className='bg-info mx-5 mb-0 '>Ali Raza</h3>
                    <h3 className='bg-dark mx-5 mb-0'>Ali Raza</h3>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 bg-success text-white ">
                    <h3>Dawood</h3>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 bg-primary text-white">
                    <h3>Nouman</h3>
                </div>
            </div>


            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-3 bg-primary text-white">
                    <h3>Dawood</h3>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3 bg-secondary text-white">
                    <h3>Nouman</h3>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3 bg-primary text-white">
                    <h3>Nouman</h3>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3 bg-success text-white">
                    <h3>Ali Raza</h3>
                </div>
            </div>


            <div className="row py-5">
                <div className="col-sm-12 col-md-6 col-lg-4 bg-success text-white">
                    <h3>Nouman</h3>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 bg-primary text-white">
                    <h3>Dawood</h3>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 bg-secondary text-white">
                    <h3>Gill</h3>
                </div>
            </div>

            <div className="row mt-5 bg-success " style={{ height: "150px" }}>
                <div className="col">
                    <h1>This is 1st</h1>
                </div>
            </div>
            <div className="row my-2 " style={{ minHeight: "150px" }}>
                <div className="col-sm-12 col-md-7 col-lg-7 bg-primary ">
                    <div className='mt-2 gap-2 d-flex justify-content-around'><h1 className='bg-info'>This is the Reason  </h1>
                        <h1 className='bg-danger'>This is the Reason   </h1></div>
                    <div ><h1 className='bg-danger'>2nd   </h1></div>
                    <div ><h1 className='bg-danger'>2nd   </h1></div>
                </div>
                <div className="col-sm-12 col-md-5 col-lg-5 bg-info ">
                    <div ><h1>2nd   </h1></div>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-sm-12 col-md-7 col-lg-7  bg-dark" >
                    <div className="row " style={{ minHeight: "65px" }}>
                        <div className="col-sm-12 my-sm-1 col-md-5 mx-md-3 my-md-2 col-lg-3 bg-info">
                            <p>hello bootstrap</p>
                        </div>
                        <div className="col-sm-12 my-sm-1 col-md-5 mx-md-3 my-md-2 col-lg-3 bg-secondary">
                            <p >hello bootstrap</p>
                        </div>
                        <div className="col-sm-12 my-sm-1 col-md-5 mx-md-3 my-md-2 col-lg-3 bg-info">
                            <p>hello bootstrap</p>
                        </div>
                        <div className="col-sm-12 my-sm-1 col-md-5 mx-md-3 my-md-2 col-lg-3 bg-danger">
                            <p>hello bootstrap</p>
                        </div>
                    </div>
                    <div className="row" style={{ minHeight: "65px" }}>
                        <div className="col bg-danger text-white">
                            hello bootstrap
                        </div>
                    </div>
                    <div className="row" style={{ minHeight: "65px" }}>
                        <div className="col bg-info">
                            hello bootstrap
                        </div>
                    </div>
                    <div className="row" style={{ minHeight: "65px" }}>
                        <div className="col bg-danger">
                            hello bootstrap
                        </div>
                    </div>
                    <div className="row" style={{ minHeight: "65px" }}>
                        <div className="col bg-info">
                            hello bootstrap
                        </div>
                    </div>
                    
                </div>
                <div className="col-sm-12 col-md-5 col-lg-5 bg-success">
                    <div className="row" style={{ minHeight: "100px" }}>
                        <div className="col m-3 my-2 mb-0 bg-dark text-white">
                            <p>Raza</p>
                        </div>
                    </div>
                    <div className="row m-1 my-2 d-flex gap-3" style={{ minHeight: "100px" }}>
                        <div className="col bg-info"><p>hello</p></div>
                        <div className="col bg-danger"><p>hello</p></div>
                    </div>
                    <div className="row m-1 my-2 d-flex gap-3" style={{ minHeight: "100px" }}>
                        <div className="col bg-secondary"><p>grid</p></div>
                        <div className="col bg-primary"><p>grid</p></div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col bg-info"><h1>hhhhh</h1></div>
                <div className="col bg-primary"><h1>hhhhh</h1></div>
            </div>
        </div>
    )
}
