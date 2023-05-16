import React, { useEffect, useState } from 'react';
import './sales.scss';

const SalesPage = () => {

    const [filterModalState, setFilterModalState] = useState(false);
    const [allCheckedState, setAllCheckedState] = useState(false);

    const visibleFilterModal = () => {
        setFilterModalState(true);
    }

    const hideFilterModal = () => {
        setFilterModalState(false);
    }

    const checkService = (id) => {
        document.getElementById(`${id}`).click();
    }

    const checkAllServices = () => {
        const services = ['services', 'vouchers', 'noshow-fees', 'products', 'memberships', 'cancellation'];

        services.forEach(service => {
            document.getElementById(`check-${service}`).click();
        });
    }

    useEffect(() => {
        // if(allCheckedState) {
        //     document.getElementById('mark-all').classList.toggle('active');
        // } else {
        //     document.getElementById('mark-all').classList.remove('active');
        // }
    }, [allCheckedState]);

    return (
        <div className='sales-container'>
            {
                filterModalState ?
                    <div className='filter-modal'>
                        <div className='modal-header'>
                            <span id='modal-title'>Filters</span>
                            <span id='modal-close' onClick={hideFilterModal}>
                                <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M17 1.914L16.086 1 9 8.086 1.914 1 1 1.914 8.086 9 1 16.086l.914.914L9 9.914 16.086 17l.914-.914L9.914 9z"></path></svg>
                            </span>
                        </div>
                        <div className='modal-body'>
                            <div className="group">
                                <span id='select-title'>Status</span>
                                <select id='valid-list'>
                                    <option>All statuses</option>
                                    <option>Unpaid</option>
                                    <option>Part paid</option>
                                    <option>Completed</option>
                                    <option>Exchanged</option>
                                    <option>Refunded</option>
                                    <option>Voided</option>
                                </select>
                            </div>
                            <div className='service-value-container'>
                                <div className="group">
                                    <span id='select-title'>From amount</span>
                                    <div className='value-group'>
                                        <div id='currency'>
                                            <span>RUB</span>
                                        </div>
                                        <div id='value-input'>
                                            <input type='text' placeholder='From' />
                                        </div>
                                    </div>
                                </div>
                                <div className="group">
                                    <span id='select-title'>To amount</span>
                                    <div className='retail-price-group'>
                                        <div id='currency'>
                                            <span>RUB</span>
                                        </div>
                                        <div id='value-input'>
                                            <input type='text' placeholder='To' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="group" id='check-group'>
                                <span id='select-title'>Including items</span>
                                <div className='select-all-group'>
                                    <div id='mark-all'>
                                        <svg id='all-sel' viewBox="0 0 12 10"><path fill="#FFF" fillRule="evenodd" d="M4.716 7.558L1.646 4.96A1 1 0 00.354 6.486l3.872 3.277a1 1 0 001.44-.155l6.128-8A1 1 0 0010.206.392l-5.49 7.166z"></path></svg>
                                        <svg id='sub-sel' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#FFF" fillRule="evenodd" d="M22 11H2a1 1 0 000 2h20a1 1 0 000-2z"></path></svg>
                                    </div>
                                    <span id='action-select-all' onClick={checkAllServices}>Select all</span>
                                </div>
                                <div className='checkbox-group'>
                                    <div className='left-group'>
                                        <div id='service-group'>
                                            <input type="checkbox" id='check-services'/>
                                            <span onClick={() => checkService('check-services')}>Services</span>
                                        </div>
                                        <div id='voucher-group'>
                                            <input type="checkbox" id='check-vouchers'/>
                                            <span onClick={() => checkService('check-vouchers')}>Vouchers</span>
                                        </div>
                                        <div id='noshow-fees-group'>
                                            <input type="checkbox" id='check-noshow-fees'/>
                                            <span onClick={() => checkService('check-noshow-fees')}>No-show fees</span>
                                        </div>
                                    </div>
                                    <div className='right-group'>
                                        <div id='products-group'>
                                            <input type="checkbox" id='check-products'/>
                                            <span onClick={() => checkService('check-products')}>Products</span>
                                        </div>
                                        <div id='memberships-group'>
                                            <input type="checkbox" id='check-memberships'/>
                                            <span onClick={() => checkService('check-memberships')}>Memberships</span>
                                        </div>
                                        <div id='cancellation-group'>
                                            <input type="checkbox" id='check-cancellation'/>
                                            <span onClick={() => checkService('check-cancellation')}>Cancellation fees</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='modal-footer'>
                            <span onClick={hideFilterModal}>Clear all filters</span>
                            <div id='actions'>
                                <button id='action-cancel' onClick={hideFilterModal}>Cancel</button>
                                <button id='action-apply'>Apply</button>
                            </div>
                        </div>
                    </div> : <></>
            }
            <div className='content-container'>
                <div className='content-detail'>
                    <div className='content-title'>Sales</div>
                    <span className='content-summary'>
                        View, filter and export the history of your sales.
                        <a> Learn more</a>
                    </span>
                </div>
                <select className='select-action'>
                    <option>PDF</option>
                    <option>Excel</option>
                    <option>CSV</option>
                </select>
            </div>
            <div className='content-setting'>
                <div className='search-container'>
                    <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M23.78 22.722l-4.328-4.328c1.073-1.307 1.72-2.983 1.72-4.808C21.17 9.398 17.77 6 13.585 6 9.395 6 6 9.398 6 13.586c0 4.187 3.394 7.585 7.586 7.585 1.825 0 3.497-.64 4.805-1.712l4.33 4.324c.294.294.768.294 1.06 0 .295-.29.295-.767 0-1.057zm-10.194-3.06c-3.354 0-6.08-2.726-6.08-6.076 0-3.35 2.726-6.08 6.08-6.08 3.35 0 6.08 2.73 6.08 6.08s-2.73 6.076-6.08 6.076z"></path></svg>
                    <input type="text" placeholder='Search by Sale or Client' />
                </div>
                <div className='select-month'>
                    <button>Today</button>
                </div>
                <div className='filter-group' onClick={visibleFilterModal}>
                    <span>Filters</span>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 9.375a.75.75 0 0 1 .75.75V20.25a.75.75 0 0 1-1.5 0V10.125a.75.75 0 0 1 .75-.75ZM12 3a.75.75 0 0 1 .75.75v2.625a.75.75 0 0 1-1.5 0V3.75A.75.75 0 0 1 12 3Z"></path><path d="M12 7.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM9.375 8.25a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0ZM18.75 16.75c.414.125.75.46.75.875v2.625a.75.75 0 0 1-1.5 0v-2.625a.75.75 0 0 1 .75-.75ZM18.75 3a.75.75 0 0 1 .75.75v10.125a.75.75 0 0 1-1.5 0V3.75a.75.75 0 0 1 .75-.75Z"></path><path d="M18.75 14.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm-2.625 1.125a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0ZM5.25 13.875a.75.75 0 0 1 .75.75v5.625a.75.75 0 0 1-1.5 0v-5.625a.75.75 0 0 1 .75-.75ZM5.25 3a.75.75 0 0 1 .75.75v7.125a.75.75 0 1 1-1.5 0V3.75A.75.75 0 0 1 5.25 3Z"></path><path d="M5.25 11.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM2.625 12.75a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z"></path></svg>
                </div>
            </div>
            <div className='content-details'>
                <div className='table-container'>
                    <table>
                        <thead>
                            <tr className='table-header'>
                                <th className='font-right' style={{ width: '120px' }}>
                                    <span className='header-content'>Sale #</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="#101928" fillRule="evenodd"><path d="M7.64644661 1.64644661c.17356635-.17356635.44299075-.1928515.63785889-.05785545l.06924789.05785545 4.00000001 4c.1952621.19526215.1952621.51184463 0 .70710678-.1735664.17356635-.4429908.1928515-.6378589.05785545l-.0692479-.05785545L8 2.707 4.35355339 6.35355339c-.17356635.17356635-.44299075.1928515-.63785889.05785545l-.06924789-.05785545c-.17356635-.17356635-.1928515-.44299075-.05785545-.63785889l.05785545-.06924789 4-4zM8.35355339 14.35355339c-.17356635.17356635-.44299075.1928515-.63785889.05785545l-.06924789-.05785545L3.6464466 10.3535534c-.1952621-.1952622-.1952621-.5118446 0-.7071068.1735664-.1735663.4429908-.1928515.6378589-.0578554l.0692479.0578554L8 13.293l3.64644661-3.6465534c.17356635-.1735663.44299075-.1928515.63785889-.0578554l.06924789.0578554c.17356635.1735664.1928515.4429908.05785545.6378589l-.05785545.0692479-4 3.99999999z"></path></g></svg>
                                    </span>
                                </th>
                                <th className='font-right' style={{ width: '120px' }}>
                                    <span className='header-content'>Client</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="#101928" fillRule="evenodd"><path d="M7.64644661 1.64644661c.17356635-.17356635.44299075-.1928515.63785889-.05785545l.06924789.05785545 4.00000001 4c.1952621.19526215.1952621.51184463 0 .70710678-.1735664.17356635-.4429908.1928515-.6378589.05785545l-.0692479-.05785545L8 2.707 4.35355339 6.35355339c-.17356635.17356635-.44299075.1928515-.63785889.05785545l-.06924789-.05785545c-.17356635-.17356635-.1928515-.44299075-.05785545-.63785889l.05785545-.06924789 4-4zM8.35355339 14.35355339c-.17356635.17356635-.44299075.1928515-.63785889.05785545l-.06924789-.05785545L3.6464466 10.3535534c-.1952621-.1952622-.1952621-.5118446 0-.7071068.1735664-.1735663.4429908-.1928515.6378589-.0578554l.0692479.0578554L8 13.293l3.64644661-3.6465534c.17356635-.1735663.44299075-.1928515.63785889-.0578554l.06924789.0578554c.17356635.1735664.1928515.4429908.05785545.6378589l-.05785545.0692479-4 3.99999999z"></path></g></svg>
                                    </span>
                                </th>
                                <th className='font-right' style={{ width: '120px' }}>
                                    <span className='header-content'>Status</span>
                                </th>
                                <th className='font-right' style={{ width: '120px' }}>
                                    <span className='header-content'>Sale date</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="#101928" fillRule="evenodd"><path d="M7.64644661 1.64644661c.17356635-.17356635.44299075-.1928515.63785889-.05785545l.06924789.05785545 4.00000001 4c.1952621.19526215.1952621.51184463 0 .70710678-.1735664.17356635-.4429908.1928515-.6378589.05785545l-.0692479-.05785545L8 2.707 4.35355339 6.35355339c-.17356635.17356635-.44299075.1928515-.63785889.05785545l-.06924789-.05785545c-.17356635-.17356635-.1928515-.44299075-.05785545-.63785889l.05785545-.06924789 4-4zM8.35355339 14.35355339c-.17356635.17356635-.44299075.1928515-.63785889.05785545l-.06924789-.05785545L3.6464466 10.3535534c-.1952621-.1952622-.1952621-.5118446 0-.7071068.1735664-.1735663.4429908-.1928515.6378589-.0578554l.0692479.0578554L8 13.293l3.64644661-3.6465534c.17356635-.1735663.44299075-.1928515.63785889-.0578554l.06924789.0578554c.17356635.1735664.1928515.4429908.05785545.6378589l-.05785545.0692479-4 3.99999999z"></path></g></svg>
                                    </span>
                                </th>
                                <th className='font-right' style={{ width: '120px' }}>
                                    <span className='header-content'>Tips</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="#101928" fillRule="evenodd"><path d="M7.64644661 1.64644661c.17356635-.17356635.44299075-.1928515.63785889-.05785545l.06924789.05785545 4.00000001 4c.1952621.19526215.1952621.51184463 0 .70710678-.1735664.17356635-.4429908.1928515-.6378589.05785545l-.0692479-.05785545L8 2.707 4.35355339 6.35355339c-.17356635.17356635-.44299075.1928515-.63785889.05785545l-.06924789-.05785545c-.17356635-.17356635-.1928515-.44299075-.05785545-.63785889l.05785545-.06924789 4-4zM8.35355339 14.35355339c-.17356635.17356635-.44299075.1928515-.63785889.05785545l-.06924789-.05785545L3.6464466 10.3535534c-.1952621-.1952622-.1952621-.5118446 0-.7071068.1735664-.1735663.4429908-.1928515.6378589-.0578554l.0692479.0578554L8 13.293l3.64644661-3.6465534c.17356635-.1735663.44299075-.1928515.63785889-.0578554l.06924789.0578554c.17356635.1735664.1928515.4429908.05785545.6378589l-.05785545.0692479-4 3.99999999z"></path></g></svg>
                                    </span>
                                </th>
                                <th className='font-right' style={{ width: '120px' }}>
                                    <span className='header-content'>Gross total</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="#101928" fillRule="evenodd"><path d="M7.64644661 1.64644661c.17356635-.17356635.44299075-.1928515.63785889-.05785545l.06924789.05785545 4.00000001 4c.1952621.19526215.1952621.51184463 0 .70710678-.1735664.17356635-.4429908.1928515-.6378589.05785545l-.0692479-.05785545L8 2.707 4.35355339 6.35355339c-.17356635.17356635-.44299075.1928515-.63785889.05785545l-.06924789-.05785545c-.17356635-.17356635-.1928515-.44299075-.05785545-.63785889l.05785545-.06924789 4-4zM8.35355339 14.35355339c-.17356635.17356635-.44299075.1928515-.63785889.05785545l-.06924789-.05785545L3.6464466 10.3535534c-.1952621-.1952622-.1952621-.5118446 0-.7071068.1735664-.1735663.4429908-.1928515.6378589-.0578554l.0692479.0578554L8 13.293l3.64644661-3.6465534c.17356635-.1735663.44299075-.1928515.63785889-.0578554l.06924789.0578554c.17356635.1735664.1928515.4429908.05785545.6378589l-.05785545.0692479-4 3.99999999z"></path></g></svg>
                                    </span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='font-left ref-name'>3</td>
                                <td className='font-left'>Walk-In</td>
                                <td className='font-left'>
                                    <span className='badge-success badge'>COMPLETED</span>
                                </td>
                                <td className='font-left'>23 Feb 2023, 23:46</td>
                                <td className='font-right'>RUB 0.00</td>
                                <td className='font-right'>RUB 4.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default SalesPage;
