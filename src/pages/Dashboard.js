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

const Dashboard = () => {
    const [totalAmount, setTotalAmount] = useState(0)
    const [totalInterest, setTotalInterest] = useState(0)
    
    useEffect(() => {
        TotalInterest()
        TotalAmount()
    }, [])
    
    function TotalAmount() {
        const sum = contributors.reduce((acc, obj) => {
            return acc + obj.amount;
        }, 0)
        // var users = new Array();

        // contributors.forEach((item, i) => {
        //     users[i] = item.amount
        // })

        // const sum = users.reduce((acc, obj) => {
        //     return acc + obj;
        // }, 1);

        
        setTotalAmount(sum)
        // console.log(users);
        console.log(sum);
    }

    function TotalInterest() {
        const sum = contributors.reduce((acc, obj) => {
            return acc + obj.interest;
        }, 0)
        
        setTotalInterest(sum)
        // console.log(users);
        console.log(sum);
    }




  return (
    <div className='mgt-30'>

        <div className='d-flex'>
            <div>
                <h5>Total Amount Invested</h5>
                <div>
                    {totalAmount}
                </div>
            </div>
            <div className='mgl-20'>
                <h5>Total Interest </h5>
                <div>
                    {totalInterest}
                </div>
            </div>
        </div>




        <h3>Investors</h3>
        <table>
            <thead>
                <th>S/N</th>
                <th>Name</th>
                <th>Tier</th>
                <th>Amount</th>
                <th>Interest</th>
            </thead>
            <tbody>
                {
                    contributors.map((contributor, index) => (
                        <tr>
                            <td>{index+1}</td>
                            <td>{contributor.name}</td>
                            <td>{contributor.tier}</td>
                            <td>&#8358;{contributor.amount}</td>
                            <td>&#8358;{contributor.interest}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Dashboard