
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
import SvgIcon from '@material-ui/core/SvgIcon';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/MailOutlined';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import CalendarIcon from '@material-ui/icons/CalendarTodayOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import MoreIcon from '@material-ui/icons/MoreVert';

const styles = (theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        grow: {
            flexGrow: 1,
        },
        appBar: {
            height: 58,
            boxShadow: 'none',
        },
        appBar_toolBar: {
            borderBottom: '1px solid #EEEEEE',
            minHeight: 58,
            // sm, small: 600px or larger
            '@media (min-width: 600px)': {
                minHeight: 58,
            },
            // alignItems: 'stretch',
        },
        menuButton: {
            marginLeft: -12,
            marginRight: 20,
        },
        welcomeTitle: {
            letterSpacing: 0.3,
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'flex',
                alignItems: 'center',
            },
        },
        title_hospital: {
            fontSize: 12,
            color: theme.palette.primary.darkGrey,
        },
        title_welcome: {
            fontSize: 12,
            color: theme.palette.primary.lightGrey,
        },
        title_name: {
            fontSize: 12,
            color: theme.palette.primary.red,
        },
        searchAndIcons: {
            display: 'flex',
            flexGrow: 1,
            justifyContent: 'flex-end',
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            borderLeft: '1px solid #EEEEEE',
            marginRight: theme.spacing.unit * 2,
            marginLeft: 0,
            width: 463,
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing.unit * 3,
                width: 463,
            },
        },
        searchIcon: {
            width: theme.spacing.unit * 9,
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
            width: '100%',
            height: '100%',
        },
        inputInput: {
            fontSize: 12,
            paddingTop: theme.spacing.unit,
            paddingRight: theme.spacing.unit,
            paddingBottom: theme.spacing.unit,
            paddingLeft: theme.spacing.unit * 10,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: 200,
            },
        },
        sectionDesktop: {
            display: 'none',
            [theme.breakpoints.up('md')]: {
                display: 'flex',
            },
            width: 218,
            borderLeft: '1px solid #EEEEEE',
            justifyContent: 'flex-end',
        },
        sectionMobile: {
            display: 'flex',
            [theme.breakpoints.up('md')]: {
                display: 'none',
            },
        },
    });

export interface Props extends WithStyles<typeof styles> { }

interface State {
    anchorEl: null | HTMLElement;
    mobileMoreAnchorEl: null | HTMLElement;
}

class ApplicationBar extends React.Component<Props, State> {
    state: State = {
        anchorEl: null,
        mobileMoreAnchorEl: null,
    };

    handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleMenuClose = () => {
        this.setState({ anchorEl: null });
        this.handleMobileMenuClose();
    };

    handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        this.setState({ mobileMoreAnchorEl: event.currentTarget });
    };

    handleMobileMenuClose = () => {
        this.setState({ mobileMoreAnchorEl: null });
    };

    render() {
        const { anchorEl, mobileMoreAnchorEl } = this.state;
        const { classes } = this.props;
        const isMenuOpen = Boolean(anchorEl);
        const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

        const renderMenu = (
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMenuOpen}
                onClose={this.handleMenuClose}
            >
                <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
            </Menu>
        );

        const renderMobileMenu = (
            <Menu
                anchorEl={mobileMoreAnchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMobileMenuOpen}
                onClose={this.handleMenuClose}
            >
                <MenuItem onClick={this.handleMobileMenuClose}>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <MailIcon />
                        </Badge>
                    </IconButton>
                    <p>Messages</p>
                </MenuItem>
                <MenuItem onClick={this.handleMobileMenuClose}>
                    <IconButton color="inherit">
                        <Badge badgeContent={11} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <p>Notifications</p>
                </MenuItem>
                <MenuItem onClick={this.handleProfileMenuOpen}>
                    <IconButton color="inherit">
                        <AccountCircle />
                    </IconButton>
                    <p>Profile</p>
                </MenuItem>
            </Menu>
        );

        return (
            <div className={classes.root}>
                <AppBar className={classes.appBar} position="static">
                    <Toolbar className={classes.appBar_toolBar}>
                        {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
                            <MenuIcon />
                        </IconButton> */}
                        <div className={classes.welcomeTitle}>
                            <Typography className={classes.title_hospital} color="inherit" noWrap>
                                Hospital St. Democrito
                                &nbsp;-&nbsp;
                        </Typography>
                            <Typography className={classes.title_welcome}>
                                Welcome back,&nbsp;
                        </Typography>
                            <Typography className={classes.title_name}>
                                Mario Rossi
                        </Typography>
                        </div>
                        <div className={classes.searchAndIcons}>
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SvgIcon>
                                        <path d={"M19.9900125,18.7425 L14.8464419,13.5925 C16.0049938,12.1575 16.6991261,10.335 16.6991261,8.35 C16.701623,3.7475 12.9588015,0 8.35955056,0 C3.75780275,0 0.0149812734,3.7475 0.0149812734,8.3525 C0.0149812734,12.9575 3.75780275,16.705 8.35705368,16.705 C10.3370787,16.705 12.1598002,16.01 13.5930087,14.85 L18.7365793,20 L19.9900125,18.7425 Z M8.35955056,14.9275 C4.73907615,14.9275 1.79275905,11.9775 1.79275905,8.3525 C1.79275905,4.7275 4.73907615,1.7775 8.35955056,1.7775 C11.980025,1.7775 14.9263421,4.7275 14.9263421,8.3525 C14.9263421,11.9775 11.980025,14.9275 8.35955056,14.9275 Z M2.85642946,7.9975 L4.63171036,7.9975 C4.63171036,6.135 6.14481898,4.62 8.00499376,4.62 L8.00499376,2.8425 C5.16604245,2.8425 2.85642946,5.155 2.85642946,7.9975 Z"} />
                                    </SvgIcon>
                                </div>
                                <InputBase
                                    placeholder="Search something…"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                />
                            </div>
                            {/* <div className={classes.grow} /> */}
                            <div className={classes.sectionDesktop}>
                                <IconButton color="inherit">
                                    <Badge badgeContent={2} color="secondary">
                                        {/* <NotificationsIcon /> */}
                                        <SvgIcon>
                                            <path d="M8.3419244,2.78423237 C8.3419244,1.90871369 9.08075601,1.19502075 9.9871134,1.19502075 C10.8934708,1.19502075 11.6323024,1.90871369 11.6323024,2.78423237 L11.6323024,2.8879668 L12.8651203,2.8879668 L12.8651203,2.78423237 C12.8651203,1.24896266 11.5764605,0 9.99140893,0 C8.40206186,0 7.10910653,1.24896266 7.10910653,2.78423237 L7.10910653,2.8879668 L8.3419244,2.8879668 L8.3419244,2.78423237 L8.3419244,2.78423237 Z M17.9639175,13 L17.8994845,12.9087137 L17.8908935,12.9004149 C17.757732,12.746888 17.6030928,12.6099585 17.4484536,12.473029 C16.8599656,11.9460581 16.0524055,11.219917 15.8762887,9.08298755 C15.6314433,6.09128631 13.5309278,3.06224066 9.9871134,3.06224066 C6.4475945,3.06224066 4.34278351,6.09128631 4.09364261,9.08298755 C3.91752577,11.2157676 3.10996564,11.9377593 2.52147766,12.4688797 L2.5128866,12.4771784 C2.35395189,12.6182573 2.20360825,12.7510373 2.0790378,12.9004149 L2.01460481,12.9875519 L2.01030928,12.9958506 C1.56786942,13.780083 1.66237113,14.7385892 1.72250859,15.3692946 C1.73969072,15.5145228 1.75257732,15.6639004 1.75257732,15.7676349 L1.75257732,16.120332 L2.07044674,16.2904564 C3.42783505,17.0207469 5.06872852,17.4813278 7.10910653,17.6929461 C7.11769759,18.2323651 7.35395189,18.7551867 7.77920962,19.1659751 C8.32044674,19.6929461 9.12371134,19.9958506 9.98281787,19.9958506 C11.5549828,19.9958506 12.8393471,18.966805 12.8694158,17.6887967 C14.9097938,17.4771784 16.5463918,17.0207469 17.9080756,16.2904564 L18.225945,16.120332 L18.225945,15.7676349 C18.225945,15.6929461 18.2345361,15.6099585 18.2431271,15.5062241 C18.2474227,15.4605809 18.2517182,15.4149378 18.2560137,15.3651452 C18.3118557,14.7427386 18.4063574,13.7883817 17.9639175,13 Z M9.98281787,18.8091286 C9.45017182,18.8091286 8.96477663,18.6348548 8.65120275,18.3236515 C8.48367698,18.1618257 8.38058419,17.9792531 8.35051546,17.7883817 C8.87027491,17.813278 9.41580756,17.8298755 9.98281787,17.8298755 C10.5541237,17.8298755 11.0996564,17.8174274 11.6194158,17.7883817 C11.5249141,18.3609959 10.8290378,18.8091286 9.98281787,18.8091286 Z M9.98281787,4.25726141 C12.9037801,4.25726141 14.4458763,6.80912863 14.6434708,9.17842324 C14.8582474,11.7717842 15.9063574,12.7178423 16.6022337,13.340249 L16.6065292,13.3443983 C16.6365979,13.3692946 16.6623711,13.3941909 16.6881443,13.4190871 C16.7697595,13.4937759 16.8427835,13.560166 16.8986254,13.6224066 C17.1219931,14.0829876 17.0618557,14.7510373 17.0189003,15.2448133 L17.0146048,15.2738589 C17.0103093,15.3070539 17.0103093,15.340249 17.0060137,15.373444 C17.0060137,15.3858921 17.0017182,15.3983402 17.0017182,15.406639 C15.2835052,16.2489627 13.0498282,16.6390041 9.98281787,16.6390041 C6.91151203,16.6390041 4.67783505,16.2448133 2.95962199,15.4024896 C2.95532646,15.3609959 2.95103093,15.3236515 2.95103093,15.2821577 L2.95103093,15.2697095 C2.90378007,14.8049793 2.83505155,14.0995851 3.06701031,13.6224066 C3.14003436,13.5435685 3.23453608,13.4564315 3.3419244,13.3609959 L3.35910653,13.3443983 C4.05498282,12.7219917 5.10738832,11.7842324 5.32216495,9.18257261 C5.51975945,6.80912863 7.06185567,4.25726141 9.98281787,4.25726141 Z" />
                                        </SvgIcon>
                                    </Badge>
                                </IconButton>
                                <IconButton color="inherit">
                                    {/* <MailIcon /> */}
                                    <SvgIcon>
                                        <path d="M15.047619,10.9366197 L15.047619,3.2629108 C15.047619,2.15375587 14.0873016,1.25 12.9047619,1.25 L2.16666667,1.25 C0.984126984,1.25 0.0238095238,2.15375587 0.0238095238,3.2629108 L0.0238095238,10.9366197 C0.0238095238,12.0457746 0.984126984,12.9495305 2.16666667,12.9495305 L2.24603175,12.9495305 L2.24603175,14.4448357 C2.24603175,14.8474178 2.47619048,15.1924883 2.83333333,15.3650235 C2.97619048,15.4307512 3.11904762,15.463615 3.26984127,15.463615 C3.53174603,15.463615 3.78571429,15.3650235 3.97619048,15.1842723 L6.37301587,12.9495305 L12.8968254,12.9495305 C14.0873016,12.9577465 15.047619,12.0539906 15.047619,10.9366197 Z M2.9047619,11.5938967 L2.16666667,11.5938967 C1.71428571,11.5938967 1.34126984,11.2981221 1.34126984,10.9448357 L1.34126984,3.2629108 C1.34126984,2.90140845 1.71428571,2.61384977 2.16666667,2.61384977 L12.9047619,2.61384977 C13.3571429,2.61384977 13.7301587,2.90962441 13.7301587,3.2629108 L13.7301587,10.9366197 C13.7301587,11.2981221 13.3571429,11.5856808 12.9047619,11.5856808 L6.12698413,11.5856808 C5.96825397,11.5856808 5.80952381,11.6514085 5.68253968,11.758216 L3.56349206,13.7382629 L3.56349206,12.2676056 C3.56349206,11.8978873 3.26984127,11.5938967 2.9047619,11.5938967 Z M17.4761905,4.97183099 L15.9920635,4.97183099 L15.9920635,6.39319249 L17.4761905,6.39319249 C17.9761905,6.39319249 18.3888889,6.81220657 18.3888889,7.33802817 L18.3888889,13.5328638 C18.3888889,14.0504695 17.984127,14.4776995 17.4761905,14.4776995 L16.6746032,14.4776995 C16.2936508,14.4776995 15.984127,14.7981221 15.984127,15.1924883 L15.984127,16.778169 L13.9603175,14.6830986 C13.8333333,14.5516432 13.6587302,14.4776995 13.4761905,14.4776995 L9.88095238,14.4776995 C9.38095238,14.4776995 8.96825397,14.0586854 8.96825397,13.5328638 L8.96825397,13.2370892 L7.61111111,13.2370892 L7.61111111,13.5328638 C7.61111111,14.8392019 8.63492063,15.899061 9.8968254,15.899061 L13.2063492,15.899061 L15.515873,18.2899061 C15.7222222,18.5035211 15.9920635,18.6185446 16.2857143,18.6185446 C16.4285714,18.6185446 16.5714286,18.5856808 16.6984127,18.536385 C17.1031746,18.3638498 17.3730159,17.9530516 17.3730159,17.5011737 L17.3730159,15.907277 L17.484127,15.907277 C18.7460317,15.907277 19.7698413,14.8474178 19.7698413,13.5410798 L19.7698413,7.32981221 C19.7619048,6.03169014 18.7380952,4.97183099 17.4761905,4.97183099 Z" />
                                    </SvgIcon>
                                </IconButton>
                                <IconButton color="inherit">
                                    {/* <CalendarIcon /> */}
                                    <SvgIcon>
                                        <path d="M0.593886463,5.7852349 L19.4061135,5.7852349 L19.4061135,6.98881432 L0.593886463,6.98881432 L0.593886463,5.7852349 Z M6.35371179,5.06040268 L2.82969432,5.06040268 L2.82969432,3.49440716 L4.00436681,3.49440716 L4.00436681,3.85682327 L5.1790393,3.85682327 L5.1790393,3.49440716 L6.35371179,3.49440716 L6.35371179,5.06040268 Z M17.1746725,5.06040268 L13.6462882,5.06040268 L13.6462882,3.49440716 L14.8209607,3.49440716 L14.8209607,3.85682327 L16,3.85682327 L16,3.49440716 L17.1746725,3.49440716 L17.1746725,5.06040268 Z M18.4672489,20 L1.53275109,20 C0.689956332,20 0.00436681223,19.2975391 0.00436681223,18.4340045 L0.00436681223,3.49440716 C0.00436681223,2.63087248 0.689956332,1.92841163 1.53275109,1.92841163 L2.82532751,1.92841163 L2.82532751,1.08277405 C2.82969432,0.487695749 3.30131004,-7.10542736e-15 3.88646288,-7.10542736e-15 L5.29694323,-7.10542736e-15 C5.88209607,-7.10542736e-15 6.35371179,0.487695749 6.35371179,1.08277405 L6.35371179,1.92393736 L13.6462882,1.92393736 L13.6462882,1.08277405 C13.6462882,0.483221477 14.1222707,-7.10542736e-15 14.7030568,-7.10542736e-15 L16.1135371,-7.10542736e-15 C16.69869,-7.10542736e-15 17.1703057,0.487695749 17.1703057,1.08277405 L17.1703057,1.92393736 L18.4628821,1.92393736 C19.3056769,1.92393736 19.9912664,2.62639821 19.9912664,3.48993289 L19.9912664,18.4340045 C19.9956332,19.2975391 19.3100437,20 18.4672489,20 Z M1.53275109,3.13199105 C1.33624454,3.13199105 1.1790393,3.29306488 1.1790393,3.49440716 L1.1790393,18.4340045 C1.1790393,18.6308725 1.33624454,18.7964206 1.53275109,18.7964206 L18.4672489,18.7964206 C18.6593886,18.7964206 18.8209607,18.6353468 18.8209607,18.4340045 L18.8209607,3.49440716 C18.8209607,3.29306488 18.6637555,3.13199105 18.4672489,3.13199105 L16,3.13199105 L16,1.20357942 L14.8253275,1.20357942 L14.8253275,3.13199105 L5.1790393,3.13199105 L5.1790393,1.20357942 L4.00436681,1.20357942 L4.00436681,3.13199105 L1.53275109,3.13199105 Z M7.1790393,9.63758389 L9.06113537,9.63758389 L9.06113537,10.8411633 L7.1790393,10.8411633 L7.1790393,9.63758389 Z M10.9432314,9.63758389 L12.8253275,9.63758389 L12.8253275,10.8411633 L10.9432314,10.8411633 L10.9432314,9.63758389 Z M14.7030568,9.63758389 L16.5851528,9.63758389 L16.5851528,10.8411633 L14.7030568,10.8411633 L14.7030568,9.63758389 Z M3.41484716,12.049217 L5.29694323,12.049217 L5.29694323,13.2527964 L3.41484716,13.2527964 L3.41484716,12.049217 Z M7.1790393,12.049217 L9.06113537,12.049217 L9.06113537,13.2527964 L7.1790393,13.2527964 L7.1790393,12.049217 Z M10.9432314,12.049217 L12.8253275,12.049217 L12.8253275,13.2527964 L10.9432314,13.2527964 L10.9432314,12.049217 Z M14.7030568,12.049217 L16.5851528,12.049217 L16.5851528,13.2527964 L14.7030568,13.2527964 L14.7030568,12.049217 Z M3.41484716,14.4563758 L5.29694323,14.4563758 L5.29694323,15.6599553 L3.41484716,15.6599553 L3.41484716,14.4563758 Z M7.1790393,14.4563758 L9.06113537,14.4563758 L9.06113537,15.6599553 L7.1790393,15.6599553 L7.1790393,14.4563758 Z M10.9432314,14.4563758 L12.8253275,14.4563758 L12.8253275,15.6599553 L10.9432314,15.6599553 L10.9432314,14.4563758 Z" />
                                    </SvgIcon>
                                </IconButton>
                                <IconButton color="inherit">
                                    {/* <SettingsIcon /> */}
                                    <SvgIcon>
                                        <path d="M18.6442397,7.35594337 L17.4596428,7.35594337 C17.3740885,7.35594337 17.334602,7.33618703 17.3280209,7.33618703 C17.2424666,7.06618373 17.1371691,6.86862035 17.0121283,6.61837339 C16.9726418,6.53934804 17.0055473,6.49324992 17.0252905,6.46690813 L17.8808328,5.61738558 C18.4073203,5.09054988 18.4073203,4.22785644 17.8808328,3.6944353 L16.2816269,2.09417188 C15.7485583,1.56075074 14.8864349,1.56075074 14.3533663,2.09417188 L13.4978241,2.95027988 C13.4517564,3.00296345 13.3727833,2.98979256 13.3135534,2.96345077 L13.1358639,2.87125453 C12.9976609,2.79881462 12.866039,2.73296016 12.6751873,2.6671057 C12.6686062,2.66052025 12.6488629,2.62100757 12.6488629,2.53539677 L12.6488629,1.36318736 C12.6488629,0.579519262 11.8393884,0 11.1220491,0 L8.8713149,0 C8.15397564,0 7.34450106,0.586104709 7.34450106,1.36318736 L7.34450106,2.53539677 C7.34450106,2.62100757 7.32475778,2.66052025 7.30501449,2.67369114 C7.10100058,2.74613105 6.92989213,2.8251564 6.74562149,2.9107672 L6.64032399,2.96345077 C6.54160757,3.0095489 6.49553992,2.97003622 6.48237773,2.95027988 L5.63341658,2.09417188 C5.10034796,1.56075074 4.23822463,1.56075074 3.71173709,2.09417188 L2.12569341,3.68784985 C1.59920588,4.21468554 1.59262478,5.07737899 2.11911231,5.61080013 L2.97465455,6.48007903 C3.02072221,6.52617715 3.0273033,6.59203161 2.99439783,6.65130063 L2.9220058,6.789595 C2.84303267,6.92788936 2.75747844,7.09252552 2.68508641,7.32301613 C2.67850531,7.32960158 2.63243766,7.34935792 2.54688343,7.34935792 L1.36228649,7.34935792 C0.579136284,7.34935792 0,8.1593678 0,8.87718143 L0,11.129404 C0,11.8472176 0.585717378,12.6572275 1.36228649,12.6572275 L2.54688343,12.6572275 C2.63243766,12.6572275 2.67192422,12.6769839 2.68508641,12.6901548 C2.77064063,12.9469872 2.86935704,13.1247942 2.96149236,13.2960158 L3.00097893,13.3684557 C3.00756002,13.3882121 3.04046549,13.4408956 2.97465455,13.5001646 L2.1388556,14.3233454 C1.88219292,14.5801778 1.73740885,14.922621 1.73740885,15.2848205 C1.73740885,15.6470201 1.88219292,15.9894633 2.1388556,16.2528811 L3.73148038,17.8399737 C4.264549,18.3733948 5.12667233,18.3668094 5.65974096,17.8399737 L6.5152832,16.9772802 C6.56135086,16.9245966 6.64032399,16.9377675 6.69297274,16.9641093 L6.87066228,17.0497201 C7.00886526,17.12216 7.14048714,17.1880145 7.33133887,17.2538689 C7.33791997,17.2604544 7.35766325,17.3065525 7.35766325,17.3855779 L7.35766325,18.6368126 C7.35766325,19.4204807 8.16713783,20 8.88447709,20 L11.1352113,20 C11.8591316,20 12.6620251,19.4138953 12.6620251,18.6368126 L12.6620251,17.3855779 C12.6620251,17.2999671 12.6817684,17.2604544 12.6949306,17.2472835 C12.8989445,17.1748436 13.070053,17.0958182 13.2609047,17.003622 L13.3596211,16.9575239 C13.4583375,16.9114257 13.5044052,16.9509384 13.5175674,16.9706948 L14.3665285,17.8268028 C14.6231912,18.0836352 14.9654081,18.228515 15.3273682,18.228515 L15.3273682,18.228515 C15.6893284,18.228515 16.0315453,18.0836352 16.288208,17.8268028 L17.8742517,16.2331248 C18.1309144,15.9762924 18.2756984,15.6338492 18.2691173,15.2650642 C18.2691173,14.9028647 18.1243333,14.553836 17.8610895,14.2970036 L17.0318716,13.4738229 C16.985804,13.4277247 16.9792229,13.3684557 17.0055473,13.3157721 L17.0845204,13.1840632 C17.1634935,13.0523543 17.2490477,12.900889 17.3214398,12.6703984 C17.3280209,12.663813 17.3740885,12.6440566 17.4530617,12.6440566 L18.6376586,12.6440566 C19.4208088,12.6440566 19.9999451,11.8340468 19.9999451,11.1162331 L19.9999451,8.86401054 C20.0065262,8.1593678 19.4208088,7.35594337 18.6442397,7.35594337 Z M18.7824427,11.1359895 C18.7824427,11.2545275 18.6771452,11.4191636 18.6442397,11.43892 L17.4596428,11.43892 C16.8278577,11.43892 16.3474378,11.7616068 16.1631672,12.3081989 C16.1236806,12.4201515 16.0841941,12.4860059 16.0249642,12.5913731 L15.9262478,12.7691801 C15.6432608,13.3026013 15.7485583,13.9413895 16.1763294,14.3694435 L17.0055473,15.1926243 C17.0384527,15.2255515 17.0450338,15.2650642 17.0450338,15.291406 C17.0450338,15.3177478 17.0384527,15.3572605 17.0055473,15.3901877 L15.4195036,16.9838657 C15.3536926,17.0497201 15.2944628,17.0497201 15.2352329,16.9838657 L14.3862718,16.1277577 C13.978244,15.71946 13.3727833,15.6206783 12.8331336,15.8709253 L12.7278361,15.9236088 C12.5764709,15.9960487 12.444849,16.0619032 12.2803217,16.1145868 C11.747253,16.3055647 11.4313605,16.7863023 11.4313605,17.4053342 L11.4379416,18.6368126 C11.4116172,18.6960817 11.253671,18.8014488 11.1286302,18.8014488 L8.87789599,18.8014488 C8.7594363,18.8014488 8.59490895,18.6960817 8.57516566,18.6631544 L8.57516566,17.4119197 C8.57516566,16.7928877 8.25927314,16.3055647 7.72620452,16.1211722 C7.61432592,16.0816595 7.5287717,16.0355614 7.43663638,15.9894633 C7.37082544,15.9565361 7.2984334,15.9170234 7.21946027,15.8840961 C7.02202745,15.7918999 6.81143243,15.7458018 6.60741852,15.7458018 C6.25203943,15.7458018 5.90982254,15.8840961 5.65315987,16.1409285 L4.79761763,16.9970365 C4.74496887,17.0497201 4.65283356,17.0497201 4.6001848,16.9970365 L3.00756002,15.409944 C2.97465455,15.3770168 2.96807346,15.3375041 2.96807346,15.3111623 C2.96807346,15.2848205 2.97465455,15.2518933 3.00756002,15.2189661 L3.84335898,14.3957853 C4.2711301,13.9743168 4.36984651,13.3421139 4.09344055,12.8152782 L4.05395399,12.7362529 C3.98156195,12.604544 3.91575101,12.4860059 3.86310226,12.3147843 C3.67883162,11.7681923 3.19841175,11.4455054 2.56662671,11.4455054 L1.40835415,11.4520909 C1.3491243,11.4257491 1.24382679,11.2676984 1.24382679,11.1491604 L1.24382679,8.89693777 C1.24382679,8.77839974 1.3491243,8.61376358 1.38202977,8.59400724 L2.56662671,8.59400724 C3.19183066,8.59400724 3.69199381,8.25814949 3.86310226,7.72472835 C3.90916992,7.58643398 3.96181867,7.49423773 4.01446742,7.39545604 L4.10660274,7.22423444 C4.3764276,6.6908133 4.28429228,6.05202502 3.86968335,5.63055647 L3.01414112,4.76127758 C2.96149236,4.70859401 2.96149236,4.61639776 3.01414112,4.56371419 L4.6067659,2.96345077 C4.65283356,2.91735265 4.75154997,2.91735265 4.79761763,2.96345077 L5.64657877,3.81955878 C6.05460661,4.22785644 6.66006727,4.32663813 7.19313589,4.07639118 L7.30501449,4.02370761 C7.44979857,3.9512677 7.58142045,3.89199868 7.7459478,3.83272967 C8.27901643,3.64175173 8.59490895,3.16101416 8.59490895,2.54198222 L8.58832785,1.39611459 C8.61465223,1.33684557 8.77259849,1.23147843 8.89105818,1.23147843 L11.1417924,1.23147843 C11.2602521,1.23147843 11.4247794,1.33684557 11.4445227,1.3697728 L11.4445227,2.54198222 C11.4445227,3.16101416 11.7604152,3.64175173 12.2934839,3.83272967 C12.4053625,3.87224234 12.4909167,3.91834047 12.583052,3.97102404 C12.6488629,4.00395127 12.721255,4.04346394 12.8002281,4.08297662 C13.3332967,4.33322358 13.9650818,4.23444188 14.3731096,3.82614422 L15.2286518,2.97003622 C15.2813006,2.91735265 15.3734359,2.9107672 15.4260847,2.97003622 L17.0187094,4.57029964 C17.0713582,4.62298321 17.0713582,4.70859401 17.0187094,4.76127758 L16.1631672,5.61080013 C15.7419772,6.03226869 15.6498419,6.65130063 15.9525722,7.25057623 C16.0315453,7.40204149 16.1039374,7.53375041 16.1631672,7.72472835 C16.3408567,8.25814949 16.8344388,8.59400724 17.4596428,8.59400724 L18.6179153,8.5874218 C18.6771452,8.61376358 18.7824427,8.77181429 18.7824427,8.89693777 L18.7824427,11.1359895 L18.7824427,11.1359895 Z M10.0032631,6.53934804 C8.0881647,6.53934804 6.53502648,8.10009878 6.53502648,10.0098782 C6.53502648,11.926243 8.09474579,13.4804083 10.0032631,13.4804083 C11.9183615,13.4804083 13.4714997,11.9196576 13.4714997,10.0098782 C13.4714997,8.09351334 11.9183615,6.53934804 10.0032631,6.53934804 Z M10.0032631,12.2555153 C8.76601739,12.2555153 7.75910999,11.247942 7.75910999,10.0098782 C7.75910999,8.77181429 8.76601739,7.76424103 10.0032631,7.76424103 C11.2405088,7.76424103 12.2474162,8.77181429 12.2474162,10.0098782 C12.2474162,11.247942 11.2405088,12.2555153 10.0032631,12.2555153 Z" />
                                    </SvgIcon>
                                </IconButton>
                                {/* <IconButton
                                    aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                                    aria-haspopup="true"
                                    onClick={this.handleProfileMenuOpen}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton> */}
                            </div>
                        </div>
                        <div className={classes.sectionMobile}>
                            <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                                <MoreIcon />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                {renderMenu}
                {renderMobileMenu}
            </div>
        );
    }
}


const styledComponent = withStyles(styles, { withTheme: true })(ApplicationBar);
export default styledComponent;