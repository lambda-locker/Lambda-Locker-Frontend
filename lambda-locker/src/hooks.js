import React, { useState } from 'react'

const useLoginForm = (initialValues, cb) => {
    const [inputs, setInputs] = useState({ initialValues })

    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault()
            cb()
        }
    }
    const handleChange = (event) => {
        event.persist()
        setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }))
    }
    return {
        handleSubmit,
        handleChange,
        inputs
    }
}

export default useLoginForm