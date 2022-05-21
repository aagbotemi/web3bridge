import React from 'react'

const contributors = [
    {
        id: 1,
        name: "Stephen James",
        tier: "Tier 1",
        amount: "10,000",
        interest: "10,700"
    },
    {
        id: 2,
        name: "Gbenga James",
        tier: "Tier 1",
        amount: "10,000",
        interest: "10,700"
    },
    {
        id: 3,
        name: "Stephen Tunde",
        tier: "Tier 3",
        amount: "30,000",
        interest: "37,500"
    },
    {
        id: 4,
        name: "Stephen Sikiru",
        tier: "Tier 3",
        amount: "30,000",
        interest: "37,500"
    },
    {
        id: 5,
        name: "Kyle Segun",
        tier: "Tier 2",
        amount: "20,000",
        interest: "22,400"
    },
    {
        id: 6,
        name: "Omma Buhari",
        tier: "Tier 1",
        amount: "10,000",
        interest: "10,700"
    },
    {
        id: 7,
        name: "Tosin WIlliams",
        tier: "Tier 3",
        amount: "30,000",
        interest: "37,500"
    },
    {
        id: 8,
        name: "Jide Kolapo",
        tier: "Tier 2",
        amount: "20,000",
        interest: "22,400"
    },
]

const Dashboard = () => {
  return (
    <div className='mgt-30'>
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