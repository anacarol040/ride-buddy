import {React, useState} from "react";
import {Select} from "antd";

const { Option } = Select;

const LandingPage: React.FC = () => {

    const cities = ['Airdrie', 'Banff', 'Calgary', 'Canmore', 'Vancouver'];
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');

    const handleFromChange = (value) => {
        setFrom(value);
    }

    const handleToChange = (value) => {
        setTo(value);
    }

    return (
      <>
        <div>
          <h1>Find a Ride</h1>
            <form>
                <div>
                    <label>From: </label>
                    <Select
                        value={from}
                        onChange={handleFromChange}
                        placeholder="Select starting Location"
                        style={{width:300}}
                    >
                        {cities.map(city => (
                                <Option key={city} value={city}>{city}
                                </Option>
                            ))}
                    </Select>
                </div>
                <div>
                    <label>To: </label>
                    <Select
                        value={to}
                        onChange={handleToChange}
                        placeholder="Select destination"
                        style={{width:300}}
                    >
                        {cities.map(city => (
                            <Option key={city} value={city}>{city}
                            </Option>
                        ))}
                    </Select>


                </div>

            </form>

        </div>
      </>
  )
}

export default LandingPage;