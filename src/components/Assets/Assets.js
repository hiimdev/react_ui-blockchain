import React from 'react';

import './Assets.css';

const Assets = ({data, loading}) => {
    if (loading) {
        return <h2>Loading....</h2>;
    }

    return (
        <>
            {data.map((item) => (
                <div
                    className='assets'
                    id='assets'
                    key={item.image + item.name}
                >
                    <div className='assets__name'>
                        <div className='assets__name-icon'>
                            <img src={item.image} alt='icon' />
                            <div className='assets__name-text'>
                                <p className='assets__name-text_title'>
                                    {item.name}
                                </p>
                                <p className='assets__name-text_sub'>
                                    {item.symbol}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='assets__balance'>
                        <p className='assets__balance-price'>{`$${item.current_price}`}</p>
                        <p className='assets__balance-sub'>131,359.34 USDC</p>
                    </div>

                    <div className='assets__interest'>
                        <p className='assets__interest-price'>{`$${item.current_price}`}</p>
                        <p className='assets__interest-sub'>
                            +$9,131.78 <span>Last 24 hours</span>
                        </p>
                    </div>

                    <div className='assets__allocation'>
                        <p className='assets__allocation-percent'>{`${Math.round(
                            item.ath_change_percentage,
                        )}%`}</p>
                    </div>
                </div>
            ))}
        </>
    );
};
export default Assets;
