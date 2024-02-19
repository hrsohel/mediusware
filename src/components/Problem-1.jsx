import React, {useState} from 'react';

const Problem1 = () => {

    const [show, setShow] = useState('all');
    const [data, setData] = React.useState([])
    const [showdata, setShowData] = React.useState([])
    const [name, setName] = React.useState("")
    const [status, setStatus] = React.useState("")
    const ref = React.useRef(null)
    const handleClick = (val) =>{
        setShow(val);
        if(val === "active") {
            const filteredData = data.filter(value => value.status === val)
            setShowData(filteredData)
        }
        else if(val === "completed") {
            const filteredData = data.filter(value => value.status === val)
            setShowData(filteredData)
        }
        else {
            setShowData([...data.filter(value => value.status === "active"), ...data.filter(value => value.status === "completed"), ...data.filter(value => value.status !=="active" && value.status !== "completed").sort((a, b) => {
                if(a.status > b.status) return 1
                else if(a.status < b.status) return -1
                else return 0
            })])
        }
    }
    const submit = (e) => {
        e.preventDefault()
        const dataValue = [...data, {name, status}]
        setData(dataValue)
        setShowData(dataValue)
        ref.current.reset()
    }
    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form ref={ref} onSubmit={submit} className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Status" onChange={(e) => setStatus(e.target.value)}/>
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='all' && 'active'}`} type="button" onClick={()=>handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show==='active' && 'active'}`} type="button" onClick={()=>handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='completed' && 'active'}`} type="button" onClick={()=>handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                showdata?.map((value, index) => <tr key={index}>
                                    <td scope="col">{value.name}</td>
                                    <td scope="col">{value.status}</td>
                                </tr>)
                                
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;