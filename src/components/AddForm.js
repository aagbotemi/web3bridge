import React, { useEffect, useState } from 'react'

const AddForm = () => {
    const [name, setName] = useState('')
    const [tier, setTier] = useState('')
    const [amount, setAmount] = useState(0)

    const [userData, setUserData] = useState([])


    useEffect(() => {
        if (tier === "tier1") {
            setAmount(10000)
        } else if (tier === "tier2") {
            setAmount(20000)
        } else if (tier === "tier3") {
            setAmount(30000)
        }
      
    }, [tier])
    

    const handleSubmit = (e) => {
        e.preventDefault();


        let data = { name, tier, amount}
        console.log(data);

        setUserData(data)
        console.log(userData);
    }


  return (
    <div  className="border-grey form pd-25 round-8 mgt-30">
        <form onSubmit={handleSubmit}>
            <h3 className='mgb-20'>AJO APPLICATION FORM</h3>
            <div>
                <label className='d-block'>Name</label>
                <input
                    type="text"
                    className='border-grey pd-12 border-8'
                    placeholder='Enter your name'
                    onChange={(e) => setName(e.target.value)}
                    />
            </div>




            <div className='d-flex mgy-20'>
                <div className='d-flex mgr-10'>
                    <input
                        name="tier"
                        placeholder="Enter amount"
                        type="radio"
                        value="tier1"
                        id="tier1"
                        onChange={(e) => setTier(e.target.value)}
                        />
                    <label htmlFor='tier1'>
                        Tier 1
                    </label>
                </div>
                <div className='d-flex mgr-10'>
                    <input
                        name="tier"
                        placeholder="Enter amount"
                        type="radio"
                        value="tier2"
                        id="tier2"
                        onChange={(e) => setTier(e.target.value)}
                        />
                    <label htmlFor='tier2'>
                        Tier 2
                    </label>
                </div>
                <div className='d-flex '>
                    <input
                        name="tier"
                        placeholder="Enter amount"
                        type="radio"
                        value="tier3"
                        id="tier3"
                        onChange={(e) => setTier(e.target.value)}
                        />
                    <label htmlFor='tier3'>
                        Tier 3
                    </label>
                </div>
            </div>

            <div>
                <label className='d-block'>Amount</label>
                <input
                    type="text"
                    className='border-grey pd-12 border-8'
                    placeholder='Amount'
                    value={tier === "tier1" ? "10000" : tier === "tier2" ? "20000" : tier === "tier3" ? "30000"  : null }
                    // onChange={(e) => setAmount(e.target.value)}
                 />
            </div>
            <button style={{background: "blue", color: "#ffffff"}} type="submit" className='border-8 pd-14 mgt-15'>+ Add Item</button>
    
        </form>
            
    </div>
  )
}

export default AddForm