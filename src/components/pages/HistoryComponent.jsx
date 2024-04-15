import React from 'react'

const HistoryComponent = ({ collection }) => {

    switch(collection){
        case'thea':
            return (
                <div className='p-16 text-xl md:text-3xl lg:text-5xl'>
                    <p className='tracking-wide leading-relaxed'>
                        Uniting modernity and antiquity, "THEA" by Macabre Gadgets line is inspired by outstanding Hellenic, its sensuality, purines and mythical eternity. Jewelry is executed in a unique technique combining the cutting edge and traditional materials so the the item becomes an ancient artefact achieved an effect of an antique marble statue. 
                    </p>
                </div>
            );
        case'vampire':
            return(
                <div className='p-16 text-xl md:text-3xl lg:text-5xl'>
                    <p className='tracking-wide leading-relaxed'>
                        Introducing the "VAMPIRE" collection, blending vampiric allure with gothic eras. Each piece draws from the haunting beauty of nocturnal creatures, intertwining modern sophistication with ancient mystique. Crafted using avant-garde techniques and traditional elements, these jewels evoke the darkness of midnight and the elegance of bygone ages.
                    </p>
                </div>
            );
        case'ghost':
            return(
                <div className='p-16 text-xl md:text-3xl lg:text-5xl'>
                    <p className='tracking-wide leading-relaxed'>
                        Introducing the "GHOST" collection, a fusion of ghostly enchantment and ethereal epochs. Each piece captures the elusive essence of spirits, blending contemporary flair with timeless mystery. Crafted through innovative methods and classical materials, these jewels evoke the whispers of phantoms and the enchantment of forgotten realms.
                    </p>
                </div>
            );
        case'faun':
            return(
                <div className='p-16 text-xl md:text-3xl lg:text-5xl'>
                    <p className='tracking-wide leading-relaxed'>
                    Celebrating harsh and primeval beauty of nature, Unveiling the "FAUN" collection, an ode to nature which is pure and mystical in a way that scares us on a innermost instinctive levels. Try to see the light in the deepest fogs and darkness in the purest blossoms. To see beauty in all sides of a life circle and appreciate a never ending dance of Eros and Thanatos. Imagine us, humans, as nothing more than feral and sensual animals, mighty and fragile at the same time.
                    We aim to evoke the feeling of being awed by ancient forests, as our predecessors have been, inhabiting woods and seas with mythical creatures as a consequence.
                    It's a journey made of imagination and reflection of what surrounding world would have meant to people then and what it is for us today. Would there be a modern Fauns, unicorns, tree spirits or sacred animals? 
                    This collection poetically exalts creatures of folklores around the world and fantasizes of how would they fit in our reality.
                    </p>
                </div>
            );
        case'siren':
            return(
                <div className='p-16 text-xl md:text-3xl lg:text-5xl'>
                    <p className='tracking-wide leading-relaxed'>
                    After the "GHOST" and "VAMPIRE" collections we are proud to release the last part of the triptych. Our creative team have been traveling for six months through the Indian Ocean looking for textures, colors, shapes and the whole vibe of the "SIREN" collection.
                    "SIREN" is, of course dark, eery and vicious (as you may imagine it to be) but it is also savage, dangerous, alien and sharp, therefore - graphically and dramatically futuristic. That's why we chose tropical seas and its creatures to design our Siren. 
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