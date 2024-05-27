import {React, useState} from 'react';
import {Button, Form, Select, Radio, DatePicker, TimePicker} from 'antd';

const { Option } = Select;
const { Item } = Form


const LandingPage: React.FC = () => {

    const cities = ['Airdrie', 'Banff', 'Calgary', 'Canmore', 'Vancouver'];

    const [from, setFrom] = useState('');
    const [destination, setDestination] = useState('');
    const [formLayout, setFormLayout] = useState('passenger');
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

    const handleFromChange = (value) => {
        setFrom(value);
    }

    const handleDestinationChange = (value) => {
        setDestination(value);
    }

    const handleFormLayoutChange = (layout) => {
        setFormLayout(layout.target.value);
        resetFields();
    };

    const handleSelectedDateChange = (date) => {
        setSelectedDate(date);
    }

    const handleSelectedTimeChange = (time) => {
        setSelectedTime(time);
    }

    const resetFields = () => {
        console.log(from, destination)
        setSelectedDate(null)
        setSelectedTime(null)
    }

    return (
        <Form
            labelCol={{span: 4}}
            wrapperCol={{span: 14}}
            size='large'
        >
            <Item label='I want to' name='layout'>
                <Radio.Group value={formLayout} onChange={handleFormLayoutChange}>
                    <Radio.Button value='passenger'> Find a Ride </Radio.Button>
                    <Radio.Button value='driver'> Post a Trip </Radio.Button>
                </Radio.Group>
            </Item>
            <Item label='From:' name='from' >
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
            <Item label='To: ' name='to'>
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
            <Item label='Select a date:'>
                <DatePicker value={selectedDate} onChange={handleSelectedDateChange} />
            </Item>
            {formLayout === 'driver' && (
                <Item label='Estimated time'>
                    <TimePicker format='HH:mm' value={selectedTime} onChange={handleSelectedTimeChange}/>
                </Item>
            )}
            <Item label=''  wrapperCol={{ offset: 4, span: 16 }}>
                <Button type='primary' htmlType='submit'>
                    Submit
                </Button>
            </Item>
        </Form>
  )
}

export default LandingPage;