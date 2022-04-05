import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import useChartData from '../../hooks/useChartData';
import './Dashboard.css';

const Dashboard = () => {
    const [datas, setDatas] = useChartData([]);
    return (
        <div className='container'>
            <h2>Dashboard</h2>
            <div className='grid grid-cols-2 gap-10'>
                <div>
                    <h1>Investment vs Revenue vs Sell</h1>
                    <LineChart width={500} height={300} data={datas}>
                        <Line dataKey={'investment'} stroke='#000000'></Line>
                        <Line dataKey={'sell'} stroke='#FF0000'></Line>
                        <Line dataKey={'revenue'} stroke='#00FF00'></Line>
                        <YAxis></YAxis>
                        <XAxis dataKey='month'></XAxis>
                        <Tooltip></Tooltip>
                    </LineChart>
                </div>
                <div>
                    <h1>Investment vs Revenue vs Sell</h1>
                    <AreaChart
                        width={500}
                        height={400}
                        data={datas}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="investment" stroke="#000000" fill="#000000" />
                        <Area type="monotone" dataKey="revenue" stroke="#FF0000" fill="#FF0000" />
                        <Area type="monotone" dataKey="sell" stroke="#00FF00" fill="#00FF00" />
                    </AreaChart>
                </div>
                <div>
                    <h1>Investment vs Revenue vs Sell</h1>
                    <BarChart width={500} height={400} data={datas}>
                        <Bar dataKey="investment" fill="#000000" />
                        <Bar dataKey="revenue" fill="#FF0000" />
                        <Bar dataKey="sell" fill="#00FF00" />
                        <YAxis></YAxis>
                        <XAxis dataKey='month'></XAxis>
                        <Tooltip></Tooltip>
                    </BarChart>
                </div>
                <div>
                    <h1>Investment vs Revenue vs Sell</h1>
                    <PieChart width={400} height={400}>
                        <Pie data={datas} dataKey="investment" cx="50%" cy="50%" outerRadius={90} fill="#000000" />
                        <Pie data={datas} dataKey="sell" cx="50%" cy="50%" outerRadius={50} fill="#FF0000" />
                        <Pie data={datas} dataKey="revenue" cx="50%" cy="50%" outerRadius={30} fill="#00FF00" />
                        <Tooltip></Tooltip>
                    </PieChart>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;