import React, {useState, useEffect} from 'react';

import axios from 'axios';

import APY from '../APY/APY';
import Portfolio from '../Portfolio/Portfolio';
import Fund from '../Fund/Fund';
import Assets from '../Assets/Assets';
import Notify from '../Notify/Notify';
import Network from '../Network/Network';
import Pagination from '../Pagination/Pagination';

import {images} from '../../constants';
import './Homebody.css';

const HomeBody = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(5);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const {data: response} = await axios.get(
                    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false',
                );
                setData(response);
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        };

        fetchData();
    }, []);

    // Get current posts:
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

    // ChangePage:
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className='homebody'>
            <div className='homebody__header'>
                <div className='homebody__head-logo'>
                    <img src={images.DynamicIcon} alt='dynamicicon' />
                </div>
                <p className='homebody__header-title'>Home</p>
                <div className='homebody__list'>
                    <a href='#overlay' className='homebody__list-item_ethereum'>
                        <img src={images.Rectangle287} alt='rectangle' />
                        <p className='homebody__list-item_ethereum-text'>
                            Ethereum
                        </p>
                    </a>
                    <div id='overlay'>
                        <Network />
                    </div>
                    <div className='homebody__list-item_notify'>
                        <img
                            className='img-bell'
                            src={images.NotificationsIcon}
                            alt='notify'
                        />
                        <img
                            className='img-alert'
                            src={images.Notificationalert}
                            alt='notifyalert'
                        />
                    </div>

                    <div className='dash' />
                    <div className='homebody__list-item_avatar'>
                        <img src={images.ProfilePic} alt='profile' />
                    </div>
                </div>
            </div>
            <div className='APY__container-fluid'>
                <div className='APY__container'>
                    <APY index='#1' src={images.DOTIcon} text='10.07% APY' />
                    <APY index='#2' src={images.USDTIcon} text='9.58% APY' />
                    <APY index='#3' src={images.AVAXIcon} text='5.19% APY' />
                    <APY index='#4' src={images.USDCIcon} text='4.05% APY' />
                    <APY index='#5' src={images.MATICIcon} text='3.90% APY' />
                    <APY index='#6' src={images.BTCIcon} text='3.18% APY' />
                </div>
            </div>

            <div className='portfolio-funding__container'>
                <Portfolio />
                <div className='fund__container'>
                    <Fund />
                </div>
            </div>

            <div className='btn__fund-vaults_mb'>
                <button type='button' className='btn__fund-mb'>
                    Funding
                </button>
                <button type='button' className='btn__vaults-mb'>
                    Vaults
                </button>
            </div>

            <div className='wrapper__assets-notify'>
                <div className='assets__container'>
                    <div className='assets__head'>
                        <p className='assets__head-title'>Assets</p>
                        <p className='assets__head-title_sub'>in vaults</p>
                        <p className='assets__head-desc'>outside vaults</p>
                    </div>

                    <div className='assets__content'>
                        <div className='assets__content-list'>
                            <p className='assets__content-item_name'>Name</p>
                            <p className='assets__content-item_balance'>
                                Balance
                            </p>
                            <p className='assets__content-item_interest'>
                                Interest
                            </p>
                            <p className='assets__content-item_allocation'>
                                Allocation
                            </p>
                        </div>

                        {/* <Assets
                                loading={loading}
                                key={item.image + item.name}
                                posts={currentPosts}
                                src={item.image}
                                title={item.name}
                                sub={item.symbol}
                                balancePrice={`$${item.current_price}`}
                                balanceSub='131,359.34 USDC'
                                interestPrice={`$${item.current_price}`}
                                interestSub='+$9,131.78'
                                percent={`${Math.round(
                                    item.ath_change_percentage,
                                )}%`}
                            /> */}

                        <Assets data={currentPosts} loading={loading} />
                        <Pagination
                            postsPerPage={postPerPage}
                            totalPosts={data.length}
                            paginate={paginate}
                        />
                    </div>

                    <div className='assets__content-mb'>
                        <Assets data={currentPosts} loading={loading} />
                        <Pagination
                            postsPerPage={postPerPage}
                            totalPosts={data.length}
                            paginate={paginate}
                        />
                    </div>
                </div>

                <div className='fund__container-mb'>
                    <Fund />
                </div>

                <div className='notify__container'>
                    <p className='notify__title'>Notifications</p>
                    <Notify
                        status='Account activity'
                        action='You added 3,000 USDC'
                        time='May 11'
                    />
                    <Notify
                        status='Account activity'
                        action='You added 3,000 USDC'
                        time='May 11'
                    />
                    <Notify
                        status='Account activity'
                        action='You added 3,000 USDC'
                        time='May 11'
                    />
                    <Notify
                        status='Account activity'
                        action='You added 3,000 USDC'
                        time='May 11'
                    />
                </div>
            </div>
        </div>
    );
};
export default HomeBody;
