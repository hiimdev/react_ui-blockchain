import React from 'react';

import {images} from '../../constants';

import './SideBar.css';

const SideBar = () => (
    <>
        <div className='sidebar'>
            <div className='sidebar__head'>
                <div className='sidebar__head-logo'>
                    <img src={images.DynamicIcon} alt='dynamicicon' />
                </div>

                <div className='sidebar__head-text'>
                    <h3 className='sidebar__head-text_title'>Dynamic</h3>
                    <p className='sidebar__head-text_desc'>
                        Put your funds to work
                    </p>
                </div>
            </div>

            <ul className='sidebar__list'>
                <li className='sidebar__list-item'>
                    <img src={images.HomeIcon} alt='homeicon' />
                    <p>Home</p>
                </li>
                <li className='sidebar__list-item'>
                    <img src={images.VaultsIcon} alt='VaultsIcon' />
                    <p>Vaults</p>
                </li>
                <li className='sidebar__list-item'>
                    <img src={images.TransferIcon} alt='TransferIcon' />
                    <p>Swap</p>
                </li>
                <li className='sidebar__list-item'>
                    <img src={images.SwapIcon} alt='SwapIcon' />
                    <p>Pay</p>
                </li>
                <li className='sidebar__list-item'>
                    <img src={images.MoreIcon} alt='MoreIcon' />
                    <p>More</p>
                </li>
            </ul>
        </div>
    </>
);

export default SideBar;
