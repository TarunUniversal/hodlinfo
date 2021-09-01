import React from 'react';
import './Content.css';
import banner1 from '../Images/banner1.png';
import banner2 from '../Images/banner2.png';
import wajirx from '../Images/wajirx.png';
import bitbns from '../Images/bitbns.png';
import giotus from '../Images/giotus.png';
import colodax from '../Images/colodax.png';
import zebpay from '../Images/zebpay.png';
import coindcx from '../Images/coindcx.png';

function Content() {
    
    return (
        <>
        <div container style={{padding:'0px 10px', margin:'10px'}}>
            <div style={{display:'flex', justifyContent:'space-evenly', textAlign:'center', alignItems:'center', padding:'10px 0px'}} >
                <div>
                    <div style={{color:'rgb(61, 198, 193)', fontWeight:'600', fontSize:'2.5vw'}} >0.48 %</div>
                    <div style={{color:'gray', fontWeight:'300', fontSize:'1.5vw'}} >5 mins</div>
                </div>
                <div>
                    <div style={{color:'rgb(61, 198, 193)', fontWeight:'600', fontSize:'2.5vw'}} >0.64 %</div>
                    <div style={{color:'gray', fontWeight:'300', fontSize:'1.5vw'}} >1 hour</div>
                </div>
                <div>
                    <div style={{fontWeight:'300', fontSize:'2.5vw', letterSpacing:'0.75px', color:'gray'}} >Best Price to Trade</div>
                    <div style={{fontWeight:'600', fontSize:'5vw'}} >₹ 25,11,600</div>
                    <div style={{fontWeight:'300', fontSize:'1vw', letterSpacing:'0.75px', color:'gray'}} >Average BTC/INR net price including commission</div>
                </div>
                <div>
                    <div style={{color:'rgb(61, 198, 193)', fontWeight:'600', fontSize:'2.5vw'}} >10.48 %</div>
                    <div style={{color:'gray', fontWeight:'300', fontSize:'1.5vw'}} >1 day</div>
                </div>
                <div>
                    <div style={{color:'rgb(61, 198, 193)', fontWeight:'600', fontSize:'2.5vw'}} >12.06 %</div>
                    <div style={{color:'gray', fontWeight:'300', fontSize:'1.5vw'}} >7 days</div>
                </div>
            </div>

            <a href="https://www.finstreet.in" >
                <img src={banner1} alt="" style={{height:"auto", width:'100%'}} />
            </a>
        </div>

        <div container style={{padding:'16px', overflowY:'hidden', overflowX:'auto', margin:'10px'}} >
        <table className="table" style={{color:'gray', textAlign:'center'}} >
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Platform</th>
                <th scope="col">Last Trade Price</th>
                <th scope="col">Buy / Sell Price</th>
                <th scope="col">Difference</th>
                <th scope="col">Savings</th>
                </tr>
            </thead>
            <tbody style={{color:'#0c0f48'}} >
                <tr  style={{backgroundColor: '#f8f9fa'}}  >
                <th className='p-3' scope="row" style={{borderRadius: '1rem 0 0 1rem'}} >1</th>
                <td className='p-3' style={{color:'#0c0f48', fontWeight:'600'}} > <img src={wajirx} alt="#" style={{width:'20px', borderRadius:"50%"}} /> WazirX</td>
                <td className='p-3' style={{color:'#0c0f48', fontWeight:'600'}} >25,02,429</td>
                <td className='p-3' style={{color:'#0c0f48', fontWeight:'600'}} >24,97,500 / 25,02,428</td>
                <td className='p-3'  style={{color:'#da5757', fontWeight:'600'}} >-0.68 %</td>
                <td className='p-3' style={{color:'#5dc7c2', fontWeight:'600', borderRadius: '0rem 1rem 1rem 0rem'}} >17,086</td>
                </tr>
                <br/>
                <tr  style={{backgroundColor: '#f8f9fa'}}  >
                <th className='p-3' scope="row" style={{borderRadius: '1rem 0 0 1rem'}} >2</th>
                <td className='p-3' style={{color:'#0c0f48', fontWeight:'600'}} > <img src={bitbns} alt="#" style={{width:'20px', borderRadius:"50%"}} /> Bitbns</td>
                <td className='p-3' style={{color:'#0c0f48', fontWeight:'600'}} >25,02,429</td>
                <td className='p-3' style={{color:'#0c0f48', fontWeight:'600'}} >24,97,500 / 25,02,428</td>
                <td className='p-3'  style={{color:'#da5757', fontWeight:'600'}} >-0.68 %</td>
                <td className='p-3' style={{color:'#5dc7c2', fontWeight:'600', borderRadius: '0rem 1rem 1rem 0rem'}} >17,086</td>
                </tr>
                <br/>
                <tr  style={{backgroundColor: '#f8f9fa'}}  >
                <th className='p-3' scope="row" style={{borderRadius: '1rem 0 0 1rem'}} >3</th>
                <td className='p-3' style={{color:'#0c0f48', fontWeight:'600'}} > <img src={giotus} alt="#" style={{width:'20px', borderRadius:"50%"}} /> Giotus</td>
                <td className='p-3' style={{color:'#0c0f48', fontWeight:'600'}} >25,02,429</td>
                <td className='p-3' style={{color:'#0c0f48', fontWeight:'600'}} >24,97,500 / 25,02,428</td>
                <td className='p-3'  style={{color:'#da5757', fontWeight:'600'}} >-0.68 %</td>
                <td className='p-3' style={{color:'#5dc7c2', fontWeight:'600', borderRadius: '0rem 1rem 1rem 0rem'}} >17,086</td>
                </tr>
                <br/>
                <tr  style={{backgroundColor: '#f8f9fa'}}  >
                <th className='p-3' scope="row" style={{borderRadius: '1rem 0 0 1rem'}} >4</th>
                <td className='p-3' style={{color:'#0c0f48', fontWeight:'600'}} > <img src={colodax} alt="#" style={{width:'20px', borderRadius:"50%"}} /> Colodax</td>
                <td className='p-3' style={{color:'#0c0f48', fontWeight:'600'}} >25,02,429</td>
                <td className='p-3' style={{color:'#0c0f48', fontWeight:'600'}} >24,97,500 / 25,02,428</td>
                <td className='p-3'  style={{color:'#da5757', fontWeight:'600'}} >-0.68 %</td>
                <td className='p-3' style={{color:'#5dc7c2', fontWeight:'600', borderRadius: '0rem 1rem 1rem 0rem'}} >17,086</td>
                </tr>
                <br/>
                <tr  style={{backgroundColor: '#f8f9fa'}}  >
                <th className='p-3' scope="row" style={{borderRadius: '1rem 0 0 1rem'}} >5</th>
                <td className='p-3' style={{color:'#0c0f48', fontWeight:'600'}} > <img src={zebpay} alt="#" style={{width:'20px', borderRadius:"50%"}} /> Zebpay</td>
                <td className='p-3' style={{color:'#0c0f48', fontWeight:'600'}} >25,02,429</td>
                <td className='p-3' style={{color:'#0c0f48', fontWeight:'600'}} >24,97,500 / 25,02,428</td>
                <td className='p-3'  style={{color:'#da5757', fontWeight:'600'}} >-0.68 %</td>
                <td className='p-3' style={{color:'#5dc7c2', fontWeight:'600', borderRadius: '0rem 1rem 1rem 0rem'}} >17,086</td>
                </tr>
                <br/>
                <tr  style={{backgroundColor: '#f8f9fa'}}  >
                <th className='p-3' scope="row" style={{borderRadius: '1rem 0 0 1rem'}} >6</th>
                <td className='p-3' style={{color:'#0c0f48', fontWeight:'600'}} > <img src={coindcx} alt="#" style={{width:'20px', borderRadius:"50%"}} /> CoinDCX</td>
                <td className='p-3' style={{color:'#0c0f48', fontWeight:'600'}} >25,02,429</td>
                <td className='p-3' style={{color:'#0c0f48', fontWeight:'600'}} >24,97,500 / 25,02,428</td>
                <td className='p-3'  style={{color:'#da5757', fontWeight:'600'}} >-0.68 %</td>
                <td className='p-3' style={{color:'#5dc7c2', fontWeight:'600', borderRadius: '0rem 1rem 1rem 0rem'}} >17,086</td>
                </tr>
            </tbody>
        </table>
        </div>

        <div container style={{padding:'0px 10px', margin:'10px'}} >
            <a href="https://ftx.com/" >
                <img src={banner2} alt="" style={{width:'100%', height:'auto'}} />
            </a>
        </div>
        <hr/>
        <div container style={{padding:'12px', color:'gray', bottom:'0'}} >
            <div style={{display:'flex'}} >
                <div style={{paddingRight:'12px'}} >Copyright © 2019</div>
                <div style={{paddingRight:'12px'}} >HodlInfo.com</div>
                <div style={{paddingRight:'12px'}} >Developed By <a href="https://www.quadbtech.com/" style={{color:'rgb(61, 198, 193)', textDecoration:'none'}} >QuadBTech</a></div>
                <div style={{marginLeft:'auto'}} >Support</div>
            </div>
        </div>

        </>
    )
}

export default Content
