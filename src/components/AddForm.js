import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';

const AddForm = () => {
    const [name, setName] = useState("")
    const [tier, setTier] = useState("")
    const [amount, setAmount] = useState("")

    useEffect(() => {
        if (tier === "tier1") {
            setAmount(10000)
        } else if (tier === "tier2") {
            setAmount(20000)
        } else if (tier === "tier3") {
            setAmount(30000)
        }
    }, [tier])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!name || !tier || !amount) {
            swal({
                title: "Ooppss!",
                text: "All fields must be field",
                icon: "error",
                button: "Close!"
            });
            return;
        }

        let interest;
        let total;

        if (tier === 'tier1') {
            let result = (7/100)*amount;
            interest = result.toFixed(0);
            total = Number(amount)+Number(interest);
        } else if (tier === 'tier2') {
            let result = (12/100)*amount;
            interest = result.toFixed(0);
            total = Number(amount)+Number(interest);
        } else if (tier === 'tier3') {
            let result = (25/100)*amount;
            interest = result.toFixed(0);
            total = Number(amount)+Number(interest);
        }

        const id = `SG-${Math.floor(Math.random() * 1000000)}`;
        let data = { id, name, tier, amount, interest, total}

        if(localStorage.getItem('savings')) {
            let storeData = JSON.parse(localStorage.getItem('savings'));
            if(storeData.length >= 15) {
                swal({
                    title: "Ooppss!",
                    text: "Number of participants is complete! Please try again later!",
                    icon: "error",
                    button: "Close!"
                });
                return;
            }
            storeData.push(data)
            localStorage.setItem('savings', JSON.stringify(storeData));
        } else {
            let storeData = []
            storeData.push(data)
            localStorage.setItem('savings', JSON.stringify(storeData));
        }

        await swal({
            title: "Hurray!",
            text: "A new member has been added!",
            icon: "success",
            button: "OK!"
        });

        window.location.reload()
    }

    return (
        <div  className="border-grey form pd-25 round-8 mgt-30">
            <form onSubmit={handleSubmit}>
                <h3 className='mgb-20'>AJO APPLICATION FORM</h3>
                <div>
                    <label className='d-block fs-20'>Name</label>
                    <input
                        type="text"
                        className='border-grey pd-12 border-8'
                        placeholder='Enter your name'
                        name='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className='mgy-20'>
                    <div className='fs-20 mgb-8'>Price Plan</div>
                    <div className='d-flex mgr-10'>
                        <input
                            name="tier"
                            placeholder="Enter amount"
                            type="radio"
                            value="tier1"
                            defaultValue={tier}
                            id="tier1"
                            onChange={(e) => setTier(e.target.value)}
                        />
                        <label className='' htmlFor='tier1'>
                            Tier 1
                        </label>
                    </div>
                    <div className='d-flex mgr-10'>
                        <input
                            name="tier"
                            placeholder="Enter amount"
                            type="radio"
                            value="tier2"
                            defaultValue={tier}
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
                            defaultValue={tier}
                            onChange={(e) => setTier(e.target.value)}
                        />
                        <label htmlFor='tier3'>
                            Tier 3
                        </label>
                    </div>
                </div>

                <div className='mgb-20'>
                    <label className='d-block fs-20'>Amount</label>
                    <input
                        type="text"
                        className='border-grey pd-12 border-8'
                        placeholder='Amount'
                        value={tier === "tier1" ? "10000" : tier === "tier2" ? "20000" : tier === "tier3" ? "30000"  : null }
                    />
                </div>

                <div className='mgb-20'>
                    <label className='d-block fs-20'>Interest</label>
                    <input
                        type="text"
                        className='border-grey pd-12 border-8'
                        placeholder='Interest'
                        value={tier === "tier1" ? "700" : tier === "tier2" ? "2400" : tier === "tier3" ? "7500"  : null }
                        // value={interest}
                    />
                </div>

                <div className=''>
                    <label className='d-block fs-20'>Total</label>
                    <input
                        type="text"
                        className='border-grey pd-12 border-8'
                        placeholder='Total'
                        value={tier === "tier1" ? "10700" : tier === "tier2" ? "22400" : tier === "tier3" ? "37500"  : null }
                        // value={total}
                    />
                </div>
                <button style={{background: "blue", color: "#ffffff"}} type="submit" className='border-8 pdy-14 pdx-32 fs-24 fw-semi-bold mgt-15'>Join</button>
            </form>
        </div>
    )
}

export default AddForm;