import React, { useEffect, useState } from 'react'

const contributors = [
    {
        id: 1,
        name: "Stephen James",
        tier: "Tier 1",
        amount: 10000,
        interest: 10700
    },
    {
        id: 2,
        name: "Gbenga James",
        tier: "Tier 1",
        amount: 10000,
        interest: 10700
    },
    {
        id: 3,
        name: "Stephen Tunde",
        tier: "Tier 3",
        amount: 30000,
        interest: 37500
    },
    {
        id: 4,
        name: "Stephen Sikiru",
        tier: "Tier 3",
        amount: 30000,
        interest: 37500
    },
    {
        id: 5,
        name: "Kyle Segun",
        tier: "Tier 2",
        amount: 20000,
        interest: 22400
    },
    {
        id: 6,
        name: "Omma Buhari",
        tier: "Tier 1",
        amount: 10000,
        interest: 10700
    },
    {
        id: 7,
        name: "Tosin WIlliams",
        tier: "Tier 3",
        amount: 30000,
        interest: 37500
    },
    {
        id: 8,
        name: "Jide Kolapo",
        tier: "Tier 2",
        amount: 20000,
        interest: 22400
    },
    {
        id: 9,
        name: "Ajisafe Emeka",
        tier: "Tier 2",
        amount: 20000,
        interest: 22400
    },
    {
        id: 10,
        name: "Kunle Komolafe",
        tier: "Tier 2",
        amount: 20000,
        interest: 22400
    },
    {
        id: 11,
        name: "Samson Song",
        tier: "Tier 2",
        amount: 20000,
        interest: 22400
    },
    {
        id: 12,
        name: "Captain Tyre",
        tier: "Tier 2",
        amount: 20000,
        interest: 22400
    },
    {
        id: 13,
        name: "Andrew Salz",
        tier: "Tier 2",
        amount: 20000,
        interest: 22400
    },
    {
        id: 14,
        name: "Usman Danfodio",
        tier: "Tier 2",
        amount: 20000,
        interest: 22400
    },
    {
        id: 15,
        name: "Iyanu Emeka",
        tier: "Tier 2",
        amount: 20000,
        interest: 22400
    },
]

function commaSeperator(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Dashboard = () => {
    const [totalAmount, setTotalAmount] = useState(0)
    const [totalInterest, setTotalInterest] = useState(0)
    
    useEffect(() => {
        TotalInterest()
        TotalAmount()
    }, [])
    
    function TotalAmount() {
        return setTotalAmount(contributors.reduce((acc, obj) => {
            return acc + obj.amount;
        }, 0))
    }

    function TotalInterest() {
        return setTotalInterest(contributors.reduce((acc, obj) => {
            return acc + obj.interest;
        }, 0))
    }

    function renderData() {
        return contributors.map((contributor, index) => (
            <tr>
                <td>{index+1}</td>
                <td>{contributor.name}</td>
                <td>{contributor.tier}</td>
                <td>&#8358;{commaSeperator(contributor.amount)}</td>
                <td>&#8358;{commaSeperator(contributor.interest)}</td>
            </tr>
        ))
    }


    return (
        <div className='mgt-50'>

            <div className='d-flex card'>
                <div className='border-grey border-8 pd-14'>
                    <h5 className='fs-20'>Total Amount Invested</h5>
                    <div className='mgt-16 fs-42 fw-semi-bold'>
                        &#8358;{commaSeperator(totalAmount)}
                    </div>
                </div>
                <div className='mgl-20 border-grey border-8 pd-14'>
                    <h5 className='fs-20'>Total Interest </h5>
                    <div className='mgt-16 fs-42 fw-semi-bold'>
                        &#8358;{commaSeperator(totalInterest)}
                    </div>
                </div>
            </div>

            <div className='table-data mgy-50'>
                <h3 className='fs-32'>Investors</h3>
                <table>
                    <thead>
                        <th>S/N</th>
                        <th>Name</th>
                        <th>Tier</th>
                        <th>Amount</th>
                        <th>Interest</th>
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