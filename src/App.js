import {React, useState} from "react";
import {Form, Select} from "antd";

const { Option } = Select;
const { Item } = Form


const LandingPage: React.FC = () => {

    const cities = ['Airdrie', 'Banff', 'Calgary', 'Canmore', 'Vancouver'];
    const [from, setFrom] = useState('');
    const [destination, setDestination] = useState('');

    const handleFromChange = (value) => {
        setFrom(value);
    }

    const handleDestinationChange = (value) => {
        setDestination(value);
    }

    return (
        <Form>
            <Item name='to' label='From: '>
                <Select
                    placeholder='Select starting location'
                    value={from}
                    onChange={handleFromChange}
                    style={{width:300}}
                >
                    {cities.map(city => (
                            <Option key={city} value={city}>{city}
                            </Option>
                        ))}
                </Select>
            </Item>
            <Item name='to' label='To: '>
                <Select
                    placeholder='Select destination'
                    value={destination}
                    onChange={handleDestinationChange}
                    style={{width:300}}
                >
                    {cities.map(city => (
                        <Option key={city} value={city}>{city}
                        </Option>
                    ))}
                </Select>
            </Item>
        </Form>
  )
}

export default LandingPage;