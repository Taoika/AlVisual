import { Select } from 'antd';
import React from 'react';
import './index.css'

const { Option } = Select;

export default function MyDropdown(props) {
    
    const handleChange = (v) => {
        if (props.func) {
            props.func(v)
        }
    }

    return (
        <Select
            defaultValue={1}
            style={{
                width: 120,
                fontSize: props && props.min ? '10px' : '14px'
            }}
            onChange={handleChange}
        >{props && props.option ? props.option.map((v, i) => {
            return (<Option value={i + 1}>&nbsp;{v}</Option>)
        }) : ''}
        </Select>
    )
}


