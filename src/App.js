import {React, useState} from "react";
import {Select} from "antd";

const { Option } = Select;

const LandingPage: React.FC = () => {

    const cities = ['Airdrie', 'Banff', 'Calgary', 'Canmore', 'Vancouver'];
    const [from, setFrom] = useState('');

    const handleFromChange = (value) => {
        setFrom(value);
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
                    <Select>

                    </Select>

                </div>

            </form>

        </div>
      </>
  )
}

export default LandingPage;