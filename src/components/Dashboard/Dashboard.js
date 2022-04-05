import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import useChartData from '../../hooks/useChartData';
import './Dashboard.css';

const Dashboard = () => {
    const [datas, setDatas] = useChartData([]);
    return (
        <div className='container'>
            <h2 className='text-3xl text-purple-900 uppercase mb-10'>Analysis Charts</h2>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-10 px-10'>
                <div>
                    <h1 className='text-xl text-purple-500 font-bold mb-5'>Investment vs Revenue vs Sell</h1>
                    <LineChart width={500} height={300} data={datas}>
                        <Line dataKey={'investment'} stroke='#FFA500'></Line>
                        <Line dataKey={'sell'} stroke='#800080'></Line>
                        <Line dataKey={'revenue'} stroke='#00FFFF'></Line>
                        <YAxis></YAxis>
                        <XAxis dataKey='month'></XAxis>
                        <Tooltip></Tooltip>
                    </LineChart>
                </div>
                <div>
                    <h1 className='text-xl text-purple-500 font-bold mb-5'>Investment vs Revenue vs Sell</h1>
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
                        <Area type="monotone" dataKey="investment" stroke="#FFA500" fill="#FFA500" />
                        <Area type="monotone" dataKey="revenue" stroke="#FF0000" fill="#800080" />
                        <Area type="monotone" dataKey="sell" stroke="#00FF00" fill="#00FFFF" />
                    </AreaChart>
                </div>
                <div>
                    <h1 className='text-xl text-purple-500 font-bold mb-5'>Investment vs Revenue vs Sell</h1>
                    <BarChart width={500} height={400} data={datas}>
                        <Bar dataKey="investment" fill="#FFA500" />
                        <Bar dataKey="revenue" fill="#800080" />
                        <Bar dataKey="sell" fill="#00FFFF" />
                        <YAxis></YAxis>
                        <XAxis dataKey='month'></XAxis>
                        <Tooltip></Tooltip>
                    </BarChart>
                </div>
                <div>
                    <h1 className='text-xl text-purple-500 font-bold mb-5'>Investment vs Revenue vs Sell</h1>
                    <PieChart width={400} height={400}>
                        <Pie data={datas} dataKey="investment" cx="50%" cy="50%" outerRadius={100} fill="#FFA500" />
                        <Pie data={datas} dataKey="sell" cx="50%" cy="50%" outerRadius={70} fill="#800080" />
                        <Pie data={datas} dataKey="revenue" cx="50%" cy="50%" outerRadius={30} fill="#00FFFF" />
                        <Tooltip></Tooltip>
                    </PieChart>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;