import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import InfoIcon from '@mui/icons-material/Info';
import React from 'react';
import './Widgets.css';

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className='widgets__article'>
            <div className='widgets__articleLeft'>
                <FiberManualRecordIcon />
            </div>
            <div className='widgets__articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );

    return (
        <div className='widgets'>
            <div className='widgets__header'>
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle(
                "How hyundai motor group became the world's third-largest automaker",
                "The three auto brands in the automaker's stable — Hyundai, Kia and Genesis — are nipping at the heel"
            )}
            {newsArticle(
                "Jim cramer's thursday rapid fire: snowflake, best buy, paramount, okta and celsius",
                'Jim Cramer offers his quick thoughts on these five stock outside the CNBC Investing Club portfolio.'
            )}
            {newsArticle(
                'Bitcoin tops $63,000 as it closes out the best month since 2020',
                'Crypto prices rose on Thursday as bitcoin and ether headed for a winning month.'
            )}
            {newsArticle(
                'Apple expands self-service repair program to latest m3 macs',
                'Apple is expanding its self-service repair program to include its MacBook Pro and iMac models'
            )}
            {newsArticle(
                'Canada: the economy expanded by 1.0% yoy in q4',
                'According to Statistics Canada, the GDP Growth Rate expanded more than expected by 1.0% on a yearly'
            )}
        </div>
    );
}

export default Widgets;
