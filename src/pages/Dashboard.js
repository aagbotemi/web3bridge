import React, { useEffect, useState } from 'react'
import swal from 'sweetalert';

function commaSeperator(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Dashboard = () => {
    const [totalAmount, setTotalAmount] = useState(0)
    const [totalInterest, setTotalInterest] = useState(0)
    const [contributors, setContributors] = useState([])
    
    useEffect(() => {
        TotalInterest()
        TotalAmount()
    })

    useEffect(() => {
        getDataFromLocalStorage()
    }, [])

    const getDataFromLocalStorage = () => {
        let data = JSON.parse(localStorage.getItem('savings'));
        setContributors(data)
    }
    
    const TotalAmount = () => {
        if (Array.isArray(contributors) && contributors.length) {
            return setTotalAmount(contributors.reduce((acc, obj) => {
                let amt = obj.amount
                return Number(acc) + Number(amt);
            }, 0))
        }
    }
    
    const TotalInterest = () => {
        if (Array.isArray(contributors) && contributors.length) {
            return setTotalInterest(contributors.reduce((acc, obj) => {
                let interestAmt = obj.interest
                return acc + Number(interestAmt)
            }, 0));
        }
    }

    const handleRemove = (id) => {
        if(window.confirm("Are you sure you want to remove this participant!")) {
            let data = JSON.parse(localStorage.getItem('savings'));
            const res = data.filter(value => value.id !== id);
            localStorage.setItem('savings', JSON.stringify(res));
            swal({
                title: "OMG!",
                text: "Participant has been removed! Refresh page to see updated data!",
                icon: "error",
                button: "Close!"
            });
        }
        return;
    }
    
    const renderData = () => {
        return Array.isArray(contributors) && contributors.length ? contributors.map((contributor, index) => (
            <tr key={contributor?.id}>
                <td>{index+1}</td>
                <td>{contributor?.name}</td>
                <td>{contributor?.tier?.charAt(0).toUpperCase() + contributor?.tier?.slice(1)}</td>
                <td>
                    &#8358;{commaSeperator(Number(contributor?.amount))}
                </td>
                <td>
                    &#8358;{commaSeperator(Number(contributor?.interest))}
                </td>
                <td>
                    &#8358;{commaSeperator(Number(contributor?.total))}
                </td>
                <td>
                    <button 
                        onClick={() => handleRemove(contributor?.id)} 
                        style={{background: "blue", color: "#ffffff"}}
                        className='border-8 pdy-4 pdx-8 fs-15'
                    >Withdraw funds</button>
                </td>
            </tr>
        )) : (
            <tr>
                <td colSpan={7} className="text-center">
                    No data!
                </td>
            </tr>
        )
    }


    return (
        <div className='mgt-50 pdb-50'>

            <div className='d-flex card'>
                <div className='border-grey border-8 pd-14'>
                    <h5 className='fs-20'>Total Amount Invested</h5>
                    <div className='mgt-16 fs-42 fw-semi-bold'>
                        &#8358;{commaSeperator(totalAmount)}
                    </div>
                </div>
                <div className='mgl-20 border-grey border-8 pd-14'>
                    <h5 className='fs-20'>Total Amount with Interest </h5>
                    <div className='mgt-16 fs-42 fw-semi-bold'>
                        &#8358;{commaSeperator(totalInterest + totalAmount)}
                    </div>
                </div>
            </div>

            <div className='table-data mgy-50'>
                <h3 className='fs-32'>Investors</h3>
                <table>
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>Name</th>
                            <th>Tier</th>
                            <th>Amount</th>
                            <th>Interest</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderData()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Dashboard