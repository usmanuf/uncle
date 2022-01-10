import { makeStyles} from '@material-ui/core/styles';
import Image from '../../../../../assets/Images/main-hero-bg.jpg';
import Image1 from '../../../../../assets/Images/main-hero-img-mobile.jpg';
export default makeStyles((theme) => ({
    CarouselImages:{

},
    HeroSection: {
        paddingTop:"54px",
        paddingBottom: "23px",
        backgroundImage:  `url(${Image})`,
backgroundSize: "100% 100%",
width: "100%",
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            background:  'var(--bg-Main)',
        },

    }

}))
