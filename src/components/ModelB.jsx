import React from 'react'

function ModelA({data, setModelA, setModelB}) {
    const [fullData, setFullData] = React.useState(data)
    const [checked, setChecked] = React.useState(false)
    const showEvens = (e) => {
        if(!checked) {
            const evenData = fullData.filter(value => value.id % 2 === 0)
            setFullData(evenData)
        }
        else {
            setFullData(data)
        }
    }
  return (
    <>
        <div style={{width: "100%",minHeight: "100%", position: "absolute", left: 0, top: 0, background: "grey",}}>
        
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", gap: "4px", marginTop: "2rem"}}>
            <button onClick={() => {
                setModelA(true)
                setModelB(false)
            }} style={{borderRadius: ".5rem", background: "white", color: "#46139f", padding: ".5rem 1rem", fontSize: "15px",outline: "none",}}>All Contacts</button>
            <button onClick={() => {
                setModelA(false)
                setModelB(true)
            }} style={{borderRadius: ".5rem",color: "#ff7f50", padding: ".5rem 1rem", fontSize: "15px",outline: "none",}}>US Contacts</button>
            <button onClick={() => {
                setModelA(false)
                setModelB(false)
            }} style={{borderRadius: ".5rem", background: "#46139f", padding: ".5rem 1rem", fontSize: "15px",outline: "none", color: "white"}}>Cancel</button>
        </div>
        <table align='center' style={{margin: "2rem 0", width: "100%", background: "white"}}>
            <thead style={{textAlign: "center"}}>
                <tr>
                    <th>ID</th>
                    <th>Phone</th>
                    <th>Country</th>
                </tr>
            </thead>
            <tbody style={{textAlign: "center"}}>
                {
                    fullData.filter(value => value.country.name === "United States").map(value => <tr key={value.id} style={{borderBottom: "1px solid black"}}>
                            <td style={{padding: "5px"}}>{value.id}</td>
                            <td style={{padding: "5px"}}>{value.phone}</td>
                            <td style={{padding: "5px"}}>{value?.country?.name}</td>
                        </tr>)
                }
                <tr>
                    <td>
                    <input onClick={showEvens} onChange={(e) => setChecked(e.target.checked)} type="checkbox" name="check" id="check" />
                    <label onClick={showEvens} style={{marginLeft: "5px"}} htmlFor="check">Only Even</label>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
    </>
  )
}

export default React.memo(ModelA)
