import React, { useState } from 'react';
import './orders.scss';

const StockOrders = () => {

    const [filterModal, setFilterModal] = useState(false);
    const [optionModal, setOptionModal] = useState(false);

    return (
        <div className='stock-orders-container'>
            {
                filterModal ?
                    <div className='filter-modal'>
                        <div className='modal-header'>
                            <span id='modal-title'>Filters</span>
                            <span id='modal-close' onClick={() => setFilterModal(false)}>
                                <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M17 1.914L16.086 1 9 8.086 1.914 1 1 1.914 8.086 9 1 16.086l.914.914L9 9.914 16.086 17l.914-.914L9.914 9z"></path></svg>
                            </span>
                        </div>
                        <div className='modal-body'>
                            <div className='group'>
                                <span className='group-title'>Suppliers</span>
                                <div className='input-container'>
                                    <select>
                                        <option>All suppliers</option>
                                        <option>Dfsfw</option>
                                        <option>dfwfe</option>
                                    </select>
                                </div>
                            </div>
                            <div className='group'>
                                <span className='group-title'>Order type</span>
                                <div className='input-container'>
                                    <select>
                                        <option>All statuses</option>
                                        <option>Purchase</option>
                                        <option>Transfer</option>
                                    </select>
                                </div>
                            </div>
                            <div className='group'>
                                <span className='group-title'>Order status</span>
                                <div className='input-container'>
                                    <select>
                                        <option>All statuses</option>
                                        <option>Ordered</option>
                                        <option>Received</option>
                                        <option>Cancelled</option>
                                        <option>Partial</option>
                                        <option>Draft</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='modal-footer'>
                            <span onClick={() => setFilterModal(false)}>Clear all filters</span>
                            <div id='actions'>
                                <button id='action-cancel' onClick={() => setFilterModal(false)}>Cancel</button>
                                <button id='action-apply'>Apply</button>
                            </div>
                        </div>
                    </div> : <></>
            }
            <div className='content-container'>
                <div className='content-detail'>
                    <div className='content-title'>Stock orders</div>
                    <span className='content-summary'>
                        Add and manage your stock orders.
                        <a> Learn more</a>
                    </span>
                </div>
                <div className='content-action'>
                    <div className='option-group'>
                        <button className='btn btn-option' onClick={() => { optionModal ? setOptionModal(false) : setOptionModal(true) }}>
                            Options
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 14.481l6.247-7.14a1 1 0 011.506 1.318l-7 8a1 1 0 01-1.506 0l-7-8a1 1 0 111.506-1.317L12 14.482z"></path></svg>
                            </span>
                        </button>
                        {
                            optionModal ?
                                <div className='option-modal'>
                                    <span className='modal-body'>Download CSV</span>
                                    <span className='modal-body'>Download Excel</span>
                                    <span className='modal-body'>Manage products</span>
                                    <span className='modal-body'>Manage suppliers</span>
                                </div> : <></>
                        }
                    </div>
                    <div className='add-group'>
                        <button className='btn btn-add' onClick={() => window.location.href = '/catalogue/stocktakes/new'}>
                            Add new
                        </button>
                    </div>
                </div>
            </div>
            <div className='content-setting'>
                <div className='search-container'>
                    <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M23.78 22.722l-4.328-4.328c1.073-1.307 1.72-2.983 1.72-4.808C21.17 9.398 17.77 6 13.585 6 9.395 6 6 9.398 6 13.586c0 4.187 3.394 7.585 7.586 7.585 1.825 0 3.497-.64 4.805-1.712l4.33 4.324c.294.294.768.294 1.06 0 .295-.29.295-.767 0-1.057zm-10.194-3.06c-3.354 0-6.08-2.726-6.08-6.076 0-3.35 2.726-6.08 6.08-6.08 3.35 0 6.08 2.73 6.08 6.08s-2.73 6.076-6.08 6.076z"></path></svg>
                    <input type="text" placeholder='Search product or order' />
                </div>
                <div className='filter-container' onClick={() => setFilterModal(true)}>
                    <span>Filters</span>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 9.375a.75.75 0 0 1 .75.75V20.25a.75.75 0 0 1-1.5 0V10.125a.75.75 0 0 1 .75-.75ZM12 3a.75.75 0 0 1 .75.75v2.625a.75.75 0 0 1-1.5 0V3.75A.75.75 0 0 1 12 3Z"></path><path d="M12 7.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM9.375 8.25a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0ZM18.75 16.75c.414.125.75.46.75.875v2.625a.75.75 0 0 1-1.5 0v-2.625a.75.75 0 0 1 .75-.75ZM18.75 3a.75.75 0 0 1 .75.75v10.125a.75.75 0 0 1-1.5 0V3.75a.75.75 0 0 1 .75-.75Z"></path><path d="M18.75 14.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm-2.625 1.125a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0ZM5.25 13.875a.75.75 0 0 1 .75.75v5.625a.75.75 0 0 1-1.5 0v-5.625a.75.75 0 0 1 .75-.75ZM5.25 3a.75.75 0 0 1 .75.75v7.125a.75.75 0 1 1-1.5 0V3.75A.75.75 0 0 1 5.25 3Z"></path><path d="M5.25 11.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM2.625 12.75a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z"></path></svg>
                </div>
                <div className='sort-container'>
                    <select>
                        <option>Order No. (A-Z)</option>
                        <option>Order No. (Z-A)</option>
                        <option>Created (oldest first)</option>
                        <option>Created (newest first)</option>
                        <option>Delivery (oldest first)</option>
                        <option>Delivery (newest first)</option>
                        <option>Updated (oldest first)</option>
                        <option>Updated (newest first)</option>
                        <option>Total Cost (lowest first)</option>
                        <option>Total Cost (highest first)</option>
                    </select>
                </div>
            </div>
            <div className='content-details'>
                <div className='table-container'>
                    <table>
                        <thead>
                            <tr>
                                <th className='font-left' style={{ width: '12.5%' }}>
                                    <span className='header-content'>Order #</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="#101928" fillRule="evenodd"><path d="M7.64644661 1.64644661c.17356635-.17356635.44299075-.1928515.63785889-.05785545l.06924789.05785545 4.00000001 4c.1952621.19526215.1952621.51184463 0 .70710678-.1735664.17356635-.4429908.1928515-.6378589.05785545l-.0692479-.05785545L8 2.707 4.35355339 6.35355339c-.17356635.17356635-.44299075.1928515-.63785889.05785545l-.06924789-.05785545c-.17356635-.17356635-.1928515-.44299075-.05785545-.63785889l.05785545-.06924789 4-4zM8.35355339 14.35355339c-.17356635.17356635-.44299075.1928515-.63785889.05785545l-.06924789-.05785545L3.6464466 10.3535534c-.1952621-.1952622-.1952621-.5118446 0-.7071068.1735664-.1735663.4429908-.1928515.6378589-.0578554l.0692479.0578554L8 13.293l3.64644661-3.6465534c.17356635-.1735663.44299075-.1928515.63785889-.0578554l.06924789.0578554c.17356635.1735664.1928515.4429908.05785545.6378589l-.05785545.0692479-4 3.99999999z"></path></g></svg>
                                    </span>
                                </th>
                                <th className='font-left' style={{ width: '15%' }}>
                                    <span className='header-content'>Created</span>
                                </th>
                                <th className='font-left' style={{ width: '15%' }}>
                                    <span className='header-content'>Expect</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="#101928" fillRule="evenodd"><path d="M7.64644661 1.64644661c.17356635-.17356635.44299075-.1928515.63785889-.05785545l.06924789.05785545 4.00000001 4c.1952621.19526215.1952621.51184463 0 .70710678-.1735664.17356635-.4429908.1928515-.6378589.05785545l-.0692479-.05785545L8 2.707 4.35355339 6.35355339c-.17356635.17356635-.44299075.1928515-.63785889.05785545l-.06924789-.05785545c-.17356635-.17356635-.1928515-.44299075-.05785545-.63785889l.05785545-.06924789 4-4zM8.35355339 14.35355339c-.17356635.17356635-.44299075.1928515-.63785889.05785545l-.06924789-.05785545L3.6464466 10.3535534c-.1952621-.1952622-.1952621-.5118446 0-.7071068.1735664-.1735663.4429908-.1928515.6378589-.0578554l.0692479.0578554L8 13.293l3.64644661-3.6465534c.17356635-.1735663.44299075-.1928515.63785889-.0578554l.06924789.0578554c.17356635.1735664.1928515.4429908.05785545.6378589l-.05785545.0692479-4 3.99999999z"></path></g></svg>
                                    </span>
                                </th>
                                <th className='font-left' style={{ width: '12.5%' }}>
                                    <span className='header-content'>Deliver from</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="#101928" fillRule="evenodd"><path d="M7.64644661 1.64644661c.17356635-.17356635.44299075-.1928515.63785889-.05785545l.06924789.05785545 4.00000001 4c.1952621.19526215.1952621.51184463 0 .70710678-.1735664.17356635-.4429908.1928515-.6378589.05785545l-.0692479-.05785545L8 2.707 4.35355339 6.35355339c-.17356635.17356635-.44299075.1928515-.63785889.05785545l-.06924789-.05785545c-.17356635-.17356635-.1928515-.44299075-.05785545-.63785889l.05785545-.06924789 4-4zM8.35355339 14.35355339c-.17356635.17356635-.44299075.1928515-.63785889.05785545l-.06924789-.05785545L3.6464466 10.3535534c-.1952621-.1952622-.1952621-.5118446 0-.7071068.1735664-.1735663.4429908-.1928515.6378589-.0578554l.0692479.0578554L8 13.293l3.64644661-3.6465534c.17356635-.1735663.44299075-.1928515.63785889-.0578554l.06924789.0578554c.17356635.1735664.1928515.4429908.05785545.6378589l-.05785545.0692479-4 3.99999999z"></path></g></svg>
                                    </span>
                                </th>
                                <th className='font-right' style={{ width: '12.5%' }}>
                                    <span className='header-content'>Total cost</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="#101928" fillRule="evenodd"><path d="M7.64644661 1.64644661c.17356635-.17356635.44299075-.1928515.63785889-.05785545l.06924789.05785545 4.00000001 4c.1952621.19526215.1952621.51184463 0 .70710678-.1735664.17356635-.4429908.1928515-.6378589.05785545l-.0692479-.05785545L8 2.707 4.35355339 6.35355339c-.17356635.17356635-.44299075.1928515-.63785889.05785545l-.06924789-.05785545c-.17356635-.17356635-.1928515-.44299075-.05785545-.63785889l.05785545-.06924789 4-4zM8.35355339 14.35355339c-.17356635.17356635-.44299075.1928515-.63785889.05785545l-.06924789-.05785545L3.6464466 10.3535534c-.1952621-.1952622-.1952621-.5118446 0-.7071068.1735664-.1735663.4429908-.1928515.6378589-.0578554l.0692479.0578554L8 13.293l3.64644661-3.6465534c.17356635-.1735663.44299075-.1928515.63785889-.0578554l.06924789.0578554c.17356635.1735664.1928515.4429908.05785545.6378589l-.05785545.0692479-4 3.99999999z"></path></g></svg>
                                    </span>
                                </th>
                                <th className='font-left' style={{ width: '12.5%' }}>
                                    <span className='header-content'>Status</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="#101928" fillRule="evenodd"><path d="M7.64644661 1.64644661c.17356635-.17356635.44299075-.1928515.63785889-.05785545l.06924789.05785545 4.00000001 4c.1952621.19526215.1952621.51184463 0 .70710678-.1735664.17356635-.4429908.1928515-.6378589.05785545l-.0692479-.05785545L8 2.707 4.35355339 6.35355339c-.17356635.17356635-.44299075.1928515-.63785889.05785545l-.06924789-.05785545c-.17356635-.17356635-.1928515-.44299075-.05785545-.63785889l.05785545-.06924789 4-4zM8.35355339 14.35355339c-.17356635.17356635-.44299075.1928515-.63785889.05785545l-.06924789-.05785545L3.6464466 10.3535534c-.1952621-.1952622-.1952621-.5118446 0-.7071068.1735664-.1735663.4429908-.1928515.6378589-.0578554l.0692479.0578554L8 13.293l3.64644661-3.6465534c.17356635-.1735663.44299075-.1928515.63785889-.0578554l.06924789.0578554c.17356635.1735664.1928515.4429908.05785545.6378589l-.05785545.0692479-4 3.99999999z"></path></g></svg>
                                    </span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='stocktake-started font-left'>P3</td>
                                <td className='stocktake-completed font-left'>3 Mar 2023</td>
                                <td className='stocktake-name font-left'>1</td>
                                <td className='stocktake-completed font-left'>eteer</td>
                                <td className='stocktake-started font-right'>RUB 0</td>
                                <td className='stocktake-status font-left'>
                                    <span className='badge success'>COMPLETED</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='product-count'>
                        <span>1 of 1</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StockOrders;