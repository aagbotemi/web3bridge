import React, { useState } from 'react'

const AddForm = () => {
    const [name, setName] = useState('')

  return (
    <div>
        <form>
            <input
                name="label"
                placeholder="Enter Name"
                type="text"
            />
            <div>
                <div className='d-flex '>
                    <input
                        name="tier1"
                        placeholder="Enter amount"
                        type="radio"
                    />
                    <label>
                        Tier 1
                    </label>
                </div>
                <div className='d-flex '>
                    <input
                        name="tier2"
                        placeholder="Enter amount"
                        type="radio"
                    />
                    <label>
                        Tier 2
                    </label>
                </div>
                <div className='d-flex '>
                    <input
                        name="tier3"
                        placeholder="Enter amount"
                        type="radio"
                    />
                    <label>
                        Tier 3
                    </label>
                </div>
            </div>
            <button type="submit" disabled={this.state.submitDisabled}>+ Add Item</button>
        </form>
    </div>
  )
}

export default AddForm