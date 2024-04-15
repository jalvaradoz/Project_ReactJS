import React from 'react'

const HistoryComponent = ({ collection }) => {

    switch(collection){
        case'thea':
            return (
                <div className='p-16 text-xl md:text-3xl lg:text-5xl'>
                    <p className='tracking-wide leading-relaxed'>
                        Uniting modernity and antiquity, 'THEA' by Macabre Gadgets line is inspired by outstanding Hellenic, its sensuality, purines and mythical eternity. Jewelry is executed in a unique technique combining the cutting edge and traditional materials so the the item becomes an ancient artefact achieved an effect of an antique marble statue. 
                    </p>
                </div>
            );
        case'vampire':
            return(
                <div className='p-16 text-xl md:text-3xl lg:text-5xl'>
                    <p className='tracking-wide leading-relaxed'>
                        Uniting modernity and antiquity, 'THEA' by Macabre Gadgets line is inspired by outstanding Hellenic, its sensuality, purines and mythical eternity. Jewelry is executed in a unique technique combining the cutting edge and traditional materials so the the item becomes an ancient artefact achieved an effect of an antique marble statue. 
                    </p>
                </div>
            );
        case'ghost':
            return(
                <div className='p-16 text-xl md:text-3xl lg:text-5xl'>
                    <p className='tracking-wide leading-relaxed'>
                        Uniting modernity and antiquity, 'THEA' by Macabre Gadgets line is inspired by outstanding Hellenic, its sensuality, purines and mythical eternity. Jewelry is executed in a unique technique combining the cutting edge and traditional materials so the the item becomes an ancient artefact achieved an effect of an antique marble statue. 
                    </p>
                </div>
            );
        case'faun':
            return(
                <div className='p-16 text-xl md:text-3xl lg:text-5xl'>
                    <p className='tracking-wide leading-relaxed'>
                        Uniting modernity and antiquity, 'THEA' by Macabre Gadgets line is inspired by outstanding Hellenic, its sensuality, purines and mythical eternity. Jewelry is executed in a unique technique combining the cutting edge and traditional materials so the the item becomes an ancient artefact achieved an effect of an antique marble statue. 
                    </p>
                </div>
            );
        case'siren':
            return(
                <div className='p-16 text-xl md:text-3xl lg:text-5xl'>
                    <p className='tracking-wide leading-relaxed'>
                        Uniting modernity and antiquity, 'THEA' by Macabre Gadgets line is inspired by outstanding Hellenic, its sensuality, purines and mythical eternity. Jewelry is executed in a unique technique combining the cutting edge and traditional materials so the the item becomes an ancient artefact achieved an effect of an antique marble statue. 
                    </p>
                </div>
            );
        default:
            return(
                <div className='p-16 text-xl md:text-3xl lg:text-5xl'>
                    <p className='tracking-wide leading-relaxed text-red-300'>
                        No history found for this Collection
                    </p>
                </div>
            )
    }
}

export default HistoryComponent