import {HomeHeader} from './HomeHeader.js';
import {HomeThreeCol} from './HomeThreeCol.js';
import {HomeSimpleSteps} from './HomeSimpleSteps.js';
import {HomeAboutUs} from './HomeAboutUs.js';
import { HomeWhoWeHelp } from './HomeWhoWeHelp.js';
import { HomeContact } from './HomeContact.js';

export const Home = () => {
    return (
        <>
            <HomeHeader />
            <HomeThreeCol />
            <HomeSimpleSteps/>
            <HomeAboutUs />
            <HomeWhoWeHelp />
            <HomeContact />
        </>
    )
}