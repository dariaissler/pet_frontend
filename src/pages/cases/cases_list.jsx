import React from 'react'

import { Case } from './case'
import kazakstan from '../../assets/img/kazakstan.jpg'
import armenia from '../../assets/img/armenia.jpg'
import gorgia from '../../assets/img/gorgia.jpg'
import serbia from '../../assets/img/serbia.jpg'
import uzbekistan from '../../assets/img/uzbekistan.jpg'
import turkey from '../../assets/img/turkey.jpg'

const kazakhstan_desc = "Portugal is an inexpensive country to live in, with 0% tax on foreign income. It is one of the EU countries where you are entitled to obtain Portuguese citizenship after 5 years."

export const CasesList = () => {
    return (
        <div>
            <div className='row'>
                <Case title="Uzbekistan" description={kazakhstan_desc} img={uzbekistan}  />
                <Case title="Georgia" description={kazakhstan_desc} img={gorgia} />
                <Case title="Serbia" description={kazakhstan_desc} img={serbia} />
                <Case title="Turkey" description={kazakhstan_desc} img={turkey} />
                <Case title="Kazakhstan" description={kazakhstan_desc} img={kazakstan} />
                <Case title="Armenia" description={kazakhstan_desc} img={armenia} />
            </div>
        </div>
    )
}