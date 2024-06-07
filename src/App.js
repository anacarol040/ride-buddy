import React, { useState } from 'react';
import { Button, Form, Select, Radio, DatePicker, TimePicker, Dropdown, Space } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { DownOutlined } from '@ant-design/icons';

import logo from './images/ride-buddy.png';

const { Option } = Select;
const { Item } = Form;

const LandingPage: React.FC = () => {
    const cities = ['Airdrie', 'Banff', 'Calgary', 'Canmore', 'Vancouver'];

    const [from, setFrom] = useState('');
    const [destination, setDestination] = useState('');
    const [formLayout, setFormLayout] = useState('passenger');
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

    const items = [
        {
            key: 'drivers',
            label: 'For drivers',
        },
        {
            key: 'passengers',
            label: 'For passengers',
        },
        {
            key: 'students',
            label: 'For students',
        },
    ];

    const handleFromChange = (value) => {
        setFrom(value);
    };

    const handleDestinationChange = (value) => {
        setDestination(value);
    };

    const handleFormLayoutChange = (layout) => {
        setFormLayout(layout.target.value);
        resetFields();
    };

    const handleSelectedDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleSelectedTimeChange = (time) => {
        setSelectedTime(time);
    };

    const resetFields = () => {
        console.log(from, destination);
        setSelectedDate(null);
        setSelectedTime(null);
    };

    return (
        <>
            <Header className='header' style={styles.header}>
                <div className='logo-container' style={styles.logoContainer}>
                    <img style={styles.logo} className='logo' src={logo} alt='Ride Buddy Logo' />
                </div>
                <div className='menu-right' style={styles.menuRight}>
                    <Dropdown menu={{ items }}>
                        <Button>
                            <Space>
                                How it works
                                <DownOutlined />
                            </Space>
                        </Button>
                    </Dropdown>
                    <Button type='primary' className='login-button' style={styles.loginButton}>
                        Log In / Sign In
                    </Button>
                </div>
            </Header>
            <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} size='large'>
                <Item label='I want to' name='layout'>
                    <Radio.Group value={formLayout} onChange={handleFormLayoutChange}>
                        <Radio.Button value='passenger'> Find a Ride </Radio.Button>
                        <Radio.Button value='driver'> Post a Trip </Radio.Button>
                    </Radio.Group>
                </Item>
                <Item label='From:' name='from'>
                    <Select
                        placeholder='Select starting location'
                        value={from}
                        onChange={handleFromChange}
                        style={styles.select}
                    >
                        {cities.map((city) => (
                            <Option key={city} value={city}>
                                {city}
                            </Option>
                        ))}
                    </Select>
                </Item>
                <Item label='To:' name='to'>
                    <Select
                        placeholder='Select destination'
                        value={destination}
                        onChange={handleDestinationChange}
                        style={styles.select}
                    >
                        {cities.map((city) => (
                            <Option key={city} value={city}>
                                {city}
                            </Option>
                        ))}
                    </Select>
                </Item>
                <Item label='Select a date:'>
                    <DatePicker value={selectedDate} onChange={handleSelectedDateChange} />
                </Item>
                {formLayout === 'driver' && (
                    <Item label='Estimated time'>
                        <TimePicker format='HH:mm' value={selectedTime} onChange={handleSelectedTimeChange} />
                    </Item>
                )}
                <Item label='' wrapperCol={{ offset: 4, span: 16 }}>
                    <Button type='primary' htmlType='submit'>
                        Submit
                    </Button>
                </Item>
            </Form>
        </>
    );
};

const styles = {
    header: {
        height: '190px',
        padding: '0 20px',
        marginBottom: '30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'rgb(255, 252, 239)',
    },
    logoContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    logo: {
        objectFit: 'contain',
    },
    menuRight: {
        display: 'flex',
        alignItems: 'center',
    },
    loginButton: {
        marginLeft: '20px',
    },
    select: {
        width: 300,
    },
};

export default LandingPage;
