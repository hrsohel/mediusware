import React from 'react';
import ModelA from './ModelA';
import ModelB from './ModelB';

const Problem2 = () => {
    const [data, setData] = React.useState([])
    const [modelA, setModelA] = React.useState(false)
    const [modelB, setModelB] = React.useState(false)
    const [modelC, setModelC] = React.useState(false)
    React.useEffect(() => {
        (async() => {
            const data = await fetch("https://contact.mediusware.com/api/contacts/")
            const res = await data.json()
            setData(res.results)
         })()
    }, [])
    const showComponent = React.useCallback((val) => {
        if(val === "modelA") setModelA(true)
        else if(val === "modelB") setModelB(true)
    }, [modelA, modelB])
    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                
                <div className="d-flex justify-content-center gap-3">
                <button className="btn btn-lg btn-outline-primary" onClick={() => showComponent("modelA")} type="button">All Contacts</button>
                <button className="btn btn-lg btn-outline-warning" onClick={() => showComponent("modelB")} type="button" >US Contacts</button>
                </div>
                {/* <div>
                    <button onClick={() => setModelA(true)}>Model A</button>
                    <button onClick={() => setModelB(true)}>Model A</button>
                </div> */}
                {
                    modelA ? <ModelA data={data} setModelA={setModelA} setModelB={setModelB}/> : <></>
                }
                {
                    modelB ? <ModelB data={data} setModelB={setModelB} setModelA={setModelA}/> : <></>
                }
            </div>
        </div>
    );
};

export default Problem2;