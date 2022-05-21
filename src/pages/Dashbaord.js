import React from 'react'

const Dashbaord = () => {
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
            <tr>
                <td>1</td>
                <td>Stephen James</td>
                <td>Tier 1</td>
                <td>10,000</td>
                <td>10,700</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Gbenga James</td>
                <td>Tier 1</td>
                <td>10,000</td>
                <td>10,700</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Stephen Tunde</td>
                <td>Tier 3</td>
                <td>30,000</td>
                <td>37,500</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Stephen Sikiru</td>
                <td>Tier 3</td>
                <td>30,000</td>
                <td>37,500</td>
            </tr>
            <tr>
                <td>5</td>
                <td>Kyle Segun</td>
                <td>Tier 2</td>
                <td>20,000</td>
                <td>22,400</td>
            </tr>
            <tr>
                <td>6</td>
                <td>Omma Buhari</td>
                <td>Tier 1</td>
                <td>10,000</td>
                <td>10,700</td>
            </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Dashbaord